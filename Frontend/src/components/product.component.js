import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import axios from 'axios';

export default class ProductPage extends Component{
    constructor(props){
        super(props);
        this.state={
            product_name:'',
            category:'',
            quantity: 1,
            price: 0,
            image: ''
        };
        this.add=this.add.bind(this);
    }

    componentDidMount(){
             
    }

    
    add(){

        this.setState(
            {
                product_name: this.props.product_name,
                category: this.props.category,
                price: this.props.price,
                image:this.props.image
            },
            ()=>{
                const entry={
                    product_name: this.state.product_name,
                    image: this.state.image,
                    category: this.state.category,
                    quantity: this.state.quantity,
                    price: this.state.price
                };
                console.log(entry)
                axios.post('http://localhost:4000/add_to_cart', entry);
            }

        );
        
        
    }

    render(){
        return(
            <div class='prod_container'>
                <h5>{this.props.product_name}: </h5>
                <Image src={this.props.image} height='150'></Image> <Button color='secondary' variant='secondary' onClick={this.add.bind(this,this.props)}>Add to Cart</Button>
            </div>
        );
    }
}