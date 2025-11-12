import React from 'react'

function Title() {
  console.log("Title Rendered")

  return (
    <>
    <h1>useCallBack Hook</h1> 
    </>
  )
}

let MemoTitle=React.memo(Title)
export default MemoTitle