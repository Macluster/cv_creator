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
    const [open, setOpen] = useState(false);
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

        <div className='flex flex-col sm:flex-row w-full' >

            {screenSize.width < 700 ? <DrawerForMobile setOpen={setOpen} open={open} changeItem={setItem} /> : <DefaultSidebar changeItem={setItem} />}

            <div className='h-full w-full flex flex-col  bg-[#EFECEC]'>
                <div className='w-full   lg:visible   h-[50px] lg:h-[70px] bg-[#6962AD] lg:bg-[white] flex flex-row justify-end items-center'>

                    <div className='flex flex-col h-[50px] w-full items-end justify-center '>

                        <div className='flex w-full  flex-row items-center justify-between lg:justify-end p-2'>
                            <img onClick={() => { setOpen(true) }} className='visible lg:invisible' src='https://cdn-icons-png.flaticon.com/128/11741/11741063.png' height={30} width={30} />
                            <h3 className='invisible lg:visible'>{userEmail}</h3>
                            <div className='w-[20px]'></div>
                            <img onClick={() => { setProfilePopupFlag(!profilePopuflag) }} src='https://cdn-icons-png.flaticon.com/128/3899/3899618.png' className='mr-2' height={30} width={30} />

                        </div>

                        <div style={{ visibility: profilePopuflag ? "visible" : "hidden", width: 200, position: 'absolute', marginTop: 50, marginRight: 5 }} className='flex flex-col bg-[#6962AD] shadow-xl text-white p-3 rounded-xl'>

                            {userEmail != null ? <h4 onClick={() => { localStorage.clear(); navigate("/Login") }}>Sign Out</h4> : <div />}

                            <h4 className="mt-2" onClick={() => { localStorage.clear(); navigate("/Login") }}>Log In</h4>
                        </div>
                    </div>
                </div>
                <div className='h-full w-full   p-0 lg:p-10 bg-[#EFECEC]' onClick={() => { setOpen(false); setProfilePopupFlag(false) }}>

                    {screens[currentItem]}
                </div>
            </div>
        </div>)

}


export default CreatorPage;