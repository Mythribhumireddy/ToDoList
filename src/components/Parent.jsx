import React, {useState, useCallback} from 'react'
import MemoTitle from './Title'
import MemoButton from './Button'
import Child from './Child'
import Count from './Count'

function Parent(){
    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(80000)

    const incrementAge = useCallback(()=>{
        setAge(age + 1)
    },[age])
   

    const incrementSalary = useCallback(()=>{
        setSalary(salary + 1000)
    },[salary])

    console.log("Parent Rendered")

    return(
        <>
            <MemoTitle />
            <h3>Age: {age}</h3>
            <MemoButton handleClick={incrementAge}>Increment Age</MemoButton>
            
            {/* <h3>Salary: {salary}</h3> */}

            <Count text='salary' count={salary} />
            <MemoButton handleClick={incrementSalary}>Increment Salary</MemoButton>
                
                <Child/>


            <MemoTitle />
        </>
    )
}

export default Parent