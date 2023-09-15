import ItemCard from "../Components/ItemCard"
import { Input,Button } from "@material-tailwind/react";

import {basicDetailsAtom} from  '../State/Atoms'
import { useState } from "react";
import {
  
    useRecoilState,
    
  } from 'recoil';

function BasicDetails(props)
{
    const [BasicDetails, setBasicDetails] = useRecoilState(basicDetailsAtom);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [adress,setAdress]=useState("");

    return(<div style={{display:"flex",flexDirection:"column",alignItems:"start"}} className="p-5 lg:p-0">
        <h1 className="font-bold text-2xl">Basic Details</h1>
        <div className="h-[50px]"></div>
        
 

        <div className="w-72">
        <Input label="Username" onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className="h-[20px]"></div>
        <div className="w-72">
        <Input label="Email"  onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div className="h-[20px]"></div>

        <div className="w-72">
        <Input label="Phone"  onChange={(e)=>{setPhone(e.target.value)}} />
        </div>
        <div className="h-[20px]"></div>

        <div className="w-72">
        <Input label="Adress"  onChange={(e)=>{setAdress(e.target.value)}} />
        </div>
        <div className="h-[50px]"></div>
        <Button onClick={()=>{
     
            setBasicDetails({name:name,email:email,phone:phone,adress:adress})
            props.nav(1)
            }}>Submit</Button>





    </div>)
}

export default BasicDetails