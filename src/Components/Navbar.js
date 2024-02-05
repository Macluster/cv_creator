import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

import {
  Button,
  Dialog,

  CardHeader,
  CardBody,
  CardFooter,

  Input,
  Checkbox,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { set, ref, onValue, push, get, child, getDatabase } from "firebase/database";
import { firedata, auth } from '../backend/Database'
import { otherAtom } from '../State/Atoms.js'

import {

  useRecoilState,
  useRecoilValue,

} from 'recoil';
import { useState } from "react";


export function DefaultSidebar(props) {


  const [open, setOpen] = useState(false);


  const saveData = async (name, review) => {
    var uid = localStorage.getItem("uid");
    var isLoggedIn = uid != null ? true : false;
    if (isLoggedIn) {
      await set(ref(firedata, "Reviews/"+uid), review);
      console.log(uid);
      console.log()
    }
    else {
      set(ref(firedata, "Review/" + name), { review });
      console.log(name);
    } setOpen(false);
  };
  const otherData = useRecoilValue(otherAtom)
  return (
    <Card className="h-full text-white rounded-sm bg-[#6962AD] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="white">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem onMouseUp={() => props.changeItem(2)}>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" style={{ color: "white" }} />
          </ListItemPrefix>
          <h1 className="text-white">Basic Details</h1>

        </ListItem>
        <ListItem onMouseDown={() => { props.changeItem(3); console.log("1") }}>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" style={{ color: "white" }} />
          </ListItemPrefix>
          <h1 className="text-white"> Education</h1>

        </ListItem>
        <ListItem onMouseDown={() => props.changeItem(4)}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" style={{ color: "white" }} />
          </ListItemPrefix>
          <h1 className="text-white">Project</h1>

        </ListItem >
        <ListItem onMouseDown={() => props.changeItem(5)}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" style={{ color: "white" }} />
          </ListItemPrefix>
          <h1 className="text-white">Skill</h1>
        </ListItem>
        <ListItem onMouseDown={() => props.changeItem(6)}>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" style={{ color: "white" }} />
          </ListItemPrefix>
          <h1 className="text-white">Work</h1>
        </ListItem>




        {otherData.map((e, i) => (<ListItem onMouseDown={() => props.changeItem(7 + i)}>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" style={{ color: "white" }} />
          </ListItemPrefix>
          <h1 className="text-white">  {e['sectionName']}</h1>

        </ListItem>))}





      </List>
      <div className="flex justify-around mt-5">
        <button onMouseDown={() => props.changeItem(0)} className="h-[30px] w-[40%]  bg-black text-white rounded ">Add a section</button>
        <button onMouseDown={() => props.changeItem(1)} className="h-[30px] w-[40%] bg-black text-white rounded ">Output</button>

      </div>

      <div className="flex flex-row items-center mt-3 p-3">

        <button className=" bg-black h-[30px] w-[40%] rounded  text-white self-end" onClick={(e) => { setOpen(true) }}>Add Review</button>
      </div>

      <DialogWithForm open={open} save={saveData} setOpen={setOpen}></DialogWithForm>

    </Card>
  );
}



export function DialogWithForm({ open, save, setOpen }) {

  const [review, setReview] = useState("");
  const [name, setName] = useState("");





  function set() {






  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)", /* semi-transparent overlay */
      display: open ? "flex" : "none",
      justifyContent: "center",
      alignItems: "center",


    }} className=" w-[100%] h-[100%] absolute bg-black">

      <div className="w-[80%] h-auto ">
        <Card className="mx-auto w-full max-w-[24rem]  shadow-xl">

          <CardBody className="flex flex-col gap-4">
            <h1 className="font-bold text-lg">Add Education</h1>
            <Input label="Name" size="lg" onChange={(e) => { setName(e.target.value) }} />
            <Input label="Review" size="lg" onChange={(e) => { setReview(e.target.value) }} />


          </CardBody>
          <CardFooter className="pt-0">
            <div className="flex justify-around">
              <Button variant="gradient" onClick={async () => {
                save(name, review)


              }} >
                Submit
              </Button>
              <div className="h-[10px]"></div>
              <Button variant="gradient" onClick={() => { setOpen(false) }} >
                Cancel
              </Button>
            </div>


          </CardFooter>
        </Card>
      </div>
    </div>
  );
}