import { useState } from "react";
// product images
import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";
// thumbnails
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

function ProductsSlider() {
  const slides = [
    { product: product1, thumb: thumbnail1, id: 1 },
    { product: product2, thumb: thumbnail2, id: 2 },
    { product: product3, thumb: thumbnail3, id: 3 },
    { product: product4, thumb: thumbnail4, id: 4 },
  ];

  const [selectedProduct, setSelectedProduct] = useState(slides[0].product);

  const handleThumbnailClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div className="w-100 mb-3">
        <img
          src={selectedProduct}
          alt="product"
          className="img-fluid rounded-4"
          style={{ width: "100%" }}
        />
      </div>
      <div className="d-flex justify-content-between" style={{ gap: "10px" }}>
        {slides.map((slide) => (
          <img
            className="rounded-2"
            style={{ cursor: "pointer", width: "23%" }}
            src={slide.thumb}
            alt={`thumbnail ${slide.id}`}
            key={slide.id}
            onClick={() => handleThumbnailClick(slide.product)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsSlider;
