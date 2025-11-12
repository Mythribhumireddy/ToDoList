import React  from 'react'


 function Child({name}) {
  console.log("Child Component");
  return <h1>Child Component - {name}</h1>
}
export default React.memo(Child);