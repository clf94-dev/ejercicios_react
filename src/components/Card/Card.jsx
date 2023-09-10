import PropTypes from 'prop-types';
import Stadistics from '../Stadistics/Stadistics';

function Card({title, data, color, secondExercise, type}) {
    return (
        <div className="card ">
            <div className="flex flex-col h-full w-full justify-center m-auto p-4 bg-white rounded">
                {secondExercise ? <>
                    <h3 className='font-bold text-xl '>{title}</h3>
                    <Stadistics brush={title === "Testing"} data={data} color={color} />
                </> : <div className='flex flex-col '>
                    {/* <h3 className='font-bold text-xl '>{title}</h3> */}
                    <div className='flex flex-row  justify-center text-center mb-[3px] '>
                        <p className='text-lg  pt-[4px] '>Most Likely {title}:</p>
                        <p className='text-3xl font-bold text-blue-700 ml-3 capitalize'>{data[type]}</p>
                    </div>
                    {data.probability ? <div className='flex flex-row  justify-center text-center '>
                        <p className='text-lg text-gray-500'>Probability:</p>
                        <p className='text-xl font-bold text-blue-700 ml-3'>{data.probability * 100}%</p>
                    </div>: null}
                </div>}
            </div>
        </div>
    );
}
    Card.propTypes = {
        title: PropTypes.string,
        data: PropTypes.object,
        color: PropTypes.string,
        secondExercise: PropTypes.bool,
        type: PropTypes.string
    }

    export default Card;