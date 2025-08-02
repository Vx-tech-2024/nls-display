import SlideLayout from "./SlideLayout";
import mdMessage from "../data/mdMessage";

function MDMessageSlide() {
    return (

            <div className="flex items-center justify-center min-h-full w-full">
                <div className="max-w-2xl text-center space-y-4">
                    <h2 className="text-5xl font-bold text-center uppercase">
                        {mdMessage.title.toUpperCase()}
                    </h2>
                    <p className="text-3xl leading-relaxed text-center uppercase">
                        {mdMessage.message.toUpperCase()}
                    </p>
                </div>
            </div>

    );
}

export default MDMessageSlide;
