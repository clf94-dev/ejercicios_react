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

 function Stadistics({data, color}) {
    return (
        <div className="flex flex-col p-4 ">
            <p>Total</p>
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
            <p>Change from previous day</p>
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
            <p>7 day percentage change (%)</p>
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
                <Brush dataKey="date" travellerWidth={1}/>
              </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
Stadistics.propTypes = {
    data: PropTypes.array,
    color: PropTypes.string,
}

export default Stadistics;