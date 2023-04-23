import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import NavModal from './components/NavModal/NavModal';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import AdminPage from './pages/AdminPage/AdminPage';
import BonusActionsPage from './pages/BonusActionsPage/BonusActionsPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import CreatePizzaPage from './pages/CreatePizzaPage/CreatePizzaPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { loginAction } from './redux/slices/authSlice';
import { fetchPizzas } from './redux/slices/pizzasSlice';




function App() {
  const isAuth = useSelector(state => state.auth.isAuth)
  
  const dispatch = useDispatch()

  const [isProdCreated, setIsProdCreated] = useState(false)
  
  
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


  const [isCart, setIsCart] = useState(false)
  // const [isBurgerMenu, setIsBurgerMenu] = useState(false)
  const progress = useSelector(state => state.pizzas.progress)
  const isLoading = useSelector(state => state.pizzas.isLoading)


  useEffect(() => {
    // window.addEventListener('scroll', () => checkNavPosition(nav, 95))
    const el = document.querySelector("#Navigation")
    const observer = new IntersectionObserver( 
      ([e]) => {
        e.target.classList.toggle("is-pinned", e.intersectionRatio < 1)
        // console.log(e.intersectionRatio);
      },
      { threshold: [1] }
    );

    observer.observe(el);
    
    dispatch(fetchPizzas())
  }, [])

  useEffect(() => {
    if (isCart) {
      document.querySelector('body').style.overflow = 'hidden'
    } else{
      document.querySelector('body').style.overflow = 'overlay'
    }

    if (isLoading) {
      document.querySelector('.loading-cover').style.transition = '0s'
      document.querySelector('.loading-cover').style.opacity = '1'
    } else{
      setTimeout(() => {
        document.querySelector('.loading-cover').style.transition = '1s'
        document.querySelector('.loading-cover').style.opacity = '0'
      }, 100)
    }
  }, [isCart, isLoading])



  return (
    <div className="App">
      <Header />
      <Nav ref={nav} scrollTo={scrollTo} pizzasSection={pizzasSection} isCart={isCart} setIsCart={setIsCart} />

      <div className='container' style={{order: 6}}>
        {isAuth ? <Button title='Выйти' onClick={() => dispatch(loginAction(false))} /> : ''}
      </div>

      <Routes>
        <Route path='/' element={<HomePage setPath={setPath} pizzasSection={pizzasSection} />} />
        <Route path='/bonus-actions' element={<BonusActionsPage setPath={setPath} />} />
        <Route path='/contacts' element={<ContactsPage setPath={setPath} />} />
        <Route path='/aboutus' element={<AboutUsPage setPath={setPath} />} />
        <Route path='/admin' element={<PrivateRoute Component={() => <AdminPage setPath={setPath} isProdCreated={isProdCreated} setIsProdCreated={setIsProdCreated} pizzasSection={pizzasSection} />} isAuth={isAuth} />} />
        <Route path='/admin/create-pizza' element={<PrivateRoute Component={() => <CreatePizzaPage setPath={setPath} setIsProdCreated={setIsProdCreated} />} isAuth={isAuth} />} />
        <Route path='/login' element={<PublicRoute Component={() => <LoginPage setPath={setPath} />} isAuth={isAuth} />} />
        <Route path='*' element={<NotFoundPage setPath={setPath} />} />
      </Routes>

      <Footer />
      
      <NavModal isCart={isCart} setIsCart={setIsCart} />

      <div className='loading-cover'></div>
    </div>
  );
}

export default App;
