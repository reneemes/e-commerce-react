import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Contact from './components/ContactPage/Contact';
import ProductPage from './components/ProductPage/ProductPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className='app'>
      <Header />
      <main className='content'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/shop' element={<ProductPage/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
