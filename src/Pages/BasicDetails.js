import ItemCard from "../Components/ItemCard"
import { Input,Button } from "@material-tailwind/react";



function BasicDetails()
{
    return(<div style={{display:"flex",flexDirection:"column",alignItems:"start"}}>
        <h1 className="font-bold text-2xl">Basic Details</h1>
        <div className="h-[50px]"></div>
        
 

        <div className="w-72">
        <Input label="Username" />
        </div>
        <div className="h-[20px]"></div>
        <div className="w-72">
        <Input label="Email" />
        </div>
        <div className="h-[20px]"></div>

        <div className="w-72">
        <Input label="Phone" />
        </div>
        <div className="h-[20px]"></div>

        <div className="w-72">
        <Input label="Adress" />
        </div>
        <div className="h-[50px]"></div>
        <Button>Submit</Button>





    </div>)
}

export default BasicDetails