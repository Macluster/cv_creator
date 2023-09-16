import { DefaultSidebar } from '../Components/Navbar'
import BasicDetails from './BasicDetails';

import ItemCard from '../Components/ItemCard';
import EducationPage from './Education'
import { RecoilRoot } from 'recoil';
import ProjectPage from './Projects';
import DefaultSidebarForMobile, { DrawerForMobile } from '../Components/Sidebar';
import OutputPage from './Outputpage';
import SkillPage from './Skills';
import WorkexperiencePage from './Works';
import { useState, useEffect } from 'react';
function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
function CreatorPage()
{
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [currentItem, setItem] = useState(0);

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])
    return (
        <RecoilRoot>
            <div className='flex flex-col sm:flex-row w-full'>
                {screenSize.width < 700 ? <DrawerForMobile changeItem={setItem} /> : <DefaultSidebar changeItem={setItem} />}

                <div className='h-full w-full p-2 lg:p-10'>

                    {currentItem == 0 ? <BasicDetails nav={setItem}/> : currentItem == 1 ? <EducationPage nav={setItem} /> : currentItem == 2 ? <ProjectPage nav={setItem} /> : currentItem == 3 ? <SkillPage nav={setItem} /> : currentItem == 4 ? <WorkexperiencePage nav={setItem} /> : <OutputPage nav={setItem} />}
                </div>
            </div>
        </RecoilRoot>
    );
}


export default CreatorPage;