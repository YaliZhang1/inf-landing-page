import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import './App.css'
import Product from './components/Product';
import Footer from './components/Footer';



export default class App extends React.Component{

 
    render(){
        return(
            <div>
                <Header/>
                <Product/>
                <Footer/>
            </div>
       )

    }
}