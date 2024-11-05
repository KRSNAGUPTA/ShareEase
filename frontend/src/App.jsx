import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.jsx';
import FileShare from './pages/FileShare.jsx';
import LinkShortner from './pages/LinkShortner.jsx';

const NotFound = lazy(() => import('./components/NotFound.jsx'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="share" element={<FileShare />} />
            <Route path="shorten" element={<LinkShortner />} />
            <Route path="/:slug" element={<SluggedNotFound />} /> {/* for testing only , slug find krne ke liye*/}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

function SluggedNotFound() {
  const { slug } = useParams();
  return <NotFound slug={slug} />;
}

export default App;
