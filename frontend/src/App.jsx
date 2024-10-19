import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';  
import './App.css';

const NotFound = lazy(() => import('./components/NotFound.jsx'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
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
