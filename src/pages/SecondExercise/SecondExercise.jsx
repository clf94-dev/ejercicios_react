import { useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { useStore } from "../../store/dataSlice";
import Card from "../../components/Card";

export function SecondExercise() {  
    const historyData = useStore(state => state.historyData)
    const historyCases = useStore(state => state.historyCasesData)
    const historyTesting = useStore(state => state.historyTestData)
    const historyDeath = useStore(state => state.historyDeathData)
    const requestHistoryExercise2 = useStore(state => state.requestHistoryExercise2)
    useEffect(() => {
        if(!historyData) {
            requestHistoryExercise2()
        }
    }, [])

    console.log({historyData, historyCases})
    return (
        <div className="w-full bg-gray-200">
            <Navbar />
            <div className="h-screen flex flex-col justify-evenly items-center m-auto">
                <h1>COVID History data in the US</h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    <Card title="Cases" data={historyCases} color="#8884d8" />
                    <Card title="Testing" data={historyTesting} colo="#82ca9d" />
                    <Card title="Deaths" data={historyDeath} color="#ffc658" />
                </div>
            </div>
        </div>
    )
}