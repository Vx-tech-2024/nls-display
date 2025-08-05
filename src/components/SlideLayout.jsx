import logo from "../assets/logoOnly.png";

function SlideLayout({ children }) {
    return (
        <div className="w-full h-screen bg-white text-black flex flex-col items-center justify-center px-4 relative overflow-hidden">
          
            <img 
                src={logo}  

                alt="Company Logo"
                className="absolute top-4 left-4 w-16 h-16 z-50 bg-inherit"  
            />
            { children }
        </div>
    );
}

export default SlideLayout;
