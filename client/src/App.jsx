import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/' element={<HomePage/>}/> */}
        {/* <Route path='/' element={<HomePage/>}/> */}
      </Routes>
      <Footer />
    </main>
  )
}

export default App;
