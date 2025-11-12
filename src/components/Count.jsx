import React from 'react'

const Count = React.memo(({text, count}) => {
    console.log("Count Rendered")
    return (
        <h2>{text}: {count}</h2>
    )
})

export default Count