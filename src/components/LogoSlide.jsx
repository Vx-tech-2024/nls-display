import SlideLayout from './SlideLayout';
import logos from '../assets/logo.png';

function LogoSlide() {
    return (

            <div className="flex flex-col items-center justify-center gap-4 ">
                <img src= {logos} alt="nls logo" className="w-screen" />
                <p className="text-5xl text-center uppercase text-blue-800 font-serif">
                    TECH WITH PURPOSE, INNOVATION WITH IMPACT.
                </p>
            </div>

    );
}

export default LogoSlide;
