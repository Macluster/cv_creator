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
} from "@material-tailwind/react";
import {

    useRecoilState,

} from 'recoil';
import { useState } from "react";
import { projectAtom} from '../State/Atoms'

function ProjectPage()
{
    const [open, setOpen] = React.useState(false);

    
    const [data, setData] = useState([
      

    ])
    return(
        <div className="w-full h-full flex flex-col items-start">
            <div className="flex flex-row">
            <h1 className="font-bold text-2xl">Project Details</h1>
            <div className="w-[50px]"></div>
            <h1 className="text-3xl" onMouseDown={()=>{setOpen(!open)}}>+</h1>
            </div>
          
            {data.map((e=>  <ProjectCard data={e}></ProjectCard>))}
          
           
            <DialogWithForm open={open} setData={setData} data={data} setOpen={setOpen}></DialogWithForm>
          
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


 
export function DialogWithForm({open,setData,data,setOpen}) {
 
    const [projectName, setprojectName] = useState("");
    const [projectTechnology, setprojectTechnology] = useState("");
    const [projectDescription, setprojectDescription] = useState("");
    const [startdate, setstartDate] = useState("");
    const [enddate, setendDate] = useState("");

    const [peojectData,setprojectdata]=useRecoilState(projectAtom)


    function set() {

        
        data.push({projectName:projectName,projectTechnology:projectTechnology,projectDescription:projectDescription,startDate:startdate,endDate:enddate});
        setData(data)
        setprojectdata(data)
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
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Add Project
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Project Name" size="lg" onChange={(e)=>{setprojectName(e.target.value)}}/>
            <Input label="Project Technology"  size="lg" onChange={(e) => { setprojectTechnology(e.target.value) }} />
            <Input label="Project Description" size="lg"  onChange={(e) => { setprojectDescription(e.target.value) }}  />
            <Input label="Start Date" size="lg"  onChange={(e) => { setstartDate(e.target.value) }}/>
            <Input label="End Date" size="lg"  onChange={(e) => { setendDate(e.target.value) }}/>

          
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