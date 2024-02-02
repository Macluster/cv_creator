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
import { workExperienceAtom } from '../State/Atoms'

function WorkexperiencePage(props) {
  const [open, setOpen] = React.useState(false);

  const [workData, setWorkdata] = useRecoilState(workExperienceAtom)

  return (
    <div className="w-full h-full flex flex-col bg-white items-start p-2 lg:p-10 " >
      <div className="flex flex-row">
        <h1 className="font-bold text-2xl  text-[#6962AD]">Work Details</h1>

      </div>
      <div className="h-[90%] w-full  flex flex-col justify-start overflow-auto" style={workData.length > 0 ? { justifyContent: "start" } : { justifyContent: "center" }}>
        {workData.map((e => <WorkexperienceCard data={e}></WorkexperienceCard>))}
        {workData.length > 0 ? <div /> : <h3 className="self-center text-[#747264]">No Items Added</h3>}
      </div>





      <DialogWithForm open={open} setWorkdata={setWorkdata} workData={workData} setOpen={setOpen}></DialogWithForm>
      <div className="w-full flex justify-between self-end">
        {workData.length > 0 ? <Button onClick={() => { props.nav(1) }}>Submit</Button> : <div />}
        <div onClick={() => { setOpen(true) }} className=" h-[50px] w-[50px] rounded-3xl bg-[#6962AD] flex items-center justify-center " >
          <h1 className="text-white font-bold">+</h1>
        </div>
      </div>
    </div>
  )
}



function WorkexperienceCard({ data }) {
  return <div className="shadow-lg w-[100%]  lg:w-[80%]  h-auto mt-5 rounded-lg     flex flex-col items-start p-3  lg:p-10 border border-blue-300 border-5">
    <h1 className="font-bold">{data['jobTitle']}</h1>
    <h1>{data['companyName']}</h1>
    <h1>{data['startDate']}-{data['endDate']}</h1>


  </div>
}



export function DialogWithForm({ open, setWorkdata, workData, setOpen }) {

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

          <CardBody className="flex flex-col gap-4">
            <h1 className="font-bold text-lg">Add Work</h1>

            <Input label="Job title" size="lg" onChange={(e) => { setJob(e.target.value) }} />
            <Input label="Company Name" size="lg" onChange={(e) => { setCompany(e.target.value) }} />
            <Input label="Phone Number" size="lg" onChange={(e) => { setnumber(e.target.value) }} />
            <Input type="date" label="Start Date" size="lg" onChange={(e) => { setstartDate(e.target.value) }} />
            <Input type="date" label="End Date" size="lg" onChange={(e) => { setendDate(e.target.value) }} />


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

export default WorkexperiencePage;