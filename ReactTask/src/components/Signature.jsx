import './Signature.css';
import React from 'react'
import Row from './Row';
import face from '../assets/face.png'

function Signature({name,post}){

    return (
    <Row>
    <div className="cover3"><img src={face} alt={`image of ${name}`} /></div>
    <div className="Infos">  
    <div className="Name">
            {name}
    </div>
    <div className="Post">
            {post}
    </div>
     
    </div>
    </Row>)

}

export default Signature;