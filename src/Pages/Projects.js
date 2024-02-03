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
import { projectAtom } from '../State/Atoms'
import { set, ref, onValue, push,get,child,getDatabase } from "firebase/database";
import { firedata, auth } from '../backend/Database'


function ProjectPage(props) {
  const [open, setOpen] = React.useState(false);
  const [peojectData, setprojectdata] = useRecoilState(projectAtom)


  const [data, setData] = useState([


  ])

  var uid = localStorage.getItem("uid")
  var isLoggedIn = uid != null ? true : false

  if (isLoggedIn) {
      get(child(ref(getDatabase()), "Users/"+uid+"/ProjectDetails")).then((snapshot) => {
          if (snapshot.exists()) {
             setprojectdata(snapshot.val());
          } else {
              console.log("No data available");
          }
      }).catch((error) => {
          console.error(error);
      });

  }
  return (
    <div className="w-full h-full flex flex-col bg-white items-start p-2 lg:p-10 " >
      <div className="flex flex-row">
        <h1 className="font-bold text-2xl  text-[#6962AD]">Project Details</h1>

      </div>
      <div className="h-[90%]  lg:h-[300px] w-full  flex flex-col justify-start overflow-auto" style={peojectData.length > 0 ? { justifyContent: "start" } : { justifyContent: "center" }}>
        {peojectData.map((e => <ProjectCard data={e}></ProjectCard>))}
        {peojectData.length > 0 ? <div /> : <h3 className="self-center text-[#747264]">No Items Added</h3>}

      </div>



      <DialogWithForm open={open} setprojectdata={setprojectdata} projectData={peojectData} setOpen={setOpen}></DialogWithForm>
      <div className="w-full flex justify-between self-end">
        {peojectData.length > 0 ? <Button onClick={() => { 
          
          var uid = localStorage.getItem("uid")

          var maptoSend = peojectData
          set(ref(firedata, "Users/"+uid+"/ProjectDetails"), maptoSend);
          props.nav(5) }}>Submit</Button> : <div />}
        <div onClick={() => { setOpen(true) }} className=" h-[50px] w-[50px] rounded-3xl bg-[#6962AD] flex items-center justify-center " >
          <h1 className="text-white font-bold">+</h1>
        </div>
      </div>
    </div>
  )
}



function ProjectCard({ data }) {
  return <div className="shadow-lg w-[100%]  lg:w-[80%]  h-auto mt-5  rounded-lg    flex flex-col items-start p-3  lg:p-10 border border-blue-300 border-5">
    <h1 className="font-bold text-start">{data['projectName']}</h1>
    <h1>{data['projectTechnology']}</h1>
    <h1>{data['startDate']}-{data['endDate']}</h1>


  </div>
}



export function DialogWithForm({ open, setprojectdata, projectData, setOpen }) {

  const [projectName, setprojectName] = useState("");
  const [projectTechnology, setprojectTechnology] = useState("");
  const [projectDescription, setprojectDescription] = useState("");
  const [startdate, setstartDate] = useState("");
  const [enddate, setendDate] = useState("");




  function set() {

    const temp = []
    projectData.map((e) => { temp.push(e) })
    temp.push({ projectName: projectName, projectTechnology: projectTechnology, projectDescription: projectDescription, startDate: startdate, endDate: enddate })
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

            <Input label="Project Name" size="lg" onChange={(e) => { setprojectName(e.target.value) }} />
            <Input label="Technology" size="lg" onChange={(e) => { setprojectTechnology(e.target.value) }} />
            <Textarea label="Project Description" size="lg" onChange={(e) => { setprojectDescription(e.target.value) }} />
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

export default ProjectPage;