import logo from './logo.svg';
import './App.css';
import { DefaultSidebar } from './Components/Navbar';
import BasicDetails from './Pages/BasicDetails';
import { useState,useEffect } from 'react';
import ItemCard from './Components/ItemCard';
import EducationPage from './Pages/Education';
import { RecoilRoot } from 'recoil';
import ProjectPage from './Pages/Projects';
import DefaultSidebarForMobile, { DrawerForMobile } from './Components/Sidebar';
function getCurrentDimension(){
  return {
      width: window.innerWidth,
      height: window.innerHeight
  }
}

function App() {

  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [currentItem,setItem]=useState(0);

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])
  return (
    <div className="App">
      <RecoilRoot>
        <div className='flex flex-col sm:flex-row w-full'>
      {screenSize.width<700?<DrawerForMobile changeItem={setItem}/>:<DefaultSidebar changeItem={setItem}/>}
    
      <div className='h-full w-full p-10'>
  
      {currentItem==0?<BasicDetails/>:currentItem==1?<EducationPage/>:<ProjectPage/>}
      </div>
      </div>
      </RecoilRoot>
    </div>
  );
}

export default App;
