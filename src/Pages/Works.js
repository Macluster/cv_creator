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
import { workExperienceAtom} from '../State/Atoms'

function WorkexperiencePage(props)
{
    const [open, setOpen] = React.useState(false);
    
    const [workData, setWorkdata] = useRecoilState(workExperienceAtom)
    
  return(
        <div className="w-full h-full flex flex-col items-start p-5 lg:p-0">
            <div className="flex flex-row">
            <h1 className="font-bold text-2xl">Work Details</h1>
            <div className="w-[50px]"></div>
            <h1 className="text-3xl" onMouseDown={()=>{setOpen(!open)}}>+</h1>
            </div>
          
            {workData.map((e=>  <WorkexperienceCard data={e}></WorkexperienceCard>))}
          
            {workData.length>0?<Button onClick={()=>{props.nav(5)}}>Submit</Button>:<div/>} 

            <DialogWithForm open={open} setWorkdata={setWorkdata} workData={workData} setOpen={setOpen}></DialogWithForm>
          
        </div>
    )
}



function WorkexperienceCard({data})
{
     return    <div className="shadow-lg w-[80%] h-[150px] mt-5    flex flex-col items-start p-10 border border-blue-300 border-5">
     <h1 className="font-bold">{data['jobTitle']}</h1>
     <h1>{data['companyName']}</h1>
     <h1>{data['startDate']}-{data['endDate']}</h1>


 </div>
}


 
export function DialogWithForm({open,setWorkdata,workData,setOpen}) {
 
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [number, setnumber] = useState("");
  const [startdate, setstartDate] = useState("");
  const [enddate, setendDate] = useState("");




    function set() {

        
      const temp = []
      workData.map((e) => { temp.push(e) })
      temp.push({ jobTitle: job, companyName: company, phone: number, startDate: startdate, endDate: enddate })
     setWorkdata(temp)
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
              Add Work
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Job title" size="lg" onChange={(e)=>{setJob(e.target.value)}}/>
            <Input label="Company Name"  size="lg" onChange={(e) => { setCompany(e.target.value) }} />
            <Input label="Phone Number" size="lg"  onChange={(e) => { setnumber(e.target.value) }}  />
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

export default  WorkexperiencePage;