import { useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { useStore } from "../../store/dataSlice";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
   /*  Tooltip, */
    /* Legend, */
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
  } from 'recharts';

export function SecondExercise() {  
    const historyData = useStore(state => state.historyData)
    const historyCases = useStore(state => state.historyCasesData)
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
                    <div className="flex flex-col w-full justify-center m-auto p-4 bg-white rounded">
                        <h3>Cases</h3>
                        <div className="flex flex-col p-4 ">
                            <p>Total</p>
                            <ResponsiveContainer width="100%" height={200}>
                              <AreaChart
                                width={500}
                                height={200}
                                data={historyCases}
                                syncId="anyId"
                                margin={{
                                  top: 10,
                                  right: 30,
                                  left: 0,
                                  bottom: 0,
                                }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" tick={{fontSize: 10}} />
                                <YAxis tick={{fontSize: 10}} />
                                {/* <Tooltip /> */}
                                <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                              </AreaChart>
                            </ResponsiveContainer>
                            <p>Change from previous day</p>
                            <ResponsiveContainer width="100%" height={200}>
                              <AreaChart
                                width={500}
                                height={200}
                                data={historyCases}
                                syncId="anyId"
                                margin={{
                                  top: 10,
                                  right: 30,
                                  left: 0,
                                  bottom: 0,
                                }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" tick={{fontSize: 10}} />
                                <YAxis tick={{fontSize: 10}} />
                                {/* <Tooltip /> */}
                                <Area type="monotone" dataKey="change_from_prior_day" stroke="#82ca9d" fill="#82ca9d" />
                              </AreaChart>
                            </ResponsiveContainer>
                            <p>7 day percentage change (%)</p>
                            <ResponsiveContainer width="100%" height={200}>
                              <LineChart
                                width={500}
                                height={200}
                                data={historyCases}
                                syncId="anyId"
                                margin={{
                                  top: 10,
                                  right: 30,
                                  left: 0,
                                  bottom: 0,
                                }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" tick={{fontSize: 10}} />
                                <YAxis tick={{fontSize: 10}} />
                                {/* <Tooltip /> */}
                                <Line type="monotone" dataKey="seven_day_change_percent" stroke="#82ca9d" fill="#82ca9d" />
                                <Brush dataKey="date" travellerWidth={1}/>
                              </LineChart>
                            </ResponsiveContainer>
                            </div>
                    </div>
                    <div className="flex-col sm:w-3/6 md:w-2/6 m-auto">Testing</div>
                    <div className="flex-col sm:w-3/6 md:w-2/6 m-auto">Deaths</div>
                </div>
            </div>
        </div>
    )
}