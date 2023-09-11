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
  const countryLowercase = payload.value.toLowerCase()
      return (
  
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
        <span className={`fi fi-${countryLowercase}`}></span>
        </text>
      </g>
    );
    }
} */
export function ProbabilityChart({data}) {
    return (
        <div className="w-full flex flex-col justify-center p-4 ">
            <div className='flex flex-row w-full h-full justify-evenly mx-14'>
                {data.map(item => {
                    const countryLowercase = item.country_id.toLowerCase()
                    return(<div key={countryLowercase} className='w-1/12 text-lg pr-20 '>
                            <span  className={`fi fi-${countryLowercase}`} style={{height: 40, width: 40}}></span>
                        </div>)
                })}

            </div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart width={500} height={200} data={data}>
                    <XAxis dataKey="country_id" /* tick={<CustomizedAxisTick />} */ />
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
