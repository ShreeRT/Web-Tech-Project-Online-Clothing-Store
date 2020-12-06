import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

export default class CartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [], 
            price:0
        }
        this.checkout=this.checkout.bind(this);
        
    }
    componentDidMount() {
         axios.get('http://localhost:4000/view_cart')
        .then(response => {
            console.log(response);
            this.setState({ data: response.data });
            console.log(this.state.data)
        })
        .catch(function (error){
            console.log(error);
        })
       
    }

    delete(id){
        console.log(id);
        axios.delete('http://localhost:4000/remove_from_cart/' + id)
          .then((result) => {
            window.location.href = "http://localhost:3000/cart"
          });
      }
      
      checkout(){
        this.props.history.push('/checkout');
      }
    
    render() {
        return (
            <div>
                <h3>CART</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>PRODUCT NAME</th>
                            <th></th>
                            <th>CATEGORY</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{this.state.data.map((curItem)=>
                        <tr>
                            <td>{curItem.product_name}</td>
                            <td><Image src={curItem.image} height='100'/></td>
                            <td>{curItem.category}</td>
                            <td>{curItem.price}</td>
                            <td>{curItem.quantity}</td>
                            <td><Button variant='danger' onClick={this.delete.bind(this,curItem._id)}>Remove</Button></td>
                        </tr>)}   
                    </tbody>
                </table>
                <Button variant='success' onClick={this.checkout}>Checkout</Button>
            </div>
        )
    }
}