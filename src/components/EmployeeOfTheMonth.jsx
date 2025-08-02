import SlideLayout from "./SlideLayout";
import employeeOfTheMonth from "../data/employeeOfTheMonth";

function EmployeeOfTheMonth() {
    if (!employeeOfTheMonth) {
        return (
            <SlideLayout>
                <div className="text-center space-y-12">
                    <h2 className="text-6xl font-bold">🌟Employee of the Month🌟 </h2>
                    <p className="text-4xl text-red-500">No employee data available.</p>
                </div>
            </SlideLayout>
        );
    }

    return (
  
            <div className="text-center space-y-12">
                <h2 className="text-6xl font-bold">🌟Employee of the Month🌟 </h2>
                <img src={employeeOfTheMonth.photo || ""} alt={employeeOfTheMonth.name || "Employee"}  className="w-60 h-60 rounded-full mx-auto object-cover"/>
                <p className="text-4xl font-semibold">{employeeOfTheMonth.name || "Unknown"}</p>
                <p className="text-2xl text-gray-900">{employeeOfTheMonth.role || "Role not specified"}</p>
                <p className="italic text-3xl">{employeeOfTheMonth.description || "None"}</p>
            </div>

    );
}

export default EmployeeOfTheMonth;