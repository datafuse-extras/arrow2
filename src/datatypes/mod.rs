//! This module contains logical types defined in the
//! [Arrow specification](https://arrow.apache.org/docs/cpp/api/datatype.html):
//!
//! * [`DataType`]
//! * [`Field`]
//! * [`Schema`]
//! * [`TimeUnit`]
//! * [`IntervalUnit`]
mod extension;
mod field;
mod schema;

pub use extension::Extension;
pub use field::Field;
pub use schema::Schema;

/// The set of datatypes that are supported by this implementation of Apache Arrow.
///
/// The Arrow specification on data types includes some more types.
/// See also [`Schema.fbs`](https://github.com/apache/arrow/blob/master/format/Schema.fbs)
/// for Arrow's specification.
///
/// The variants of this enum include primitive fixed size types as well as parametric or
/// nested types.
/// Currently the Rust implementation supports the following  nested types:
///  - `List<T>`
///  - `Struct<T, U, V, ...>`
///
/// Nested types can themselves be nested within other arrays.
/// For more information on these types please see
/// [the physical memory layout of Apache Arrow](https://arrow.apache.org/docs/format/Columnar.html#physical-memory-layout).
#[allow(clippy::derive_hash_xor_eq)]
#[derive(Debug, Clone, Eq, Hash, PartialOrd, Ord)]
pub enum DataType {
    /// Null type, representing an array without values or validity, only a length.
    Null,
    /// A boolean datatype representing the values `true` and `false`.
    Boolean,
    /// A signed 8-bit integer.
    Int8,
    /// A signed 16-bit integer.
    Int16,
    /// A signed 32-bit integer.
    Int32,
    /// A signed 64-bit integer.
    Int64,
    /// An unsigned 8-bit integer.
    UInt8,
    /// An unsigned 16-bit integer.
    UInt16,
    /// An unsigned 32-bit integer.
    UInt32,
    /// An unsigned 64-bit integer.
    UInt64,
    /// A 16-bit floating point number.
    Float16,
    /// A 32-bit floating point number.
    Float32,
    /// A 64-bit floating point number.
    Float64,
    /// A timestamp with an optional timezone.
    ///
    /// Time is measured as a Unix epoch, counting the seconds from
    /// 00:00:00.000 on 1 January 1970, excluding leap seconds,
    /// as a 64-bit integer.
    ///
    /// The time zone is a string indicating the name of a time zone, one of:
    ///
    /// * As used in the Olson time zone database (the "tz database" or
    ///   "tzdata"), such as "America/New_York"
    /// * An absolute time zone offset of the form +XX:XX or -XX:XX, such as +07:30
    Timestamp(TimeUnit, Option<String>),
    /// A 32-bit date representing the elapsed time since UNIX epoch (1970-01-01)
    /// in days (32 bits).
    Date32,
    /// A 64-bit date representing the elapsed time since UNIX epoch (1970-01-01)
    /// in milliseconds (64 bits). Values are evenly divisible by 86400000.
    Date64,
    /// A 32-bit time representing the elapsed time since midnight in the unit of `TimeUnit`.
    Time32(TimeUnit),
    /// A 64-bit time representing the elapsed time since midnight in the unit of `TimeUnit`.
    Time64(TimeUnit),
    /// Measure of elapsed time in either seconds, milliseconds, microseconds or nanoseconds.
    Duration(TimeUnit),
    /// A "calendar" interval which models types that don't necessarily
    /// have a precise duration without the context of a base timestamp (e.g.
    /// days can differ in length during day light savings time transitions).
    Interval(IntervalUnit),
    /// Opaque binary data of variable length.
    Binary,
    /// Opaque binary data of fixed size.
    /// Enum parameter specifies the number of bytes per value.
    FixedSizeBinary(i32),
    /// Opaque binary data of variable length and 64-bit offsets.
    LargeBinary,
    /// A variable-length string in Unicode with UTF-8 encoding.
    Utf8,
    /// A variable-length string in Unicode with UFT-8 encoding and 64-bit offsets.
    LargeUtf8,
    /// A list of some logical data type with variable length.
    List(Box<Field>),
    /// A list of some logical data type with fixed length.
    FixedSizeList(Box<Field>, i32),
    /// A list of some logical data type with variable length and 64-bit offsets.
    LargeList(Box<Field>),
    /// A nested datatype that contains a number of sub-fields.
    Struct(Vec<Field>),
    /// A nested datatype that can represent slots of differing types.
    /// Third argument represents sparsness
    Union(Vec<Field>, Option<Vec<i32>>, bool),
    /// A dictionary encoded array (`key_type`, `value_type`), where
    /// each array element is an index of `key_type` into an
    /// associated dictionary of `value_type`.
    ///
    /// Dictionary arrays are used to store columns of `value_type`
    /// that contain many repeated values using less memory, but with
    /// a higher CPU overhead for some operations.
    ///
    /// This type mostly used to represent low cardinality string
    /// arrays or a limited set of primitive types as integers.
    Dictionary(Box<DataType>, Box<DataType>),
    /// Decimal value with precision and scale
    /// precision is the number of digits in the number and
    /// scale is the number of decimal places.
    /// The number 999.99 has a precision of 5 and scale of 2.
    Decimal(usize, usize),

    /// Extension types spec as: https://arrow.apache.org/docs/format/Columnar.html#extension-types
    Extension(Arc<dyn Extension>),
}

impl std::fmt::Display for DataType {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(f, "{:?}", self)
    }
}

impl PartialEq for DataType {
    fn eq(&self, other: &Self) -> bool {
        match (self, other) {
            (Self::Timestamp(l0, l1), Self::Timestamp(r0, r1)) => l0 == r0 && l1 == r1,
            (Self::Time32(l0), Self::Time32(r0)) => l0 == r0,
            (Self::Time64(l0), Self::Time64(r0)) => l0 == r0,
            (Self::Duration(l0), Self::Duration(r0)) => l0 == r0,
            (Self::Interval(l0), Self::Interval(r0)) => l0 == r0,
            (Self::FixedSizeBinary(l0), Self::FixedSizeBinary(r0)) => l0 == r0,
            (Self::List(l0), Self::List(r0)) => l0 == r0,
            (Self::FixedSizeList(l0, l1), Self::FixedSizeList(r0, r1)) => l0 == r0 && l1 == r1,
            (Self::LargeList(l0), Self::LargeList(r0)) => l0 == r0,
            (Self::Struct(l0), Self::Struct(r0)) => l0 == r0,
            (Self::Union(l0, l1, l2), Self::Union(r0, r1, r2)) => l0 == r0 && l1 == r1 && l2 == r2,
            (Self::Dictionary(l0, l1), Self::Dictionary(r0, r1)) => l0 == r0 && l1 == r1,
            (Self::Decimal(l0, l1), Self::Decimal(r0, r1)) => l0 == r0 && l1 == r1,
            (Self::Extension(l0), Self::Extension(r0)) => l0 == r0,
            _ => core::mem::discriminant(self) == core::mem::discriminant(other),
        }
    }
}

/// An absolute length of time in seconds, milliseconds, microseconds or nanoseconds.
#[derive(Debug, Clone, PartialEq, Eq, Hash, PartialOrd, Ord)]
pub enum TimeUnit {
    /// Time in seconds.
    Second,
    /// Time in milliseconds.
    Millisecond,
    /// Time in microseconds.
    Microsecond,
    /// Time in nanoseconds.
    Nanosecond,
}

/// YEAR_MONTH or DAY_TIME interval in SQL style.
#[derive(Debug, Clone, PartialEq, Eq, Hash, PartialOrd, Ord)]
pub enum IntervalUnit {
    /// Indicates the number of elapsed whole months, stored as 4-byte integers.
    YearMonth,
    /// Indicates the number of elapsed days and milliseconds,
    /// stored as 2 contiguous 32-bit integers (8-bytes in total).
    DayTime,
}

/// Physical data type which could be converted from DataType
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum PhysicalDataType {
    Null,
    Boolean,
    Int8,
    Int16,
    Int32,
    Int64,
    Int128,
    UInt8,
    UInt16,
    UInt32,
    UInt64,
    Float16,
    Float32,
    Float64,
    DaysMs,

    Binary,
    FixedSizeBinary(i32),
    LargeBinary,
    Utf8,
    LargeUtf8,
    List(Box<Field>),
    FixedSizeList(Box<Field>, i32),
    LargeList(Box<Field>),
    Struct(Vec<Field>),
    Union(Vec<Field>, Option<Vec<i32>>, bool),
    Dictionary(Box<DataType>, Box<DataType>),
}

impl DataType {
    /// Compares the datatype with another, ignoring nested field names
    /// and metadata.
    pub(crate) fn equals_datatype(&self, other: &DataType) -> bool {
        match (&self, other) {
            (DataType::List(a), DataType::List(b))
            | (DataType::LargeList(a), DataType::LargeList(b)) => {
                a.is_nullable() == b.is_nullable() && a.data_type().equals_datatype(b.data_type())
            }
            (DataType::FixedSizeList(a, a_size), DataType::FixedSizeList(b, b_size)) => {
                a_size == b_size
                    && a.is_nullable() == b.is_nullable()
                    && a.data_type().equals_datatype(b.data_type())
            }
            (DataType::Struct(a), DataType::Struct(b)) => {
                a.len() == b.len()
                    && a.iter().zip(b).all(|(a, b)| {
                        a.is_nullable() == b.is_nullable()
                            && a.data_type().equals_datatype(b.data_type())
                    })
            }
            _ => self == other,
        }
    }

    pub(crate) fn to_physical_type(&self) -> PhysicalDataType {
        match self {
            DataType::Null => PhysicalDataType::Null,
            DataType::Boolean => PhysicalDataType::Boolean,
            DataType::UInt8 => PhysicalDataType::UInt8,
            DataType::UInt16 => PhysicalDataType::UInt16,
            DataType::UInt32 => PhysicalDataType::UInt32,
            DataType::UInt64 => PhysicalDataType::UInt64,
            DataType::Int8 => PhysicalDataType::Int8,
            DataType::Int16 => PhysicalDataType::Int16,
            DataType::Int32
            | DataType::Date32
            | DataType::Time32(_)
            | DataType::Interval(IntervalUnit::YearMonth) => PhysicalDataType::Int32,
            DataType::Int64
            | DataType::Date64
            | DataType::Time64(_)
            | DataType::Timestamp(_, _)
            | DataType::Duration(_) => PhysicalDataType::Int64,
            DataType::Decimal(_, _) => PhysicalDataType::Int128,
            DataType::Interval(IntervalUnit::DayTime) => PhysicalDataType::DaysMs,
            DataType::Float16 => PhysicalDataType::Float16,
            DataType::Float32 => PhysicalDataType::Float32,
            DataType::Float64 => PhysicalDataType::Float64,
            DataType::Utf8 => PhysicalDataType::Utf8,
            DataType::LargeUtf8 => PhysicalDataType::LargeUtf8,
            DataType::Binary => PhysicalDataType::Binary,
            DataType::LargeBinary => PhysicalDataType::LargeBinary,
            DataType::List(x) => PhysicalDataType::List(x.clone()),
            DataType::LargeList(x) => PhysicalDataType::LargeList(x.clone()),
            DataType::Struct(x) => PhysicalDataType::Struct(x.clone()),
            DataType::Dictionary(k, v) => PhysicalDataType::Dictionary(k.clone(), v.clone()),
            DataType::FixedSizeBinary(size) => PhysicalDataType::FixedSizeBinary(*size),
            DataType::FixedSizeList(x, size) => PhysicalDataType::FixedSizeList(x.clone(), *size),
            DataType::Union(f, ids, is_sparse) => {
                PhysicalDataType::Union(f.clone(), ids.clone(), *is_sparse)
            }
            DataType::Extension(ty) => ty.data_type().to_physical_type(),
        }
    }

    pub fn is_phsical_type(&self) -> bool {
        matches!(
            self,
            DataType::Null
                | DataType::Boolean
                | DataType::Int8
                | DataType::Int16
                | DataType::Int32
                | DataType::Int64
                | DataType::UInt8
                | DataType::UInt16
                | DataType::UInt32
                | DataType::UInt64
                | DataType::Float16
                | DataType::Float32
                | DataType::Float64
                | DataType::Binary
                | DataType::LargeBinary
                | DataType::FixedSizeBinary(_)
                | DataType::Utf8
                | DataType::LargeUtf8
                | DataType::List(_)
                | DataType::LargeList(_)
                | DataType::FixedSizeList(_, _)
                | DataType::Struct(_)
                | DataType::Union(_, _, _)
                | DataType::Dictionary(_, _)
                | DataType::Interval(IntervalUnit::DayTime)
                | DataType::Decimal(_, _)
        )
    }
}

// backward compatibility
use std::sync::Arc;
pub type SchemaRef = Arc<Schema>;
