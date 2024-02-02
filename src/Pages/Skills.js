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
import { skillAtom } from '../State/Atoms'

function SkillPage(props) {
  const [open, setOpen] = React.useState(false);
  const [skillData, setskilldata] = useRecoilState(skillAtom)


  const [data, setData] = useState([


  ])
  return (
    <div className="w-full h-full flex flex-col items-start  bg-white p-2 lg:p-10">
       <div className="flex flex-row">
        <h1 className="font-bold text-2xl  text-[#6962AD]">Skill Details</h1>

      </div>
     
      <div className="h-[90%] w-full  flex flex-col justify-start overflow-auto" style={skillData.length > 0?{justifyContent:"start"}:{justifyContent:"center"}}>
      {skillData.map((e => <SkillsCard skillLevel={e['skillLevel']} skillName={e['skillName']} />))}
      {skillData.length > 0 ? <div/>: <h3 className="self-center text-[#747264]">No Items Added</h3>}
      </div>
   

      <DialogWithForm open={open} skillData={skillData} setskilldata={setskilldata} setOpen={setOpen}></DialogWithForm>
      <div className="w-full flex justify-between self-end">
        {skillData.length > 0 ? <Button onClick={() => { props.nav(6) }}>Submit</Button> : <div />}
        <div onClick={() => { setOpen(true) }} className=" h-[50px] w-[50px] rounded-3xl bg-[#6962AD] flex items-center justify-center " >
          <h1 className="text-white font-bold">+</h1>
        </div>
      </div>
    </div>
  )
}


function SkillsCard(props) {


  return (
    <div className="flex items-center justify-start mt-2 bg-[#EFECEC] p-5 rounded-xl" >
      <h6 className=" text-[15px] lg:text-lg w-[50px] lg:w-[100px] text-start">{props.skillName}</h6>
      <div style={{ width: 30 }}></div>
      <div style={{ width: 200, height: 20, display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
        <div style={{ height: 20, width: props.skillLevel + "0%", backgroundColor: 'yellow' }}></div>
        <h6 className="content ml-5">{props.skillLevel}</h6>
      </div>
     

    </div>
  )
}




export function DialogWithForm({ open, skillData, setskilldata, setOpen }) {

  const [skillName, setskillName] = useState("");
  const [skillLevel, setskillLevel] = useState("");



  function set() {


    const temp = []
    skillData.map((e) => { temp.push(e) })
    temp.push({ skillName: skillName, skillLevel: skillLevel })
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

          <CardBody className="flex flex-col gap-4">
            <h1 className="font-bold text-lg">Add Skill</h1>

            <Input label="Skill Name" size="lg" onChange={(e) => { setskillName(e.target.value) }} />
            <Input label="Skill Level Out of 10" size="lg" onChange={(e) => { setskillLevel(e.target.value) }} />


          </CardBody>
          <CardFooter className="pt-0">
          <div className="flex justify-around">
              <Button variant="gradient" onClick={() => { set() }} >
                Submit
              </Button>
              <div className="h-[10px]"></div>
              <Button variant="gradient" onClick={() => { setOpen(false) }} >
                Cancel
              </Button>
            </div>

          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default SkillPage;