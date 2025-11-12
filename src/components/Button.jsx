import React from 'react'

function Button({handleClick, children}) {
    console.log('button renderd')
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

let MemoButton=React.memo(Button)
export default MemoButton
