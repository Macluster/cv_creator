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
import { skillAtom} from '../State/Atoms'

function SkillPage(props)
{
    const [open, setOpen] = React.useState(false);
    const [skillData,setskilldata]=useRecoilState(skillAtom)

    
    const [data, setData] = useState([
      

    ])
    return(
        <div className="w-full h-full flex flex-col items-start p-5 lg:p-0">
            <div className="flex flex-row">
            <h1 className="font-bold text-2xl">Skill Details</h1>
            <div className="w-[50px]"></div>
            <h1 className="text-3xl" onMouseDown={()=>{setOpen(!open)}}>+</h1>
            </div>
          
            {skillData.map((e=>  <SkillsCard skillLevel={e['skillLevel']} skillName={e['skillName']}/>))}
          
            {skillData.length>0?<Button onClick={()=>{props.nav(4)}}>Submit</Button>:<div/>} 

            <DialogWithForm open={open} skillData={skillData} setskilldata={setskilldata} setOpen={setOpen}></DialogWithForm>
          
        </div>
    )
}


function SkillsCard(props)
{


    return(
        <div style={{display:"flex",justifyContent:'start',flexDirection:"row",alignItems:"center",width:'auto',height:'auto',color:"gray",marginBottom:10}}>
            <h6  className="content">{props.skillName}</h6>
            <div style={{width:30}}></div>
            <div style={{width:200,height:20}}>
                <div style={{height:20,width:props.skillLevel+"0%",backgroundColor:'yellow'}}></div>
            </div>
            <h6  className="content">{props.skillLevel}</h6>
            
        </div>
    )
}



 
export function DialogWithForm({open,skillData,setskilldata,setOpen}) {
 
  const [skillName, setskillName] = useState("");
  const [skillLevel, setskillLevel] = useState("");



    function set() {

        
      const temp = []
      skillData.map((e) => { temp.push(e) })
      temp.push({ skillName:skillName,skillLevel:skillLevel })
      setskilldata(temp)
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
            <Input label="Skill Name" size="lg" onChange={(e)=>{setskillName(e.target.value)}}/>
            <Input label="Skill Level"  size="lg" onChange={(e) => { setskillLevel(e.target.value) }} />
           
          
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

export default SkillPage;