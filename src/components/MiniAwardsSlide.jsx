import SlideLayout from './SlideLayout';
import miniAwards from '../data/miniAwards';

const toMidnight = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());

};

function MiniAwardsSlide() {
    const today = new Date();

    const isThisWeek = (dateStr) => {
       const date = toMidnight(new Date(dateStr));
       const todayMidnight = toMidnight(today);

       const dayOfWeek = todayMidnight.getDay();
       const startOfWeek = new Date(todayMidnight);
       startOfWeek.setDate(todayMidnight.getDate() - dayOfWeek + 1);
       const endOfWeek = new Date(startOfWeek);
       endOfWeek.setDate(startOfWeek.getDate() + 6);
    
    return date >= startOfWeek && date <= endOfWeek;
    };
    const awardsToShow  = miniAwards.filter(award => isThisWeek(award.awardDate));
    if (awardsToShow.length === 0) return null;

    return (

            <div className="text-center space-y-10">
                <h2 className="text-5xl font-bold">Mini Awards of the Week🏆 </h2>
                <div className="space-y-8">
                    {awardsToShow.map((award, idx) => (
                        <div
                        key={idx}
                        className="bg-yellow-50 border border-yellow-300 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg"
                        >
                            <p className="text-3xl font-bold text-yellow-800">{award.title}</p>
                            <p className="text-2xl font-semibold text-gray-600">{award.recipient}</p>
                            <p className="text-xl text-gray-600">{award.department}</p>
                            <p className="italic text-lg mt-2 text-gray-600">{award.reason}</p>
                        </div>
                    ))}
                </div>
            </div>

    );
    }
export default MiniAwardsSlide;