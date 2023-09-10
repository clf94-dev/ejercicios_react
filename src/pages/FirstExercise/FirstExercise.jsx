import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/dataSlice"
import { Navbar } from "../../components/Navbar/Navbar";

export function FirstExercise() {
    const nameValue = useStore((state) => state.nameValue);
    const [inputValue, setInputValue] = useState(nameValue || "");
    const requestDataExercise1 = useStore((state) => state.requestDataExercise1);
    let navigate = useNavigate(); 

    const handleInputChange = (event) => {
        const value = event.target.value;
    
        if (/^[A-Za-z]+$/.test(value) || value === "") {
          setInputValue(value);
        } 
      };
    const handleSubmit = (event) => {
      event.preventDefault(); 
      const pathParams = {
        name: inputValue
      }
      requestDataExercise1(pathParams);
      navigate('/firstresults');

    };
    
    
    return (
        <div className="w-full">
            <Navbar />
            <div className="h-screen flex flex-col justify-evenly items-center m-auto">
                <h2 className="font-bold text-xl">Enter your name</h2>
                <form className="flex flex-col h-[500px] justify-between" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    id="charInput"
                    name="charInput"
                    value={inputValue}
                    onChange={handleInputChange}
                    pattern="[A-Za-z]+"
                    required
                    className="mb-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-[300px]" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}