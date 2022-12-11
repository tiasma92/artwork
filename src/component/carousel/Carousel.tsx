import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './Carousel.css';

export default function Carousel(props: { images: string[] }) {
  const images = props.images;
  const [count, setCount] = useState<number>(0);
  const [imageInCarousel, setImageInCarousel] = useState(images.slice(0, 5));
  useEffect(() => {
    setImageInCarousel(images.slice(count, count + 5));
  }, [count]);

  return (
    <div className="container-carousel">
      <div>
        {count > 0 && (
          <FaAngleLeft
            onClick={(add) => setCount(count - 1)}
            className="chevron"
          />
        )}
      </div>
      <div className="img-container">
        {imageInCarousel.map((image, i) => (
          <img src={image} alt="img" key={i} className="img-carousel" />
        ))}
      </div>
      <div>
        {count !== images.length - 5 && (
          <FaAngleRight
            onClick={(add) => setCount(count + 1)}
            className="chevron"
          />
        )}
      </div>
    </div>
  );
}
