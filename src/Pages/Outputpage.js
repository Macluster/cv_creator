
import { useState } from "react";
import html2canvas from 'html2canvas';
import { workExperienceAtom, basicDetailsAtom, EducationAtom, skillAtom, projectAtom } from '../State/Atoms.js'

import {

    useRecoilValue,

} from 'recoil';
import { MobileNav } from "@material-tailwind/react";


function OutputPage() {

    const [file, setFile] = useState();
    const basicData = useRecoilValue(basicDetailsAtom)
    const workData = useRecoilValue(workExperienceAtom)
    const educationData = useRecoilValue(EducationAtom)
    const skillData = useRecoilValue(skillAtom)
    const projectData = useRecoilValue(projectAtom)
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));

    }

    
    return (
      <DesktopView/>
    );


    function DesktopView()
    {
        return(
            <div className="w-full h-full flex flex-col"> 
            <button className="bg-slate-700" style={{backgroundColor:'red'}} onClick={(e)=>{print()}}>print</button>
               <div className="h-[30px]"></div>
                <div className="h-[500px]  overflow-scroll">
    
    
                    <div id="cv" className="shadow-xl w-[100%] h-[500px] lg:h-[1100px] flex flex-row  ">
                        <div className="h-full w-[40%] lg:w-[30%] bg-black flex flex-col items-center p-0" >
                            <div className="h-[20px]"></div>
                            <ProfileImage handleChange={handleChange} file={file}></ProfileImage>
                            <div className="h-[40px]"></div>
                            <ContactCard keyy="Email" value={basicData['email']} ></ContactCard>
                            <ContactCard keyy="Phone" value={basicData['phone']} ></ContactCard>
                            <ContactCard keyy="Github" value="http/github/macluster/portfolio" ></ContactCard>
    
    
                        </div>
                        <div className="h-full w-[70%] flex  flex-col items-start p-2 lg:p-10">
                            <h2 style={{ color: "black", fontWeight: 'bold'}} className="text-lg lg:text-4xl">{basicData['name']}</h2>
                            <div style={{ height: 20 }}></div>
                            <h5  className="font-bold text-[9px] lg:text-lg  text-start" >Education</h5>
                            <div style={{ height: 5 }}></div>
                            {educationData.map((item) => (<EducationCard data={item}></EducationCard>))}
                            <div style={{ height: 10 }}></div>
    
                            <h5 className="font-bold text-[9px] lg:text-lg  text-start">Work Experience</h5>
                            <div style={{ height: 5 }}></div>
                            {workData.map((item) => (<WorkExperience title={item['jobTitle']} company={item['companyName']} date={item['startDate']}  ></WorkExperience>))}
                            <div style={{ height: 10 }}></div>
                            <h5  className="font-bold text-[9px] lg:text-lg  text-start">Skills</h5>
                            <div style={{ height: 5 }}></div>
                            {skillData.map((item) => (<SkillsCard skillName={item['skillName']} skillLevel={item['skillLevel']}></SkillsCard>))}
    
                            <div style={{ height: 10 }}></div>
                            <h5 className="font-bold text-[9px] lg:text-lg  text-start">My Projects</h5>
                            <div style={{ height: 5 }}></div>
                            {projectData.map((item) => (<Project data={item}></Project>))}
    
    
    
    
    
    
    
                        </div>
    
                    </div>
                </div>
            </div>
        )
    }



    function MobileView()
    {
        return(
            <div className="w-full h-full flex flex-col"> 
            <button onClick={(e)=>{print()}}>print</button>
                <div className="h-[900px]  overflow-scroll">
    
    
                    <div id="cv" className="shadow-xl w-[100%] h-[500px] flex flex-row  ">
                        <div className="h-full w-[30%] bg-black flex flex-col items-center p-5" >
                            <div className="h-[30px]"></div>
                            <ProfileImage handleChange={handleChange} file={file}></ProfileImage>
                            <div className="h-[100px]"></div>
                            <ContactCard keyy="Email" value={basicData['email']} ></ContactCard>
                            <ContactCard keyy="Phone" value={basicData['phone']} ></ContactCard>
                            <ContactCard keyy="Github" value="http/github/macluster/portfolio" ></ContactCard>
    
    
                        </div>
                        <div className="h-full w-[70%] flex  flex-col items-start p-10">
                            <h2 style={{ color: "black", fontWeight: 'bold', fontSize: 45 }}>{basicData['name']}</h2>
                            <div style={{ height: 40 }}></div>
                            <h5 className="title" >Education</h5>
                            <div style={{ height: 20 }}></div>
                            {educationData.map((item) => (<EducationCard data={item}></EducationCard>))}
                            <div style={{ height: 20 }}></div>
    
                            <h5 className="title" style={{ color: "black", fontWeight: 'bold' }}>Work Experience</h5>
                            <div style={{ height: 20 }}></div>
                            {workData.map((item) => (<WorkExperience title={item['jobTitle']} company={item['companyName']} date={item['startDate']}  ></WorkExperience>))}
                            <div style={{ height: 20 }}></div>
                            <h5 className="title" style={{ color: "black", fontWeight: 'bold' }}>Skills</h5>
                            <div style={{ height: 20 }}></div>
                            {skillData.map((item) => (<SkillsCard skillName={item['skillName']} skillLevel={item['skillLevel']}></SkillsCard>))}
    
                            <div style={{ height: 30 }}></div>
                            <h5 className="title" style={{ color: "black", fontWeight: 'bold' }}>My Projects</h5>
                            <div style={{ height: 20 }}></div>
                            {projectData.map((item) => (<Project data={item}></Project>))}
    
    
    
    
    
    
    
                        </div>
    
                    </div>
                </div>
            </div>
        )
    }

}

function ProfileImage(props) {
    return (
        <div className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]">
            <input type="file" onChange={props.handleChange} style={{ height: 100, width: 100, backgroundColor: "red", position: "absolute", opacity: 0 }}></input>
            <img src={props.file}  className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"   style={{ borderRadius: '50%' }} />
        </div>

    )
}
function WorkExperience(props) {

    return (
        <div style={{ display: "flex", flexDirection: "row", width: 'auto', height: 'auto', color: "gray" }}>
            <h6 className=" font-bold text-[7px] lg:text-lg  text-start">2/12/2023</h6>
            <div style={{ width: 50 }}></div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: 'start' }}>
                <h6 className=" font-bold text-[7px] lg:text-lg  text-start">{props.company}</h6>
                <h6 className="  text-[7px] lg:text-lg  text-start">{props.title}</h6>

            </div>

        </div>
    )
}

function Project(props) {

    return (
        <div style={{ display: "flex", flexDirection: "row", width: 'auto', height: 'auto', color: "gray", }}>
            <h6 className="  text-[7px] lg:text-lg  text-start">2/12/2023</h6>
            <div style={{ width: 50 }}></div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: 'start' }}>
                <h6 className=" font-bold text-[7px] lg:text-lg  text-start">{props.data['projectName']}</h6>
                <h6 className="text-[7px] lg:text-lg  text-start">{props.data['projectTechnology']}</h6>
                <h6 className=" text-[7px] lg:text-lg  text-start">{props.data['projectDescription']}</h6>

            </div>

        </div>
    )
}

function SkillsCard(props) {


    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: 'start', alignItems: "start", color: "gray", marginBottom: 10,width:'70%' }}>
            <h6 className=" text-[7px] lg:text-lg  text-start">{props.skillName}</h6>
            <div style={{ width: 30 }}></div>
            <div className="w-[200px] h-[20px] ">
                <div style={{ height: 10, width: props.skillLevel + "0%", backgroundColor: 'yellow' }}></div>
            </div>
            <h6 className=" font-bold text-[7px] lg:text-lg  text-start">{props.skillLevel}</h6>

        </div>
    )
}


function ContactCard(props) {
    return (
        <div style={{ display: "flex", width: '100%', flexDirection: 'column', alignItems: "start", justifyContent: 'space-between', paddingLeft: 10, paddingBottom: 10 }}>
            <h6 className="text-white font-bold text-[6px] lg:text-sm  text-start">{props.keyy}</h6>
            <div style={{ width: 5 }}></div>
            <h6 className=" text-white font-bold text-[5px] lg:text-sm  text-start">{props.value}</h6>

        </div>

    )
}

function EducationCard(props) {

    return (
        <div style={{ display: "flex", flexDirection: "row", width: 'auto', height: 'auto', color: "gray", marginBottom: 10 }}>
            <h5   className=" text-[7px] lg:text-lg  text-start">{props.data['endDate']}</h5>
            <div style={{ width: 50 }}></div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: 'start' }}>
                <h5  className=" font-bold text-[7px] lg:text-lg  text-start" >{props.data['courseName']}</h5>
                <h5  className=" text-[7px] lg:text-lg  text-start">{props.data['instituitionName']}</h5>
            </div>

        </div>
    )
}

function print() {
    //var container = document.getElementById("image-wrap"); //specific element on page
    var container = document.getElementById("cv");; // full page

    html2canvas(container,{ allowTaint: true,scale:4 }).then(function (canvas) {
        //document.body.appendChild(canvas);
        var link = document.createElement('a')
        //var link = document.getElementById("aa");




        link.download = "html_image.jpg";
        link.href = canvas.toDataURL();

        link.target = '_blank';

        link.click();

    });
}
export default OutputPage;