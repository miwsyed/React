import React from "react"
function Header({name , title}){
    return (
        <div style={{background:'yellow', padding: 20}}>
            <h1 style={{background:'grey', padding: 5}}>Header</h1>
            <h2>{name} on it</h2>
            <p>is an excellent {title}.</p>
            <hr/>
        </div>
    );
}

export default Header; 