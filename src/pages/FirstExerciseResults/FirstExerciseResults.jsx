import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { useStore } from "../../store/dataSlice";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";

export function FirstExerciseResults() {
    let navigate = useNavigate(); 
    const nameValue = useStore((state) => state.nameValue);
    const agifyData = useStore((state) => state.agifyData);
    const genderizeData = useStore((state) => state.genderizeData);
    const nationalizeData = useStore((state) => state.nationalizeData);
    const loadingResultsExercise1 = useStore((state) => state.loadingResultsExercise1);
    return (
        <div className="w-full h-screen flex-col bg-gray-200 dark:bg-gray-800">
            <Navbar />
            <Spinner />
            {loadingResultsExercise1 ?<Spinner />:<>
            <div className="p-[30px] flex flex-row">
                <div className=""> 
                    <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => navigate('/firstexercise')}> Back</button>
                </div>
                
                    <div className="w-full h-full items-center flex flex-row ml-5 pt-1 dark:text-white"> 
                        <p className="text-2xl ">Results for:</p>
                        <p className="text-2xl font-bold text-blue-700 dark:text-blue-500 ml-3">{nameValue}</p> 
                    </div>
            </div>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 p-4  text-center">
                        {genderizeData ? <Card title="Gender" data={genderizeData} type="gender" /> : null}
                        {agifyData ? <Card title="Age" data={agifyData} type="age"/> : null}

                    </div>
                    <div className="w-full grid grid-cols-1  gap-5 p-4">
                        {nationalizeData ? <Card title="Nationality" data={nationalizeData} type="nationality" chart/> : null}

                    </div>
                </>}
              
        </div>
    )
}