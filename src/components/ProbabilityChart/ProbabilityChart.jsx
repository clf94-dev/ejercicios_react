import PropTypes from 'prop-types'
/* import  { PureComponent } from 'react'; */
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

/* class CustomizedLabel extends PureComponent {
    render() {
      const { x, y, stroke, value } = this.props;
  console.log({value})
      return (
        <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
         <Flag country={value}  size={84}/>
        </text>
      );
    }
  }  */
/* class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y,/*  stroke,  payload } = this.props;
  console.log({payload})
      return (
  
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
        <span className={`fi fi-${payload.value}`}></span>
        </text>
      </g>
    );
    }
} */
export function ProbabilityChart({data}) {
   console.log({data})
    return (
        <div className="w-full flex flex-col p-4 ">
            {/* <div className='flex flex-row  w-full h-100'>
                {data.map(item => {
                    const countryLowercase = item.country_id.toLowerCase()
                    return(<span key={countryLowercase} className={`fi fi-${countryLowercase} text-lg`}></span>)
                })}

            </div> */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart width={500} height={200} data={data}>
                    <XAxis dataKey="country_id"/*  tick={<CustomizedAxisTick />}  *//>
                    <YAxis tick={{fontSize: 10}}  />
                    <Tooltip />
                    <Bar dataKey="probability" fill="#8884d8" /* label={<CustomizedLabel />} */ />
                </BarChart>
            </ResponsiveContainer>
            </div>
   
    )
}

ProbabilityChart.propTypes = {
    data: PropTypes.array,
}
export default ProbabilityChart;
