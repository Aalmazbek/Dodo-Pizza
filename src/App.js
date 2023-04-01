import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import MainSlider from './components/MainSlider/MainSlider';
import OftenOrderedSwiper from './components/OftenOrderedSwiper/OftenOrderedSwiper';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/aboutus' element={<AboutUsPage />} />
      </Routes>

    </div>
  );
}

export default App;
