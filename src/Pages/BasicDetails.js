import ItemCard from "../Components/ItemCard"
import { Input, Button } from "@material-tailwind/react";

import { basicDetailsAtom } from '../State/Atoms'
import { useState, useRef, useEffect } from "react";
import { set, ref, onValue, push, get, child, getDatabase } from "firebase/database";
import { firedata, auth } from '../backend/Database'
import {

    useRecoilState,

} from 'recoil';

function BasicDetails(props) {
    const [BasicDetails, setBasicDetails] = useRecoilState(basicDetailsAtom);
    const [name, setName] = useState("Name");
    const [email, setEmail] = useState("Email");
    const [phone, setPhone] = useState("Phone No");
    const [adress, setAdress] = useState("Address");
    const [file, setFile] = useState();
    const fileRef = useRef(null);

    const saveData = () => {
        console.log("name is" + name)
        var uid = localStorage.getItem("uid")
        set(ref(firedata, "Reviews/" + uid), "safasf");
        var maptoSend = { uid: uid, name: name, email: email, phone: phone, adress: adress, image: file }
        set(ref(firedata, "Users/" + uid + "/BasicDetails"), maptoSend);
        props.nav(3)
        setBasicDetails({ uid: uid, name: name, email: email, phone: phone, adress: adress, image: file })
    }

    const triggerClick = () => {
        fileRef.current.click();
    };

    var uid = localStorage.getItem("uid")
    var isLoggedIn = uid != null ? true : false


    useEffect(() => {
        // Your logic here

        // This will run only on the initial render
        if (isLoggedIn) {
            get(child(ref(getDatabase()), "Users/" + uid + "/BasicDetails")).then((snapshot) => {
                if (snapshot.exists()) {

                    setName(snapshot.val()['name'])
                    setEmail(snapshot.val()['email'])
                    setPhone(snapshot.val()['phone'])
                    setAdress(snapshot.val()['adress'])


                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });

        }

    }, []);


    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div className="p-2 lg:p-0 w-full h-full bg-white flex flex-col lg:flex-row items-center justify-around">


            <div className="flex flex-col p-2 h-full justify-center ">
                <h1 className="font-bold text-2xl text-[#6962AD]  ">Basic Details</h1>
                <div style={{ height: 20 }}></div>

                <div className="flex items-center justify-center bg-[#EEEDEB]" style={{ height: 150, width: 150, borderRadius: 75 }}>
                    <img src={file == null ? "https://cdn-icons-png.flaticon.com/128/7167/7167620.png" : file} alt="https://cdn-icons-png.flaticon.com/128/7167/7167620.png" height={60} width={60} />
                </div>
                <div style={{ height: 20 }}></div>
                <button onClick={triggerClick} className="bg-[#6962AD] text-white rounded-lg p-2">

                    <h2 className="">Browse Photo</h2>
                </button>
                <input ref={fileRef} onChange={handleChange} type="file" style={{ display: 'none' }} className="bg-[#6962AD] text-white rounded-lg p-2">

                </input>
            </div>



            <div className="flex flex-col items-center">


                <div className="h-[20px]"></div>



                <div className="w-72">
                    <input className="bg-[#EEEDEB] w-[300px] p-2 rounded-lg" placeholder={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="h-[20px]"></div>
                <div className="w-72">
                    <input className="bg-[#EEEDEB] w-[300px] p-2 rounded-lg" placeholder={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="h-[20px]"></div>

                <div className="w-72">
                    <input className="bg-[#EEEDEB] w-[300px] p-2 rounded-lg" placeholder={phone} onChange={(e) => { setPhone(e.target.value) }} />
                </div>
                <div className="h-[20px]"></div>

                <div className="w-72">
                    <input className="bg-[#EEEDEB] w-[300px] p-2 rounded-lg" placeholder={adress} onChange={(e) => { setAdress(e.target.value) }} />
                </div>
                <div className="h-[50px]"></div>
                <Button onClick={() => {

                    saveData()


                }}>Submit</Button>

            </div>





        </div>)
}

export default BasicDetails