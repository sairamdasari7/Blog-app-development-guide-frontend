import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import BlogForm from './components/BlogForm';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/posts/:id" element={<BlogDetail />} />
            <Route path="/create" element={<BlogForm />} />
            <Route path="/edit/:id" element={<BlogForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
