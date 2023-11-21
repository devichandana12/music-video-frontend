
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Componets/Footer';
import Header from './Componets/Header';
import Landingpage from './pages/Landingpage';
import Home from './pages/Home';
import WatchHistory from './pages/WatchHistory';


function App() {
  return (
    <>
      <Header />
      <div className="Container m-5">


        <Routes>

          {/* list the pages that want to redirect */}
          <Route path='/' element={<Landingpage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/watchhistory' element={<WatchHistory />} />

        </Routes>


        {/* <WatchHistory /> */}

      </div>
      <Footer />
    </>
  );
}

export default App;
