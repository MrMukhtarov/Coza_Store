import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Admin from './admin/Admin';
import AddPhotos from './admin/Photos/AddPhotos';
import PhotosDetail from './admin/Photos/PhotosDetail';
import UpdatePhotos from './admin/Photos/UpdatePhotos';
import AddProducts from './admin/Products/AddProducts';
import ProductsDetail from './admin/Products/ProductsDetail';
import UpdateProduct from './admin/Products/UpdateProduct';
import Timer from './pages/Timer/Timer';
import Instagram from './pages/Instagram/Instagram';
import AddInstagram from './admin/Instagram/AddInstagram';
import DetailInstagram from './admin/Instagram/DetailInstagram';
import UpdateInstagram from './admin/Instagram/UpdateInstagram';
import LogoDetail from './admin/Logo/LogoDetail';
import UpdateLogo from './admin/Logo/UpdateLogo';
import SettingsDetail from './admin/Settingss/SettingsDetail';
import SettingsUpdate from './admin/Settingss/SettingsUpdate';
import SideBarDropDown from './components/SidebarDropdown/SideBarDropDown';
import AddSlider from './admin/Slider/AddSlider';
import UpdateSlider from './admin/Slider/UpdateSlider.jsx'
import SliderDetail from './admin/Slider/SliderDetail.jsx'
import About from './pages/About/About';

function App() {
  
  return (
    
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/addslider' element={<AddSlider/>}/>
            <Route path='/updateslider/:id' element={<UpdateSlider/>}/>
            <Route path='/sliderdetail' element={<SliderDetail/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/addphotos' element={<AddPhotos/>}/>
            <Route path='/photodetail' element={<PhotosDetail/>}/>
            <Route path='/updatephotos/:id' element={<UpdatePhotos/>}/>
            <Route path='/addproducts' element={<AddProducts/>}/>
            <Route path='/productdetail' element={<ProductsDetail/>}/>
            <Route path='/updateproduct/:id' element={<UpdateProduct/>}/>
            <Route path='/timer' element={<Timer/>}/>
            <Route path='/instagram' element={<Instagram/>}/>
            <Route path='/addinstagram' element={<AddInstagram/>}/>
            <Route path='/instagramdetail' element={<DetailInstagram/>}/>
            <Route path='/updatepost/:id' element={<UpdateInstagram/>}/>
            <Route path='/logodetail' element={<LogoDetail/>}/>
            <Route path='/updatelogo/:id' element={<UpdateLogo/>}/>
            <Route path='/settingdetail' element={<SettingsDetail/>}/>
            <Route path='/updatesetting/:id' element={<SettingsUpdate/>}/>
            <Route path='/sidebarnav' element={<SideBarDropDown/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;