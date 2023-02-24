import React from 'react'
import Article from './Article';
import Article0 from './Article0';
import Button from './Button'
import Row from './Row';

function HomePage() {

    let article1 = {
        cover: 'https://live.staticflickr.com/4524/26534652509_771c72c4d4_b.jpg',
        category: 'Design',
        publishedAt: '2021-03-22',
        title: 'How to design a website',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    } 
    let article2 = {
        cover: 'https://live.staticflickr.com/4524/26534652509_771c72c4d4_b.jpg',
        category: 'Design',
        publishedAt: '2021-03-22',
        title: 'How to design a website',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    } 
    let article0 = {
        cover: 'https://live.staticflickr.com/4524/26534652509_771c72c4d4_b.jpg',
        category: 'Product',
        publishedAt: '2021-03-22',
        title: 'How to design a website',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    } 

  

    return (
        <div>
  
        <Article0 {...article0}/>
      
        <Row>
          <Article {...article1}/>
          <Article {...article2}/>
        </Row>
        </div>
    )
}


export default HomePage;
