import PropTypes from 'prop-types';
import Stadistics from '../Stadistics/Stadistics';

function Card({title, data, color, secondExercise}) {
    return (
        <div className="card">
            <div className="flex flex-col w-full items-center justify-centerr m-auto p-4 bg-white rounded">
                {secondExercise ? <>
                    <h3 className='font-bold text-xl '>{title}</h3>
                    <Stadistics brush={title === "Testing"} data={data} color={color} />
                </> : null}
            </div>
        </div>
    );
}
    Card.propTypes = {
        title: PropTypes.string,
        data: PropTypes.object,
        color: PropTypes.string,
        secondExercise: PropTypes.bool,
    }

    export default Card;