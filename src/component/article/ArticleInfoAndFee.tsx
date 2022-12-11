import {
  FaRegStar,
  FaHourglassHalf,
  FaCheck,
  FaTruck,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { ArtWork, DimensionArtwork } from '../../type';
import './ArticleInfoAndFee.css';

const formatDimension = (dimension: DimensionArtwork) => {
  return `${dimension.width} W x ${dimension.height} H x ${dimension.depth} D in`;
};

const formatPrice = (price: number) => {
  const priceString = price.toString();
  if (priceString.length > 3) {
    return `${priceString.slice(0, -3)},${priceString.slice(-3)}€`;
  }
};

export function ArticleInfoAndFee(props: { artwork: ArtWork }) {
  const artwork = props.artwork;
  return (
    <div className="article-container">
      <div className="title">
        <h3>{artwork.title}</h3>
        <FaRegStar />
      </div>
      <div className="subtitle">
        <p className="fullname">{artwork.artistShort.fullname}</p>
        {artwork.artistShort.country && (
          <p className="country">{artwork.artistShort.country}</p>
        )}
      </div>
      <p className="subtitle-text">
        {artwork.category} {artwork.creationYear}
      </p>
      <p className="subtitle-text">{formatDimension(artwork.dimensions)}</p>
      <p className="price">{formatPrice(artwork.price)}</p>
      <div>
        <button className="buy-button">Acquire</button>
        <button className="proposal">Make an offer</button>
        <div>
          <p>
            <FaHourglassHalf /> PRE-RESERVE FOR 24 HOURS
          </p>
          <p className="text-little">
            <FaCheck /> 131€ estimated delivery for free
          </p>
          <p className="explaination-delivery">
            In order to obtain an accurate delivery fee, please enter your
            country of residence and zip code:
          </p>
          <div className="container-input">
            <input className="input" value="Spain" />
            <input className="input" value="91382" />
          </div>
          <p>
            <FaTruck /> Delivery fee is 129€
          </p>
          <div className="subinfo">
            <p>
              <FaCheck className="logo" />
              Free pickup in Bruxelles, Belgium
            </p>
            <p>
              <FaMapMarkerAlt className="logo" />
              Try 14 days at home for free
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
