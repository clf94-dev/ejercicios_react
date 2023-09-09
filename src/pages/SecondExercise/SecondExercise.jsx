import { useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { useStore } from "../../store/dataSlice";

export function SecondExercise() {  
    const historyData = useStore(state => state.historyData)
    const requestHistoryExercise2 = useStore(state => state.requestHistoryExercise2)
    useEffect(() => {
        if(!historyData) {
            requestHistoryExercise2()
        }
    }, [])

    console.log({historyData})
    return (
        <div className="w-full">
            <Navbar />
            <div className="h-screen flex flex-col justify-evenly items-center m-auto">
                <h1>COVID History data in the US</h1>
            </div>
        </div>
    )
}