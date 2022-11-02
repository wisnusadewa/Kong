import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import SlideBar from './components/SlideBar'
import Youtube from './components/Youtube';
import Follow from './components/Follow';

// const Bg1 = new URL('./assets/2.jpeg',import.meta.url)
// const Bg2 = new URL('./assets/1.jpg',import.meta.url)




function App() {
  return (
    <div>
        
        <NavbarComp />
        <div className=''>
          <Follow/>
          </div>
        <div className='h-max'><SlideBar/></div>
        <div className='columns-2 gap-0'><Youtube/></div>
        
        {/* <YoutubeReactPlayer/> */}
    </div>
  );
}

export default App;
