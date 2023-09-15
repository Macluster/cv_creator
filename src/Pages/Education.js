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
import { EducationAtom } from '../State/Atoms'

function EducationPage(props) {
  const [open, setOpen] = React.useState(false);
  const [EducationData, setEducationdata] = useRecoilState(EducationAtom)
  const data = []

  return (
    <div className="w-full h-full flex flex-col items-start p-5 lg:p-0 " >
      <div className="flex flex-row">
        <h1 className="font-bold text-2xl">Education Details</h1>
        <div className="w-[50px]"></div>
        <h1 className="text-3xl" onMouseDown={() => { setOpen(!open) }}>+</h1>
      </div>

      {EducationData.map((e => <EducationCard data={e}></EducationCard>))}
     {EducationData.length>0?<Button onClick={()=>{props.nav(2)}}>Submit</Button>:<div/>} 

      <DialogWithForm open={open} setEducationData={setEducationdata} educationData={EducationData} setOpen={setOpen}></DialogWithForm>

    </div>
  )
}



function EducationCard({ data }) {
  return <div className="shadow-lg w-[80%] h-[150px] mt-5    flex flex-col items-start p-10 border border-blue-300 border-5">
    <h1 className="font-bold">{data['courseName']}</h1>
    <h1>{data['instituitionName']}</h1>
    <h1>{data['startDate']}-{data['endDate']}</h1>
    


  </div>
}



export function DialogWithForm({ open, setEducationData, educationData, setOpen }) {

  const [courseName, setName] = useState("");
  const [instituitionName, setInstituition] = useState("");

  const [startdate, setstartDate] = useState("");
  const [enddate, setendDate] = useState("");



  function set() {

    const temp = []
    educationData.map((e) => { temp.push(e) })
    temp.push({ courseName: courseName, instituitionName: instituitionName, startDate: startdate, endDate: enddate })
    setEducationData(temp)
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
              Add Education
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Course" size="lg" onChange={(e) => { setName(e.target.value) }} />
            <Input label="Institution Name" size="lg" onChange={(e) => { setInstituition(e.target.value) }} />
            <Input label="Start Date" size="lg" onChange={(e) => { setstartDate(e.target.value) }} />
            <Input label="End Date" size="lg" onChange={(e) => { setendDate(e.target.value) }} />

          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={() => { set() }} fullWidth>
              Submit
            </Button>
            <div className="h-[10px]"></div>
            <Button variant="gradient" onClick={() => { setOpen(false) }} fullWidth>
              Cancel
            </Button>

          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default EducationPage;