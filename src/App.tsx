import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlePage from './component/articlepage/ArticlePage';
import Domain from './component/domain/Domain';
import HomePage from './component/home/Homepage';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/domain" element={<Domain />} />

        <Route path="/domain/artwork/:id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
