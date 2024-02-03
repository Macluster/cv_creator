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
import { set, ref, onValue, push, get, child, getDatabase } from "firebase/database";
import { firedata, auth } from '../backend/Database'
import { useState } from "react";
import { EducationAtom } from '../State/Atoms'

function EducationPage(props) {
  const [open, setOpen] = React.useState(false);
  const [EducationData, setEducationdata] = useRecoilState(EducationAtom)
  const data = []

  var uid = localStorage.getItem("uid")
  var isLoggedIn = uid != null ? true : false

  if (isLoggedIn) {
    get(child(ref(getDatabase()), "Users/" + uid + "/EducationDetails")).then((snapshot) => {
      if (snapshot.exists()) {
        setEducationdata(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

  }

  return (
    <div className="w-full h-full flex flex-col bg-white items-start p-2 lg:p-10  " >
      <div className="flex flex-row">
        <h1 className="font-bold text-2xl  text-[#6962AD]">Education Details</h1>

      </div>
      <div className=" h-[90%]  lg:h-[300px]  w-full  flex flex-col  overflow-auto" style={EducationData.length > 0 ? { justifyContent: "start" } : { justifyContent: "center" }}>
        {EducationData.map((e => <EducationCard data={e}></EducationCard>))}
        {EducationData.length > 0 ? <div /> : <h3 className="self-center text-[#747264]">No Items Added</h3>}


      </div>



      <DialogWithForm open={open} setEducationData={setEducationdata} educationData={EducationData} setOpen={setOpen}></DialogWithForm>


      <div className="w-full flex justify-between self-end">
        {EducationData.length > 0 ? <Button className="w-['200px']" onClick={() => {

          var uid = localStorage.getItem("uid")

          var maptoSend = EducationData
          set(ref(firedata, "Users/" + uid + "/EducationDetails"), maptoSend);
          props.nav(4)


        }}>Submit</Button> : <div />}
        <div onClick={() => { setOpen(true) }} className=" h-[50px] w-[50px] rounded-3xl bg-[#6962AD] flex items-center justify-center " >
          <h1 className="text-white font-bold">+</h1>
        </div>

      </div>



    </div>
  )
}



function EducationCard({ data }) {
  return <div className="shadow-lg  w-[100%]  lg:w-[80%]    h-auto mt-5  rounded-lg   flex flex-col items-start p-3  lg:p-10 border border-[#6962AD] border-5">
    <h1 className="font-bold text-start">{data['courseName']}</h1>
    <h1 className="text-start">{data['instituitionName']}</h1>
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

          <CardBody className="flex flex-col gap-4">
            <h1 className="font-bold text-lg">Add Education</h1>
            <Input label="Course" size="lg" onChange={(e) => { setName(e.target.value) }} />
            <Input label="Institution Name" size="lg" onChange={(e) => { setInstituition(e.target.value) }} />


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

export default EducationPage;