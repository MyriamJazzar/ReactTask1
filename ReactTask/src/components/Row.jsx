import React from 'react'
function Row({children}){
    // tailwind css 
    // css files (module)
    return (
    <div style={{display:"flex",justifyContent:"center",gap:"20px",alignItems:"center", marginBottom:"20px",marginTop:"20px"}}>
        {children}
    </div>)
}

export default Row