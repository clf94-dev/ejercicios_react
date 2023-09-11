import PropTypes from 'prop-types';
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
  import { DataFormater } from '../../utils/formatter';
import ChartTitle from '../ChartTitle/ChartTitle';

 function Stadistics({data, color, brush}) {
    return (
        <div className="w-full flex flex-col p-4 ">
            <ChartTitle title="Total"/>
            
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart
                width={500}
                height={200}
                data={data}
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
                <YAxis tick={{fontSize: 10}} tickFormatter={DataFormater} />
                {/* <Tooltip /> */}
                <Area type="monotone" dataKey="total" stroke={color} fill={color} />
              </AreaChart>
            </ResponsiveContainer>
            <ChartTitle title="Change from previous day"/>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart
                width={500}
                height={200}
                data={data}
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
                <YAxis tick={{fontSize: 10}} tickFormatter={DataFormater} />
                {/* <Tooltip /> */}
                <Area type="monotone" dataKey="change_from_prior_day" stroke={color} fill={color} opacity={0.5} />
              </AreaChart>
            </ResponsiveContainer>
            <ChartTitle title="7 day percentage change (%)"/>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart
                width={500}
                height={200}
                data={data}
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
                <YAxis tick={{fontSize: 10}} tickFormatter={DataFormater} />
                {/* <Tooltip /> */}
                <Line type="monotone" dataKey="seven_day_change_percent" stroke={color} fill={color} />
                {brush ? <Brush dataKey="date" width={200} x={100}/> : null}
              </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
Stadistics.propTypes = {
    data: PropTypes.array,
    color: PropTypes.string,
    brush: PropTypes.bool,
}

export default Stadistics;