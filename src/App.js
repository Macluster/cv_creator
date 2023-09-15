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
import OutputPage from './Pages/Outputpage';
import SkillPage from './Pages/Skills';
import WorkexperiencePage from './Pages/Works';
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
      {screenSize.width<700?<DrawerForMobile  changeItem={setItem}/>:<DefaultSidebar changeItem={setItem}/>}
    
      <div className='h-full w-full p-2 lg:p-10'>
  
      {currentItem==0?<BasicDetails nav={setItem}/>:currentItem==1?<EducationPage nav={setItem}/>:currentItem==2?<ProjectPage nav={setItem}/>:currentItem==3?<SkillPage nav={setItem}/>:currentItem==4?<WorkexperiencePage nav={setItem}/>:<OutputPage nav={setItem}/>}
      </div>
      </div>
      </RecoilRoot>
    </div>
  );
}

export default App;
