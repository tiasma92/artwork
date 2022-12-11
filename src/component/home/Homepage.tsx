import { Link } from 'react-router-dom';
import './Homepage.css';

function HomePage() {
  return (
    <div className="home-container">
      <h2>Bienvenue sur mon test Artwork !</h2>
      <Link to="domain" className="link-button">
        Cliquez ici pour être dirigez vers la page domain
      </Link>
    </div>
  );
}

export default HomePage;
