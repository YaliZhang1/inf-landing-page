import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import product from'./img/product.png'
import stuff1 from'./img/stuff1.png'
import stuff2 from'./img/stuff2.png'
import stuff3 from'./img/stuff3.png'
import './index.css'
export default class Product extends Component {
  render() {
    return (<div className="product">
              
            <div className=" row middleContent">
                <div className="p-2 col-sm-12 col-md-6">
                </div >
            
                <div className="productText2 col-sm-12 col-md-6">
                    <p className='textItem1'>My own knife</p>
                    <p className='textP1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem consectetur beatae, praesentium architecto sunt iure illum. Ea placeat nesciunt nulla labore,
                        voluptatibus architecto nobis quaerat aspernatur perferendis numquam inventore explicabo?</p>
                </div >
            </div>
             
              <div className='container'>
                <p className='content1'>Some content</p> 
                <div className='row'>
                        <div className=" col-sm-12 col-md-4">
                            <img src={stuff1} alt='./img/stuff1.png'/>
                            <p className='content2'>Somethng here</p> 
                        </div >
                        <div className=" col-sm-12 col-md-4">
                            <img src={stuff2} alt='./img/stuff2.png'/>
                            <p className='content2'>Somethng here</p> 
                        </div >
                        <div className=" col-sm-12 col-md-4">
                            <img src={stuff3} alt='./img/stuff3.png'/>
                            <p className='content2'>Somethng here</p> 
                        </div >
                        
                    </div>
              </div>

            </div>)
  }
}
