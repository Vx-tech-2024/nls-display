import { FaBullseye, FaEye, FaGem } from "react-icons/fa";
import SlideLayout from './SlideLayout';
import logo1 from '../assets/vision.jpg'

function MissionSlide() {
    return (

           <div className="w-full h-full flex  justify-center items-center">
            <img src= {logo1} alt="Mission NLS picture" className=" w-4/5 h-auto object-contain" />
           </div>

    );
}

export default MissionSlide;
