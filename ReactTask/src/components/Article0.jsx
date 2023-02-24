import './Article.css';
import React from 'react'
import Row from './Row';
import Signature from './Signature';

function Article0({cover,category,publishedAt,title,shortDescription}){
     let signatureArticle0 = {
        name : 'Mohsen',
        post : 'Lead Product Owner',
        
    } 
    return (
    <Row>
    <div className="cover2"><img src={cover} alt={`image of ${title}`} /></div>
    <div className="Article">  
        <div className="details">
            <span>{category.toUpperCase()}</span>
            <span>{publishedAt}</span>
        </div>
        <h2 className="title">
            {title}
        </h2>
        <p>
            {shortDescription}
        </p>
        <Signature {...signatureArticle0}/>
    </div>
    </Row>)

}

export default Article0;