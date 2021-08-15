import React from 'react'

export default function functionClick() {
    function clickHandler() {
        console.log("Function Button Clicked");
    }
    return (
        <div>
            <h1>This is the function statement</h1>
            <button onClick={clickHandler} >Function Click</button>
        </div>
    )
}
