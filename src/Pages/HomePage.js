import './Style.css'
import img1 from '../assets/img1.jpg'
import { Link } from 'react-router-dom';
import CreatorPage from './CreatorPage';
function HomePage() {
  return (
    <div className="flex   h-full w-full">
     

      <div className="bg-opacity-10 bg-blur-xl backdrop-blur-lg bg-white-300 rounded-md h-full w-full rounded-lg flex flex-col justify-center items-center">

        <h1 className='text-gray-800 text-[30px] lg:text-[60px] font-bold '> Welcome to Cv maker </h1>
        <div className='h-[10px]'></div>
        <h5 className='text-black w-[90%] lg:w-[50%] '>This is a Cv maker which is in beta stage at present there is only one template. In future after your reviews, more templates will be added</h5>
        <div className='h-[30px]'></div>
        <div className='flex flex-row'>
          <Link to="/CreatorPage">

            <div className='bg-gray-700 h-[40px]  w-[100px]  lg:w-[200px]  rounded-lg text-white flex justify-center items-center' >Create a cv</div>

          </Link>
          <div className='w-[30px]'></div>
          <Link to="/Login">

            <div className='bg-gray-700 h-[40px]  w-[100px]  lg:w-[200px]  rounded-lg text-white flex justify-center items-center' >Login</div>

          </Link>
        </div>

      </div>
    </div>
  );

}
export default HomePage;