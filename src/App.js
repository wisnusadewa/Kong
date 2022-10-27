import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import SlideBar from './components/SlideBar'
import Youtube from './components/Youtube';
import YoutubeReactPlayer from './components/YoutubeReactPlayer';


function App() {
  return (
    <div>
        
        <NavbarComp />
        <div className='h-max'><SlideBar/></div>
        <div className='columns-2 gap-0'><Youtube/></div>
        
        {/* <YoutubeReactPlayer/> */}
    </div>
  );
}

export default App;
