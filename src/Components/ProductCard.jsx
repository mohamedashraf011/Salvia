function ProductCard({ image, title, subtitle }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center items-center h-36 bg-white">
        <img
          src={image}
          alt={title}
          className="h-24 object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="bg-[#4E6347] text-white py-3 text-center">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm italic text-white/80">{subtitle}</p>
      </div>
    </div>
  );
}

export default ProductCard;
