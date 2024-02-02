





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
import { otherAtom } from '../State/Atoms'

function OtherPage(props) {
  const [open, setOpen] = React.useState(false);
  const [openSectionDialouge, setSectionDialouge] = React.useState(false);
  const [otherData, setOtherData] = useRecoilState(otherAtom)

  const [itemsList, setItemList] = useState(props.items)

  const [sectionName, setSectionName] = useState(props.sectionName)
  const data = []




  function onsubmitbuttonClicked() {
    const temp = []
    otherData.map((e) => { temp.push(e) });
    temp.push({ sectionName: sectionName, items: itemsList })
    setOtherData(temp); props.nav(2)

    setItemList([])
    setSectionName([])
  }

  return (
    <div className="w-full h-full flex flex-col bg-white items-start  p-2 lg:p-10 " >
      <div className="flex flex-row">
        <h1 className="font-bold text-2xl  text-[#6962AD]" onClick={() => { setSectionDialouge(true) }}>{sectionName}</h1>

      </div>
      <div className="h-[90%] w-full  flex flex-col  overflow-auto" style={itemsList.length > 0 ? { justifyContent: "start" } : { justifyContent: "center" }}>
        {itemsList.map((e => <OtherCard data={e}></OtherCard>))}
        {itemsList.length > 0 ? <div /> : <h3 className="self-center text-[#747264]">No Items Added</h3>}


      </div>



      <DialogForSectionName open={openSectionDialouge} setSectionName={setSectionName} setOpen={setSectionDialouge}></DialogForSectionName>

      <DialogWithForm open={open} setItemList={setItemList} itemsList={itemsList} setOpen={setOpen}></DialogWithForm>
      <div className="w-full flex justify-between self-end">
        {itemsList.length > 0 ? <Button className="w-['200px']" onClick={() => {
          onsubmitbuttonClicked()
        }}>Submit</Button> : <div />}
        <div onClick={() => { setOpen(true) }} className=" h-[50px] w-[50px] rounded-3xl bg-[#6962AD] flex items-center justify-center " >
          <h1 className="text-white font-bold">+</h1>
        </div>

      </div>



    </div>
  )
}



function OtherCard({ data }) {
  return <div className="shadow-lg  w-[100%]  lg:w-[80%]    h-auto mt-5  rounded-lg   flex flex-col items-start p-3  lg:p-10 border border-[#6962AD] border-5">
    <h1 className="font-bold text-start">{data['certificateName']}</h1>
    <h1 className="text-start">{data['description']}</h1>




  </div>
}



export function DialogWithForm({ open, setItemList, itemsList, setOpen }) {

  const [certificateName, setcertificateName] = useState("");
  const [description, setDescription] = useState("");



  function set() {

    const temp = []
    itemsList.map((e) => { temp.push(e) })
    temp.push({ certificateName: certificateName, description: description })
    setItemList(temp)
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
            <h1 className="font-bold text-lg">Add Other</h1>
            <input placeholder="SectionName" className="border-4" label="Enter Section Name" size="lg" onChange={(e) => { setcertificateName(e.target.value) }} />
            <textarea label="Description" className="border-4" placeholder=" Description" size="lg" onChange={(e) => { setDescription(e.target.value) }} />




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



export function DialogForSectionName({ open, setSectionName, setOpen }) {

  const [sectionName, changeSectionName] = useState("");




  function set() {

    setSectionName(sectionName)
    setOpen(false)

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
            <h1 className="font-bold text-lg">Add Other</h1>
            <input placeholder="SectionName" className="border-4" label="Enter Section Name" size="lg" onChange={(e) => { changeSectionName(e.target.value) }} />





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


export default OtherPage;