import SlideLayout from './SlideLayout';

function LogoSlide() {
    return (

            <div className="flex flex-col items-center justify-center gap-4 ">
                <img src="/assets/logo.png" alt="nls logo" />
                <p className="text-4xl font-semibold text-center uppercase">
                    WE ARE GROUNDED BY OUR CORE VALUES
                </p>
            </div>

    );
}

export default LogoSlide;
