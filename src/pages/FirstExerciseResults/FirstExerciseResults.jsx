import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";

export function FirstExerciseResults() {
    let navigate = useNavigate(); 
    return (
        <div className="w-full flex-col">
            <Navbar />
            <div className="p-[30px]">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => navigate('/firstexercise')}> Back</button>
            </div>
        </div>
    )
}