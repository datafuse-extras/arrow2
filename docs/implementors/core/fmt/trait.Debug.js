(function() {var implementors = {};
implementors["arrow2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a> + '_","synthetic":false,"types":[]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.BinaryArray.html\" title=\"struct arrow2::array::BinaryArray\">BinaryArray</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::binary::BinaryArray"]},{"text":"impl&lt;'a, O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.BinaryValueIter.html\" title=\"struct arrow2::array::BinaryValueIter\">BinaryValueIter</a>&lt;'a, O&gt;","synthetic":false,"types":["arrow2::array::binary::iterator::BinaryValueIter"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutableBinaryArray.html\" title=\"struct arrow2::array::MutableBinaryArray\">MutableBinaryArray</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::binary::mutable::MutableBinaryArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.BooleanArray.html\" title=\"struct arrow2::array::BooleanArray\">BooleanArray</a>","synthetic":false,"types":["arrow2::array::boolean::BooleanArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutableBooleanArray.html\" title=\"struct arrow2::array::MutableBooleanArray\">MutableBooleanArray</a>","synthetic":false,"types":["arrow2::array::boolean::mutable::MutableBooleanArray"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.DictionaryKey.html\" title=\"trait arrow2::array::DictionaryKey\">DictionaryKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.DictionaryArray.html\" title=\"struct arrow2::array::DictionaryArray\">DictionaryArray</a>&lt;K&gt;","synthetic":false,"types":["arrow2::array::dictionary::DictionaryArray"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/array/trait.DictionaryKey.html\" title=\"trait arrow2::array::DictionaryKey\">DictionaryKey</a>, M:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/array/trait.MutableArray.html\" title=\"trait arrow2::array::MutableArray\">MutableArray</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutableDictionaryArray.html\" title=\"struct arrow2::array::MutableDictionaryArray\">MutableDictionaryArray</a>&lt;K, M&gt;","synthetic":false,"types":["arrow2::array::dictionary::mutable::MutableDictionaryArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.FixedSizeBinaryArray.html\" title=\"struct arrow2::array::FixedSizeBinaryArray\">FixedSizeBinaryArray</a>","synthetic":false,"types":["arrow2::array::fixed_size_binary::FixedSizeBinaryArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutableFixedSizeBinaryArray.html\" title=\"struct arrow2::array::MutableFixedSizeBinaryArray\">MutableFixedSizeBinaryArray</a>","synthetic":false,"types":["arrow2::array::fixed_size_binary::mutable::MutableFixedSizeBinaryArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.FixedSizeListArray.html\" title=\"struct arrow2::array::FixedSizeListArray\">FixedSizeListArray</a>","synthetic":false,"types":["arrow2::array::fixed_size_list::FixedSizeListArray"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/array/trait.MutableArray.html\" title=\"trait arrow2::array::MutableArray\">MutableArray</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutableFixedSizeListArray.html\" title=\"struct arrow2::array::MutableFixedSizeListArray\">MutableFixedSizeListArray</a>&lt;M&gt;","synthetic":false,"types":["arrow2::array::fixed_size_list::mutable::MutableFixedSizeListArray"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.ListArray.html\" title=\"struct arrow2::array::ListArray\">ListArray</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::list::ListArray"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>, M:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/array/trait.MutableArray.html\" title=\"trait arrow2::array::MutableArray\">MutableArray</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutableListArray.html\" title=\"struct arrow2::array::MutableListArray\">MutableListArray</a>&lt;O, M&gt;","synthetic":false,"types":["arrow2::array::list::mutable::MutableListArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.MapArray.html\" title=\"struct arrow2::array::MapArray\">MapArray</a>","synthetic":false,"types":["arrow2::array::map::MapArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.NullArray.html\" title=\"struct arrow2::array::NullArray\">NullArray</a>","synthetic":false,"types":["arrow2::array::null::NullArray"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.PrimitiveArray.html\" title=\"struct arrow2::array::PrimitiveArray\">PrimitiveArray</a>&lt;T&gt;","synthetic":false,"types":["arrow2::array::primitive::PrimitiveArray"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutablePrimitiveArray.html\" title=\"struct arrow2::array::MutablePrimitiveArray\">MutablePrimitiveArray</a>&lt;T&gt;","synthetic":false,"types":["arrow2::array::primitive::mutable::MutablePrimitiveArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.StructArray.html\" title=\"struct arrow2::array::StructArray\">StructArray</a>","synthetic":false,"types":["arrow2::array::struct_::StructArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.UnionArray.html\" title=\"struct arrow2::array::UnionArray\">UnionArray</a>","synthetic":false,"types":["arrow2::array::union::UnionArray"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.Utf8Array.html\" title=\"struct arrow2::array::Utf8Array\">Utf8Array</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::utf8::Utf8Array"]},{"text":"impl&lt;'a, O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.Utf8ValuesIter.html\" title=\"struct arrow2::array::Utf8ValuesIter\">Utf8ValuesIter</a>&lt;'a, O&gt;","synthetic":false,"types":["arrow2::array::utf8::iterator::Utf8ValuesIter"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutableUtf8Array.html\" title=\"struct arrow2::array::MutableUtf8Array\">MutableUtf8Array</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::utf8::mutable::MutableUtf8Array"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/bitmap/struct.Bitmap.html\" title=\"struct arrow2::bitmap::Bitmap\">Bitmap</a>","synthetic":false,"types":["arrow2::bitmap::immutable::Bitmap"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/bitmap/struct.MutableBitmap.html\" title=\"struct arrow2::bitmap::MutableBitmap\">MutableBitmap</a>","synthetic":false,"types":["arrow2::bitmap::mutable::MutableBitmap"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/bitmap/utils/trait.BitChunk.html\" title=\"trait arrow2::bitmap::utils::BitChunk\">BitChunk</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.BitChunksExact.html\" title=\"struct arrow2::bitmap::utils::BitChunksExact\">BitChunksExact</a>&lt;'a, T&gt;","synthetic":false,"types":["arrow2::bitmap::utils::chunk_iterator::chunks_exact::BitChunksExact"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/bitmap/utils/trait.BitChunk.html\" title=\"trait arrow2::bitmap::utils::BitChunk\">BitChunk</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.BitChunks.html\" title=\"struct arrow2::bitmap::utils::BitChunks\">BitChunks</a>&lt;'a, T&gt;","synthetic":false,"types":["arrow2::bitmap::utils::chunk_iterator::BitChunks"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.BitmapIter.html\" title=\"struct arrow2::bitmap::utils::BitmapIter\">BitmapIter</a>&lt;'a&gt;","synthetic":false,"types":["arrow2::bitmap::utils::iterator::BitmapIter"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.SlicesIterator.html\" title=\"struct arrow2::bitmap::utils::SlicesIterator\">SlicesIterator</a>&lt;'a&gt;","synthetic":false,"types":["arrow2::bitmap::utils::slice_iterator::SlicesIterator"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/buffer/struct.Buffer.html\" title=\"struct arrow2::buffer::Buffer\">Buffer</a>&lt;T&gt;","synthetic":false,"types":["arrow2::buffer::immutable::Buffer"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/chunk/struct.Chunk.html\" title=\"struct arrow2::chunk::Chunk\">Chunk</a>&lt;A&gt;","synthetic":false,"types":["arrow2::chunk::Chunk"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"arrow2/error/enum.ArrowError.html\" title=\"enum arrow2::error::ArrowError\">ArrowError</a>","synthetic":false,"types":["arrow2::error::ArrowError"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/array/trait.DictionaryKey.html\" title=\"trait arrow2::array::DictionaryKey\">DictionaryKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.DictionaryScalar.html\" title=\"struct arrow2::scalar::DictionaryScalar\">DictionaryScalar</a>&lt;K&gt;","synthetic":false,"types":["arrow2::scalar::dictionary::DictionaryScalar"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.PrimitiveScalar.html\" title=\"struct arrow2::scalar::PrimitiveScalar\">PrimitiveScalar</a>&lt;T&gt;","synthetic":false,"types":["arrow2::scalar::primitive::PrimitiveScalar"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.Utf8Scalar.html\" title=\"struct arrow2::scalar::Utf8Scalar\">Utf8Scalar</a>&lt;O&gt;","synthetic":false,"types":["arrow2::scalar::utf8::Utf8Scalar"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.BinaryScalar.html\" title=\"struct arrow2::scalar::BinaryScalar\">BinaryScalar</a>&lt;O&gt;","synthetic":false,"types":["arrow2::scalar::binary::BinaryScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.BooleanScalar.html\" title=\"struct arrow2::scalar::BooleanScalar\">BooleanScalar</a>","synthetic":false,"types":["arrow2::scalar::boolean::BooleanScalar"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.ListScalar.html\" title=\"struct arrow2::scalar::ListScalar\">ListScalar</a>&lt;O&gt;","synthetic":false,"types":["arrow2::scalar::list::ListScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.NullScalar.html\" title=\"struct arrow2::scalar::NullScalar\">NullScalar</a>","synthetic":false,"types":["arrow2::scalar::null::NullScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.StructScalar.html\" title=\"struct arrow2::scalar::StructScalar\">StructScalar</a>","synthetic":false,"types":["arrow2::scalar::struct_::StructScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.FixedSizeListScalar.html\" title=\"struct arrow2::scalar::FixedSizeListScalar\">FixedSizeListScalar</a>","synthetic":false,"types":["arrow2::scalar::fixed_size_list::FixedSizeListScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.FixedSizeBinaryScalar.html\" title=\"struct arrow2::scalar::FixedSizeBinaryScalar\">FixedSizeBinaryScalar</a>","synthetic":false,"types":["arrow2::scalar::fixed_size_binary::FixedSizeBinaryScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.UnionScalar.html\" title=\"struct arrow2::scalar::UnionScalar\">UnionScalar</a>","synthetic":false,"types":["arrow2::scalar::union::UnionScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/types/struct.days_ms.html\" title=\"struct arrow2::types::days_ms\">days_ms</a>","synthetic":false,"types":["arrow2::types::native::days_ms"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/types/struct.months_days_ns.html\" title=\"struct arrow2::types::months_days_ns\">months_days_ns</a>","synthetic":false,"types":["arrow2::types::native::months_days_ns"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"arrow2/types/enum.PrimitiveType.html\" title=\"enum arrow2::types::PrimitiveType\">PrimitiveType</a>","synthetic":false,"types":["arrow2::types::PrimitiveType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/compute/cast/struct.CastOptions.html\" title=\"struct arrow2::compute::cast::CastOptions\">CastOptions</a>","synthetic":false,"types":["arrow2::compute::cast::CastOptions"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/compute/sort/struct.SortColumn.html\" title=\"struct arrow2::compute::sort::SortColumn\">SortColumn</a>&lt;'a&gt;","synthetic":false,"types":["arrow2::compute::sort::lex_sort::SortColumn"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/compute/sort/struct.SortOptions.html\" title=\"struct arrow2::compute::sort::SortOptions\">SortOptions</a>","synthetic":false,"types":["arrow2::compute::sort::SortOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/csv/write/struct.SerializeOptions.html\" title=\"struct arrow2::io::csv::write::SerializeOptions\">SerializeOptions</a>","synthetic":false,"types":["arrow2::io::csv::write::serialize::SerializeOptions"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/json/write/struct.Serializer.html\" title=\"struct arrow2::io::json::write::Serializer\">Serializer</a>&lt;A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;A, <a class=\"enum\" href=\"arrow2/error/enum.ArrowError.html\" title=\"enum arrow2::error::ArrowError\">ArrowError</a>&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["arrow2::io::json::write::Serializer"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/ndjson/write/struct.Serializer.html\" title=\"struct arrow2::io::ndjson::write::Serializer\">Serializer</a>&lt;A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;A, <a class=\"enum\" href=\"arrow2/error/enum.ArrowError.html\" title=\"enum arrow2::error::ArrowError\">ArrowError</a>&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["arrow2::io::ndjson::write::Serializer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/ipc/read/struct.FileMetadata.html\" title=\"struct arrow2::io::ipc::read::FileMetadata\">FileMetadata</a>","synthetic":false,"types":["arrow2::io::ipc::read::reader::FileMetadata"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/ipc/read/struct.StreamMetadata.html\" title=\"struct arrow2::io::ipc::read::StreamMetadata\">StreamMetadata</a>","synthetic":false,"types":["arrow2::io::ipc::read::stream::StreamMetadata"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"arrow2/io/ipc/write/enum.Compression.html\" title=\"enum arrow2::io::ipc::write::Compression\">Compression</a>","synthetic":false,"types":["arrow2::io::ipc::write::common::Compression"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/ipc/write/stream_async/struct.WriteOptions.html\" title=\"struct arrow2::io::ipc::write::stream_async::WriteOptions\">WriteOptions</a>","synthetic":false,"types":["arrow2::io::ipc::write::common::WriteOptions"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/ipc/write/struct.Record.html\" title=\"struct arrow2::io::ipc::write::Record\">Record</a>&lt;'a&gt;","synthetic":false,"types":["arrow2::io::ipc::write::common::Record"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/ipc/struct.IpcField.html\" title=\"struct arrow2::io::ipc::IpcField\">IpcField</a>","synthetic":false,"types":["arrow2::io::ipc::IpcField"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/ipc/struct.IpcSchema.html\" title=\"struct arrow2::io::ipc::IpcSchema\">IpcSchema</a>","synthetic":false,"types":["arrow2::io::ipc::IpcSchema"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/json_integration/struct.ArrowJson.html\" title=\"struct arrow2::io::json_integration::ArrowJson\">ArrowJson</a>","synthetic":false,"types":["arrow2::io::json_integration::ArrowJson"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/json_integration/struct.ArrowJsonSchema.html\" title=\"struct arrow2::io::json_integration::ArrowJsonSchema\">ArrowJsonSchema</a>","synthetic":false,"types":["arrow2::io::json_integration::ArrowJsonSchema"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/json_integration/struct.ArrowJsonField.html\" title=\"struct arrow2::io::json_integration::ArrowJsonField\">ArrowJsonField</a>","synthetic":false,"types":["arrow2::io::json_integration::ArrowJsonField"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/json_integration/struct.ArrowJsonFieldDictionary.html\" title=\"struct arrow2::io::json_integration::ArrowJsonFieldDictionary\">ArrowJsonFieldDictionary</a>","synthetic":false,"types":["arrow2::io::json_integration::ArrowJsonFieldDictionary"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/json_integration/struct.IntegerType.html\" title=\"struct arrow2::io::json_integration::IntegerType\">IntegerType</a>","synthetic":false,"types":["arrow2::io::json_integration::IntegerType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/json_integration/struct.ArrowJsonBatch.html\" title=\"struct arrow2::io::json_integration::ArrowJsonBatch\">ArrowJsonBatch</a>","synthetic":false,"types":["arrow2::io::json_integration::ArrowJsonBatch"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/json_integration/struct.ArrowJsonDictionaryBatch.html\" title=\"struct arrow2::io::json_integration::ArrowJsonDictionaryBatch\">ArrowJsonDictionaryBatch</a>","synthetic":false,"types":["arrow2::io::json_integration::ArrowJsonDictionaryBatch"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/json_integration/struct.ArrowJsonColumn.html\" title=\"struct arrow2::io::json_integration::ArrowJsonColumn\">ArrowJsonColumn</a>","synthetic":false,"types":["arrow2::io::json_integration::ArrowJsonColumn"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/parquet/read/struct.ColumnIndex.html\" title=\"struct arrow2::io::parquet::read::ColumnIndex\">ColumnIndex</a>","synthetic":false,"types":["arrow2::io::parquet::read::indexes::ColumnIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"arrow2/io/parquet/read/statistics/enum.Count.html\" title=\"enum arrow2::io::parquet::read::statistics::Count\">Count</a>","synthetic":false,"types":["arrow2::io::parquet::read::statistics::Count"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/parquet/read/statistics/struct.Statistics.html\" title=\"struct arrow2::io::parquet::read::statistics::Statistics\">Statistics</a>","synthetic":false,"types":["arrow2::io::parquet::read::statistics::Statistics"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"arrow2/io/parquet/write/enum.Nested.html\" title=\"enum arrow2::io::parquet::write::Nested\">Nested</a>&lt;'a&gt;","synthetic":false,"types":["arrow2::io::parquet::write::pages::Nested"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/parquet/write/struct.WriteOptions.html\" title=\"struct arrow2::io::parquet::write::WriteOptions\">WriteOptions</a>","synthetic":false,"types":["arrow2::io::parquet::write::WriteOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"arrow2/io/avro/enum.Compression.html\" title=\"enum arrow2::io::avro::Compression\">Compression</a>","synthetic":false,"types":["arrow2::io::avro::Compression"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/avro/struct.CompressedBlock.html\" title=\"struct arrow2::io::avro::CompressedBlock\">CompressedBlock</a>","synthetic":false,"types":["arrow2::io::avro::CompressedBlock"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/io/avro/struct.Block.html\" title=\"struct arrow2::io::avro::Block\">Block</a>","synthetic":false,"types":["arrow2::io::avro::Block"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/datatypes/struct.Field.html\" title=\"struct arrow2::datatypes::Field\">Field</a>","synthetic":false,"types":["arrow2::datatypes::field::Field"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.PhysicalType.html\" title=\"enum arrow2::datatypes::PhysicalType\">PhysicalType</a>","synthetic":false,"types":["arrow2::datatypes::physical_type::PhysicalType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.IntegerType.html\" title=\"enum arrow2::datatypes::IntegerType\">IntegerType</a>","synthetic":false,"types":["arrow2::datatypes::physical_type::IntegerType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/datatypes/struct.Schema.html\" title=\"struct arrow2::datatypes::Schema\">Schema</a>","synthetic":false,"types":["arrow2::datatypes::schema::Schema"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.DataType.html\" title=\"enum arrow2::datatypes::DataType\">DataType</a>","synthetic":false,"types":["arrow2::datatypes::DataType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.UnionMode.html\" title=\"enum arrow2::datatypes::UnionMode\">UnionMode</a>","synthetic":false,"types":["arrow2::datatypes::UnionMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.TimeUnit.html\" title=\"enum arrow2::datatypes::TimeUnit\">TimeUnit</a>","synthetic":false,"types":["arrow2::datatypes::TimeUnit"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.IntervalUnit.html\" title=\"enum arrow2::datatypes::IntervalUnit\">IntervalUnit</a>","synthetic":false,"types":["arrow2::datatypes::IntervalUnit"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/ffi/struct.ArrowSchema.html\" title=\"struct arrow2::ffi::ArrowSchema\">ArrowSchema</a>","synthetic":false,"types":["arrow2::ffi::generated::ArrowSchema"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/ffi/struct.ArrowArray.html\" title=\"struct arrow2::ffi::ArrowArray\">ArrowArray</a>","synthetic":false,"types":["arrow2::ffi::generated::ArrowArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow2/ffi/struct.ArrowArrayStream.html\" title=\"struct arrow2::ffi::ArrowArrayStream\">ArrowArrayStream</a>","synthetic":false,"types":["arrow2::ffi::generated::ArrowArrayStream"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()