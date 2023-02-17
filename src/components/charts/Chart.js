import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import './chart.css'

function Chart(props) {
  if (props.pathName === 'temperature') {
    return (
      <ResponsiveContainer width="100%" minHeight={250} aspect={2}>
        <AreaChart data={props.chartDatas}>
          <XAxis dataKey="name" />
          <YAxis
            dataKey="value"
            domain={([dataMin, dataMax]) => {
              const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax))
              return [-absMax, absMax]
            }}
          />
          <Area dataKey="value" stroke="#26b033" fill="#26b033" />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
  if (props.pathName === 'methane' || 'nitrous-oxide' || 'co2') {
    return (
      <ResponsiveContainer width="100%" minHeight={250} aspect={2}>
        <AreaChart data={props.chartDatas}>
          <XAxis dataKey="name" />
          <YAxis dataKey="value" domain={['dataMin', 'dataMax']} />
          <Area dataKey="value" stroke="#26b033" fill="#26b033" />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
  if (props.pathName === 'arctic') {
    return (
      <ResponsiveContainer width="100%" minHeight={250} aspect={2}>
        <AreaChart data={props.chartDatas}>
          <XAxis dataKey="name" />
          <YAxis dataKey="value" />
          <Area dataKey="value" stroke="#26b033" fill="#26b033" />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}
export default Chart
