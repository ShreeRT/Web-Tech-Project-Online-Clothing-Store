import React, {Component} from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'


import ProductPage from "./product.component";


export default class ItemsPage extends Component{

    constructor(props) {
        super(props);
        this.next=this.next.bind(this);
        

        this.state={
            item: '',
            data:[],
            clicked: false,
            cur_prod_name: '',
            cur_img: '',
            cur_price: 0,
            cur_category: ''
        }
 
        
    }

    next(prod_name,img,price,category){
        this.setState({clicked: true, 
            cur_prod_name: prod_name, 
            cur_img: img, 
            cur_price:price,
            cur_category: category
        });     
    }

    componentDidMount(){

        
        if(window.location.href =="http://localhost:3000/kurtis")
        {
            this.setState({item:'kurtis'});

            axios.get('http://localhost:4000/products/kurtis')
            .then(response => {
                this.setState({ data: response.data });
                console.log(this.state.data);
            })
         }
        
         if(window.location.href =="http://localhost:3000/sarees")
        {
            this.setState({item:'sarees'});

            axios.get('http://localhost:4000/products/sarees')
            .then(response => {
                this.setState({ data: response.data });
                console.log(this.state.data);
            })
         }
         if(window.location.href =="http://localhost:3000/jeans")
        {
            this.setState({item:'jeans'});

            axios.get('http://localhost:4000/products/jeans')
            .then(response => {
                this.setState({ data: response.data });
                console.log(this.state.data);
            })
         }
         if(window.location.href =="http://localhost:3000/tops")
        {
            this.setState({item:'tops'});

            axios.get('http://localhost:4000/products/tops')
            .then(response => {
                this.setState({ data: response.data });
                console.log(this.state.data);
            })
        }

        
    }  
    

    render(){
        
        return(
            <div>
                <p>{this.state.data.map((curItem)=>
                    <Button variant='secondary' onClick={this.next.bind(this,curItem.product_name,curItem.image,curItem.price, curItem.category)}>
                    <Image src={curItem.image} height='300'></Image>
                    <h5>{curItem.product_name}</h5>
                    <h5>Price: {curItem.price}</h5> 
                    <br/>  
                    </Button> 
                    )}
                </p>
                {this.state.clicked ? <ProductPage product_name={this.state.cur_prod_name} image={this.state.cur_img} price={this.state.cur_price} category={this.state.cur_category}/> : null}
                
            </div>
        );  
    }
}