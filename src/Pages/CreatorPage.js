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
import OtherPage from './OtherDetails';
import { otherAtom } from '../State/Atoms.js'

import {

    useRecoilValue,

} from 'recoil';

function getCurrentDimension() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}
function CreatorPage() {
    const otherData = useRecoilValue(otherAtom)
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [currentItem, setItem] = useState(2);

    const screens = [<OtherPage key={-1} nav={setItem} items={[]} sectionName={"Enter Section Name"} />, <OutputPage nav={setItem} />, <BasicDetails nav={setItem} />, <EducationPage nav={setItem} />, <ProjectPage nav={setItem} />, <SkillPage nav={setItem} />, <WorkexperiencePage nav={setItem} />]

    otherData.forEach((e, i) => { screens.push(<OtherPage key={i} nav={setItem} sectionName={e['sectionName']} items={e['items']} />) })

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

        <div className='flex flex-col sm:flex-row w-full'>
   
            {screenSize.width < 700 ? <DrawerForMobile changeItem={setItem} /> : <DefaultSidebar changeItem={setItem} />}

            <div className='h-full w-full flex flex-col  bg-[#EFECEC]'>
                <div className='w-full h-[70px] bg-white flex flex-row justify-end items-center'>

                <img src='https://cdn-icons-png.flaticon.com/128/3899/3899618.png' className='mr-2' height={30} width={30}/>
                </div>
                <div className='h-full w-full  p-2 lg:p-10 bg-[#EFECEC]'>
                    
                {screens[currentItem]}
                </div>
            </div>
        </div>)

}


export default CreatorPage;