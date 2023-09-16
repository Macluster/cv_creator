import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Textarea
} from "@material-tailwind/react";
import {

    useRecoilState,

} from 'recoil';
import { useState } from "react";
import { projectAtom} from '../State/Atoms'

function ProjectPage(props)
{
    const [open, setOpen] = React.useState(false);
    const [peojectData,setprojectdata]=useRecoilState(projectAtom)

    
    const [data, setData] = useState([
      

    ])
    return(
        <div className="w-full h-full flex flex-col items-start p-5 lg:p-0">
            <div className="flex flex-row">
            <h1 className="font-bold text-2xl">Project Details</h1>
            <div className="w-[50px]"></div>
            <h1 className="text-3xl" onMouseDown={()=>{setOpen(!open)}}>+</h1>
            </div>
          
            {peojectData.map((e=>  <ProjectCard data={e}></ProjectCard>))}
            {peojectData.length>0?<Button onClick={()=>{props.nav(3)}}>Submit</Button>:<div/>} 
           
            <DialogWithForm open={open} setprojectdata={setprojectdata} projectData={peojectData}  setOpen={setOpen}></DialogWithForm>
          
        </div>
    )
}



function ProjectCard({data})
{
     return    <div className="shadow-lg w-[80%] h-[150px] mt-5    flex flex-col items-start p-10 border border-blue-300 border-5">
     <h1 className="font-bold">{data['projectName']}</h1>
     <h1>{data['projectTechnology']}</h1>
     <h1>{data['startDate']}-{data['endDate']}</h1>


 </div>
}


 
export function DialogWithForm({open,setprojectdata,projectData,setOpen}) {
 
    const [projectName, setprojectName] = useState("");
    const [projectTechnology, setprojectTechnology] = useState("");
    const [projectDescription, setprojectDescription] = useState("");
    const [startdate, setstartDate] = useState("");
    const [enddate, setendDate] = useState("");

  


    function set() {

      const temp = []
      projectData.map((e) => { temp.push(e) })
      temp.push({projectName:projectName,projectTechnology:projectTechnology,projectDescription:projectDescription,startDate:startdate,endDate:enddate})
      setprojectdata(temp)
      setOpen(!open)
        
     

 
      
    }

  return (
    <>

      <Dialog
        size="xs"
        open={open}
     
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
         
          <CardBody className="flex flex-col gap-4">
          <h1 className="font-bold text-lg">Add Education</h1>

            <Input label="Project Name" size="lg" onChange={(e)=>{setprojectName(e.target.value)}}/>
            <Input label="Technology"  size="lg" onChange={(e) => { setprojectTechnology(e.target.value) }} />
            <Textarea label="Project Description" size="lg"  onChange={(e) => { setprojectDescription(e.target.value) }}  />
            <Input type="date" label="Start Date" size="lg"  onChange={(e) => { setstartDate(e.target.value) }}/>
            <Input type="date" label="End Date" size="lg"  onChange={(e) => { setendDate(e.target.value) }}/>

          
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={()=>{set()}} fullWidth>
              Submit
            </Button>
            <div className="h-[10px]"></div>
            <Button variant="gradient" onClick={()=>{setOpen(false)}} fullWidth>
              Cancel
            </Button>
           
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default ProjectPage;