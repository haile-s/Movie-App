import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componenets/Home/Home'
import Footer from './componenets/Footer/Footer'
import PageNotFound from './componenets/PageNotFound/PageNoteFound'
import MovieDetail from './componenets/MovieDetail/MovieDetail'
import Header from './componenets/Header/Header';
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        
          <Header></Header>
        <div className='container'>
        <Routes>
          {/* Define routes using the `element` prop */}
          <Route path='/' exact element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetail />} />
          <Route path='*' element={<PageNotFound />} /> {/* For 404 not found */}
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
