import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './index.css'

export default class Header extends Component{
         

    render(){
        return <div className="header">
        
        <div className="p-5">
          <div className="topRow">
            <div className="topRowText">
                <p>The influencer</p>
            </div>
            <div className="topRowButton">
                <Button className="nav-link text-dark btn btn-light btn-md"  
                         href="mailto:hello@creatorsline.com">Contact </Button>    
            </div>               
          </div>   

          <div>
            <p className="productText" >Sign up to the product release</p>
          </div>
                
          <div className="signupRow">
            <div className="inputSignupRow">
                <input onKeyUp={this.handleKeyUp} type="text" id="txtEmail" name="txtEmail" placeholder="Add your email"></input>
            </div>
            <div className="btnSignupRow">
                <button className="btnSignup">SIGN UP</button>    
            </div>               
          </div>
          
        </div>
      
         
       </div>  
    }
}


