import React, {Component} from 'react';
import './checkout.css';

import axios from 'axios';

export default class CheckoutPage extends Component
{
    constructor(props) {
    super(props);
    this.state = 
    {
        value: '',
        data: [],
        total_price: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calc_tp=this.calc_tp.bind(this);
    this.deleteAll=this.deleteAll.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.value + " your order Successfully is placed ! Thank You for shopping with us!!");
    event.preventDefault();
  }

  calc_tp()
  {
    var tp=0;
    this.state.data.map((curItem)=>
       tp+=(curItem.price)*(curItem.quantity));
    return tp;
  }

  deleteAll(){
    this.state.data.map((curItem)=>
        axios.delete('http://localhost:4000/remove_from_cart/' + curItem._id)
    );
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
  render(){
     return (
    <div class="checkout">
      <h1> Checkout</h1>
      <h2> Your Order </h2>
        <div class="checkout-inner">
      <form onSubmit={this.handleSubmit}>
        <div class="checkout-form-steps">
        <h2> Personal details </h2>
            <label>
              NAME:<br></br>
              <input type="text" placeholder="Your Name" value={this.state.value} onChange={this.handleChange} class="textfield" required="name"/><br></br>
              EMAIL:<br></br>
              <input type="email" class="textfield" placeholder="Your Email" required="email"/><br></br>
              CONTACT NUMBER:<br></br>
              <input type="text" class="textfield" placeholder="Your Contact number" required="mobile_number"/>
              <h2>Shipping Details</h2>
                    COUNTRY:<br></br><select class="select">
                        <option>Country</option><option>INDIA</option></select><br></br><br></br>
                    STATE:<br></br><input type="text" class="textfield1" placeholder="Your State" required="state"/><br></br>
                    ADDRESS:<br></br><textarea rows="6" cols="35" name="textarea" placeholder="Your Address" class="textfield" required="address"></textarea><br></br>
                    PINCODE:<br></br><input type="text" class="textfield1" placeholder="Your Pincode" required="pincode"/>
            </label>
            <h2> Payment Mode </h2>
                        
                        <label for="radio2">
                        <input type="radio" name="payment-mode" id="radio2"/>
                         Credit/Debit/ATM Card
                         <br></br>
                        <input type="text" class="textfield" placeholder="Card holder name"/><br></br>
                        <input type="text" class="textfield" placeholder="Card NUMBER"/><br></br>
                        <select class="select">
                        <option>Expiry MM</option><option>01</option>  <option >02</option> <option>03</option><option>04</option><option>05</option>
                        <option>06</option><option>07</option><option>08</option><option>09</option><option>10</option> <option>11</option><option>12</option>
                        </select>
                        <select class="select">
                        <option>Expiry YYYY</option><option>2020</option>  <option >2021</option> <option>2022</option><option>2023</option><option>2024</option>
                        <option>2025</option><option>2026</option>
                        </select><br></br>
                        <input type="text" class="textfield1" placeholder="Enter CVV"/>(CVV is 3 digit number present in your Atmcard)<br></br>
                     </label>
                     <br></br><br></br>
                     <label for="radio1">
                        <input type="radio" required="option" name="payment-mode" id="radio1"/>
                        Pay on Delivery
                        </label>
                        <br></br><br></br>
                    <label for="radio3">
                        <input type="radio" name="payment-mode" id="radio3"/>
                         Wallet
                    </label>
            </div>
            <div id="mybutton">
                <br></br><input type="submit" value="Submit Order" class="submit-order-button" onClick={this.deleteAll}/>
             </div>
      </form>
      </div>
      <div class="orderlist">{this.state.data.map((curItem)=>
            <div>
                <img src={curItem.image} height="100" alt={curItem.product_name}/>
                <h3>{curItem.product_name}</h3>
                <p>Quantity:<span>{curItem.quantity}</span></p>
                <p>Price:<span>{curItem.price}</span></p>
            </div>
            
        )
        }
        <br></br><br></br>
        <p>Order Total:<span>{this.calc_tp()}</span></p>
      </div>
      </div>
  );
  }
}
