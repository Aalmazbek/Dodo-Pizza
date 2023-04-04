import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import MainSlider from './components/MainSlider/MainSlider';
import OftenOrderedSwiper from './components/OftenOrderedSwiper/OftenOrderedSwiper';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import AdminPage from './pages/AdminPage/AdminPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import CreatePizzaPage from './pages/CreatePizzaPage/CreatePizzaPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/aboutus' element={<AboutUsPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/admin/create-pizza' element={<CreatePizzaPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}

export default App;