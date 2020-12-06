import '../App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

export default class ExplorePage extends Component {

    constructor(props) {
        super(props);
        this.test=this.test.bind(this);

        this.state={
            item: ''
        }

    }
    
    test(msg){
        
        this.state.item=msg;
        console.log(this.state.item);
        this.props.history.push('/'+msg);
    }

    render() {
        return (
           <div class='container'>
                <div class='section1'>
                    <h4 class='section_heading'>Indian and Fusion Wear</h4>
                    <div class='categories_left'>
                    <Button  variant='success' onClick={this.test.bind(this, "kurtis")}>
                    <Link to="/items">
                        <h5 class='img_head'>KURTIS</h5>
                        <Image src='https://asset21.ckassets.com/thegoodlookbook/wp-content/uploads/sites/2/2018/08/07-03_Branded-Kurtis.jpg' alt="Kurtis" class='explore_pictures' height='400'></Image>
                        
                    </Link>
                    </Button>
                    </div>
                    
                    <div class='categories_right'>
                    <Button  variant='secondary' onClick={this.test.bind(this, "sarees")}>
                    <Link to="/items">
                        <h5 class='img_head'>SAREES</h5>
                        <Image src='https://i.pinimg.com/originals/b7/12/93/b7129354122ac65412e83a04e6f880aa.png' alt="Sarees" class='explore_pictures' height='400'></Image>
                        
                    </Link>
                    </Button>
                    </div>
                    
                </div>

                

                <div class='section2'>
                
                    <h4 class='section_heading'>Western Wear</h4>
                    <div class='categories_left'>
                        <Button variant='info' onClick={this.test.bind(this, "jeans")}>
                    <Link to="/items">
                        <h5 class='img_head'>JEANS</h5>
                        <Image src='https://media1.s-nbcnews.com/i/newscms/2016_21/1102416/skinny-jeans-today-tease-stock-160526_c387db75cfb21aaff271a9ef329a8483.jpg' alt="Jeans" class='explore_pictures' height='400'></Image>
                    </Link>
                    </Button>
                    </div>
                    
                    <div class='categories_right'>
                    <Button variant='dark' onClick={this.test.bind(this, "tops")}>
                    <Link to="/items">
                        <h5 class='img_head'>TOPS</h5>
                        <Image src='https://5.imimg.com/data5/YC/KV/EX/ANDROID-41445579/product-jpeg-500x500.jpg' alt="Tops" class='explore_pictures' height='400'></Image>
                        
                    </Link>
                    </Button>
                    </div>
                    
                </div>
            
           </div>

        )
    }
}