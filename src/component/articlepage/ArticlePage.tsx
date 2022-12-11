import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEye, FaRegSquare, FaArrowLeft } from 'react-icons/fa';
import { ArtWork } from '../../type';
import { ArticleInfoAndFee } from '../article/ArticleInfoAndFee';
import { useNavigate, useParams } from 'react-router-dom';
import './ArticlePage.css';
import Carousel from '../carousel/Carousel';
function ArticlePage() {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [artwork, setArtwork] = useState<ArtWork>();
  const navigate = useNavigate();
  let params = useParams();
  useEffect(() => {
    const result = axios.get<ArtWork>(
      `https://storage.googleapis.com/ya-misc/interviews/front/examples/${params.id}.json`
    );
    result
      .then((value) => {
        const response = value.data;
        setArtwork(response);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <button onClick={() => navigate(-1)} className="back-button">
        <FaArrowLeft /> Retour
      </button>
      {artwork != null && (
        <div className="page-Container">
          <div className="painting-container">
            <img src={artwork?.imageUrl} alt="painting" className="painting" />
            <div className="sub-painting">
              <div>
                <FaEye /> VIEW IN A ROOM
              </div>
              <div>
                <FaRegSquare /> AR VIEW
              </div>
            </div>
            <div>
              <h3
                onClick={() => setShowDescription(!showDescription)}
                className="title-info"
              >
                DESCRIPTION
              </h3>
              {showDescription && (
                <p className="description">{artwork.description}</p>
              )}
            </div>
            <div>
              <h3 onClick={() => setShowInfo(!showInfo)} className="title-info">
                SUBJECT, MEDIUM, STYLE, MATERIALS
              </h3>
              {showInfo && (
                <div className="description">
                  <div className="subtitle-description">
                    <p>SUBJECT </p>
                    <span>{artwork.subjects.join()}</span>
                  </div>
                  <div className="subtitle-description">
                    <p>STYLE </p>
                    <span>{artwork.styles.join()}</span>
                  </div>
                  <div className="subtitle-description">
                    <p>MEDIUM </p>
                    <span>{artwork.mediums.join()}</span>
                  </div>
                  <div className="subtitle-description">
                    <p>MATERIALS </p>
                    <span>{artwork.materials.join()}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <ArticleInfoAndFee artwork={artwork} />
        </div>
      )}
      {artwork?.otherArtworkImages && (
        <Carousel images={artwork?.otherArtworkImages} />
      )}
    </div>
  );
}

export default ArticlePage;
