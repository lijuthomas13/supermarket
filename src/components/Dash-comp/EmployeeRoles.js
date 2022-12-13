import React from 'react'
import { PieChart, Pie, Sector, Cell } from "recharts";
function EmployeeRoles(props) {

  const Engineer_count = props.data.filter(obj => {
    if (obj.Designation==="Engineer") {
      return true;
    }
    return false;

  }).length;

  const Designer_count = props.data.filter(obj => {
    if (obj.Designation==="Designer") {
      return true;
    }
    return false;

  }).length;

  const Manager_count = props.data.filter(obj => {
    if (obj.Designation==="Manager") {
      return true;
    }
    return false;

  }).length;


  const data = [
    { name: "Engineer", value: Engineer_count*100 },
    { name: "Designer", value: Designer_count*100 },
    { name: "Manager", value: Manager_count*100 },
    
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  let renderLabel = function(entry) {
    return entry.name + entry.value/100;
  }
  return (
    <PieChart width={1000} height={400}>
    <Pie
      data={data}
      cx={250}
      cy={140}
      innerRadius={60}
      outerRadius={100}
      label={renderLabel}
      fill="#8884d8"
      paddingAngle={2}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
      ))}
    </Pie>
    
  </PieChart>
  )
}

export default EmployeeRoles