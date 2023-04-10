import { useEffect, useRef, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Button from './components/Button/Button';

import Header from './components/Header/Header';
import MainSlider from './components/MainSlider/MainSlider';
import Nav from './components/Nav/Nav';
import OftenOrderedSwiper from './components/OftenOrderedSwiper/OftenOrderedSwiper';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import AdminPage from './pages/AdminPage/AdminPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import CreatePizzaPage from './pages/CreatePizzaPage/CreatePizzaPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const authLocal = JSON.parse(localStorage.getItem('isAuth'))

function App() {
  const [isAuth, setAuth] = useState(authLocal)
  useEffect(() => {
    // if (JSON.parse(localStorage.getItem('isAuth'))) {
    //   setAuth(JSON.parse(localStorage.getItem('isAuth')))
    // }

    localStorage.setItem('isAuth', isAuth)
  },[isAuth])

  const [isProdCreated, setIsProdCreated] = useState(false)

  const logout = () => {
    setAuth(false)
  }


  const navigate = useNavigate()
  const [path, setPath] = useState('/')
  const pizzasSection = useRef(null)

  const scrollTo = (elem) => {
    if (path === '/') {
      elem.current.scrollIntoView({behavior: 'smooth'})
    } else{
      navigate('/')
      setTimeout(() => {
        elem.current.scrollIntoView({behavior: 'smooth'})
      }, 500)
    }
  }


  const nav = useRef()
  
  const checkNavPosition = (item, initialOffset) => {
    console.log(item.current.offsetTop)
    let itemOffsetTop = item.current.offsetTop
    
    if (itemOffsetTop > initialOffset) {
      item.current.classList.add('nav-shadow')
      item.current.firstElementChild.firstElementChild.firstElementChild.style.transform = 'translate(0px)'
    } else{
      item.current.classList.remove('nav-shadow')
      item.current.firstElementChild.firstElementChild.firstElementChild.style.transform = 'translate(-55px)'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => checkNavPosition(nav, 95))
  }, [])



  return (
    <div className="App">
      <Header />
      <Nav ref={nav} scrollTo={scrollTo} pizzasSection={pizzasSection} />

      <div className='container'>
        {isAuth ? <Button title='Выйти' onClick={() => setAuth(false)} /> : ''}
      </div>

      <Routes>
        <Route path='/' element={<HomePage setPath={setPath} pizzasSection={pizzasSection} />} />
        <Route path='/contacts' element={<ContactsPage setPath={setPath} />} />
        <Route path='/aboutus' element={<AboutUsPage setPath={setPath} />} />
        <Route path='/admin' element={<PrivateRoute Component={() => <AdminPage isProdCreated={isProdCreated} setIsProdCreated={setIsProdCreated} pizzasSection={pizzasSection} />} isAuth={isAuth} />} />
        <Route path='/admin/create-pizza' element={<PrivateRoute Component={() => <CreatePizzaPage setIsProdCreated={setIsProdCreated} />} isAuth={isAuth} />} />
        <Route path='/login' element={<PublicRoute Component={() => <LoginPage setAuth={setAuth} />} isAuth={isAuth} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}

export default App;
