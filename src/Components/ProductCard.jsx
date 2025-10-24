function ProductCard({ image, title, subtitle }) {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden w-full max-w-xs flex flex-col items-center border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">

      <div className="flex justify-center items-center bg-white p-4 h-52">
        <img
          src={image}
          alt={title}
          className="h-40 w-auto object-contain"
        />
      </div>

      <div className="w-[90%] bg-[#4E6347] text-white rounded-xl py-4 px-2 text-center mb-5 mt-2 shadow-sm">
        <h3 className="font-bold text-lg uppercase tracking-wide">
          {title}
        </h3>
        <p className="font-light italic tracking-wide mt-1 opacity-95 text-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
