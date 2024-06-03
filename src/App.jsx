import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/style.css';
import './css/util.css';
import Navbar from './headers/Navbar';
import Mens from './Mens/Mens';
import Kids from './Kids/Kids';
import Women from './Women/Women';
import Home from './Home/Home';
import Beauty from './Beauty/Beauty';
import HomeLiving from './Home&living/Home&living';
import Studio from './Studio/Studio';
import User from './User/User';
import Wishlist  from './Wishlist/Wishlist';
import Bag from './Bag/Bag';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar is outside of Routes */}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/home&living" element={<HomeLiving />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/user" element={<User />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/bag" element={<Bag />} />
        
       
      </Routes>
     
      
    </BrowserRouter>
  );
}

export default App;
