import React, { useMemo, useState } from 'react'

export default function () {

    let [counter1,setCounter1]=useState(0);
    let [counter2,setCounter2]=useState(0);

    const handlecounterOne=()=>
    {
        setCounter1(counter1+1);
    }

    const handlecounterTwo=()=>
    {
        setCounter2(counter2+1);
    }

    const isEven=useMemo(()=>
    {
        let i=0;
        while(i<200000000) i++;
        return counter1%2==0;

    },[counter1])

  return (
    <>
    <button className='btn btn-dark mt-1' onClick={handlecounterOne}>Inc:-{counter1}</button>
    <span>{isEven ? "Even" : "Odd"}</span>
    <button className='btn btn-dark mt-1'onClick={handlecounterTwo}>Inc:-{counter2}</button>   
    </>
  )
}
