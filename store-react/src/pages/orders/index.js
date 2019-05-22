import React, { Component } from 'react';
import axios from 'axios';
import ShopOrdersList from '../../components/shopOrders/list';
import ShopOrderCreateForm from '../../components/shopOrders/createForm';
import ShopOrdersSearch from '../../components/shopOrders/search';
class Orders extends Component {
    state = {
         orders: [],
         showSearch:false,
         selectedOrderForGet: false 
        }

     constructor(props){
       super(props);
       this.getOrderbyClientName=this.getOrderbyClientName.bind(this);
   }
   
   
   
   
    async getOrderbyClientName(data) {
        console.log('Getting all orders from back end server =');
        const selectedOrderForGet = this.state.selectedOrderForGet;
        const clientname = selectedOrderForGet.clientname;
        this.setState({ showDelete: false });       
        this.ShopOrdersList();
        try {
            const result = await axios.get('http://localhost:4000/orders/clientname/' +clientname, data);

        }
        catch(error) {
            console.log('error');
            console.log(error);
        }

    }

    omponentWillMount() {
    console.log('Component will mount');
}

async componentDidMount() {
    try {
        const result = await axios.get('http://localhost:4000/orders');

        console.log(result);
        const orders = result.data.result;
        
        this.setState({ orders: orders });
    }
    catch(error) {
        console.log('error');
        console.log(error);
    }
 }

 componentWillUpdate() {
    console.log('Component will update');
 }

 componentDidUpdate() {
    console.log('Component did update');
 }

 openSearch(order){
     this.getOrderbyClientName(order)
 }
 
 
 render() {
    const orders = this.state.orders;
    const showSearch = this.state.ShopOrdersSearch;  
    console.log('Render');


    return (
        <div>
          <ShopOrderCreateForm orders />
          <ShopOrdersList orders = {orders} />
          <ShopOrdersSearch />   
      </div>
    );
 }
}


export default Orders;