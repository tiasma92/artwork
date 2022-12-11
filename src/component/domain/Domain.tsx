import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArtWork } from '../../type';
import './Domain.css';

export default function Domain() {
  const [artwork, setArtwork] = useState<ArtWork[]>([]);
  const result = axios.get<ArtWork>(
    'https://storage.googleapis.com/ya-misc/interviews/front/examples/0.json'
  );
  const secondResult = axios.get<ArtWork>(
    'https://storage.googleapis.com/ya-misc/interviews/front/examples/1.json'
  );
  useEffect(() => {
    result
      .then((value) => {
        const response = value.data;
        setArtwork([response]);

        secondResult
          .then((value) => {
            const responseData = value.data;
            setArtwork([...[response], responseData]);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h3>Commandez l'oeuvre de votre choix</h3>
      <div className="domain-container">
        {artwork?.map((art, index) => {
          return (
            <div key={index} className="domain-painting">
              <img src={art.imageUrl} alt="painting" className="domain-img" />
              <p className="domain-title">{art.title}</p>
              <Link to={`artwork/${index}`} className="link-button">
                Commandez votre oeuvre
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
