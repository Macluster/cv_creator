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
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../backend/Database.js'

import {

    useRecoilValue,

} from 'recoil';
import { useNavigate } from 'react-router-dom';

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
    const [profilePopuflag, setProfilePopupFlag] = useState(false)

    var userEmail = "";



    userEmail = localStorage.getItem("email")


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

    const navigate = useNavigate();
    
    return (

        <div className='flex flex-col sm:flex-row w-full'>

            {screenSize.width < 700 ? <DrawerForMobile changeItem={setItem} /> : <DefaultSidebar changeItem={setItem} />}

            <div className='h-full w-full flex flex-col  bg-[#EFECEC]'>
                <div className='w-full invisible lg:visible   h-[30px] lg:h-[70px] bg-white flex flex-row justify-end items-center'>

                    <div className='flex flex-col w-[250px] items-end'>
                        <div className='flex flex-row items-center'>
                            <h3>{userEmail}</h3>
                            <div className='w-[20px]'></div>
                            <img onClick={() => { setProfilePopupFlag(!profilePopuflag)}} src='https://cdn-icons-png.flaticon.com/128/3899/3899618.png' className='mr-2' height={30} width={30} />

                        </div>

                        <div style={{ visibility: profilePopuflag ? "visible" : "hidden", width: 200, position: 'absolute', marginTop: 50, marginRight: 5 }} className='flex flex-col shadow-xl bg-white'>

                           {userEmail!=null?<h4 onClick={()=>{ localStorage.clear();navigate("/Login") }}>Sign Out</h4>:<div/>} 
                            <h4 onClick={()=>{ localStorage.clear();navigate("/Login") }}>Log In</h4>
                        </div>
                    </div>
                </div>
                <div className='h-full w-full  p-2 lg:p-10 bg-[#EFECEC]'>

                    {screens[currentItem]}
                </div>
            </div>
        </div>)

}


export default CreatorPage;