import ItemCard from "../Components/ItemCard"
import { Input, Button } from "@material-tailwind/react";

import { basicDetailsAtom } from '../State/Atoms'
import { useState, useRef } from "react";
import {

    useRecoilState,

} from 'recoil';

function BasicDetails(props) {
    const [BasicDetails, setBasicDetails] = useRecoilState(basicDetailsAtom);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");
    const [file, setFile] = useState();
    const fileRef = useRef(null);

    const triggerClick = () => {
        fileRef.current.click();
    };

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div className="p-5 lg:p-0 w-full h-full bg-white flex flex-col lg:flex-row items-center justify-around">


            <div className="flex flex-col p-2 h-full justify-center ">
                <h1 className="font-bold text-2xl text-[#6962AD] mt-5">Basic Details</h1>
                <div style={{ height: 50 }}></div>

                <div className="flex items-center justify-center bg-[#EEEDEB]" style={{ height: 200, width: 200, borderRadius: 100 }}>
                    <img src={file == null ? "https://cdn-icons-png.flaticon.com/128/7167/7167620.png" : file} alt="https://cdn-icons-png.flaticon.com/128/7167/7167620.png" height={100} width={100} />
                </div>
                <div style={{ height: 20 }}></div>
                <button onClick={triggerClick} className="bg-[#6962AD] text-white rounded-lg p-2">

                    <h2 className="">Browse Photo</h2>
                </button>
                <input ref={fileRef} onChange={handleChange} type="file" style={{ display: 'none' }} className="bg-[#6962AD] text-white rounded-lg p-2">

                </input>
            </div>



            <div className="flex flex-col items-center">


                <div className="h-[50px]"></div>



                <div className="w-72">
                    <Input label="Username" onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="h-[20px]"></div>
                <div className="w-72">
                    <Input label="Email" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="h-[20px]"></div>

                <div className="w-72">
                    <Input label="Phone" onChange={(e) => { setPhone(e.target.value) }} />
                </div>
                <div className="h-[20px]"></div>

                <div className="w-72">
                    <Input label="Adress" onChange={(e) => { setAdress(e.target.value) }} />
                </div>
                <div className="h-[50px]"></div>
                <Button onClick={() => {

                    setBasicDetails({ name: name, email: email, phone: phone, adress: adress, image: file })
                    props.nav(3)
                }}>Submit</Button>

            </div>





        </div>)
}

export default BasicDetails