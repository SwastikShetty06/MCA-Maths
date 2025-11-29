import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';
import Syllabus from './pages/Syllabus';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="topic/:id" element={<TopicPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
