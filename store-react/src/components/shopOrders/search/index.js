import React, {
    Component
} from 'react';
import axios from 'axios';
// {InputText} from 'primereact/inputtext';
import OrderListComponent from '../list';
import SearchedOrderByClientName from '../search/orders'


class SearchOrderByClientName extends React.Component {
  constructor(props){
      super(props);
      this.state = {
       clientname:'',
       orders: [],
       ordersAsString:''
      }; 
    
 this.handleInputChange = this.handleInputChange.bind(this);
 this.onSubmit = this.onSubmit.bind(this);  
 this.updateOrders = this.updateOrders.bind(this);
 
}

async onSubmit(event) {
  event.preventDefault();
  console.log('HERE')
}

  
 async handleInputChange(event) {
   let text = event.target.value;
   console.log('inside handleInputChange = ' + event.target.value)
   this.setState({clientname: text});
   let result = await axios.get('http://localhost:4000/orders/clientname/' + event.target.value);
   console.log('fetch orders result = ' + JSON.stringify(result))   
   this.setState({orders: result});
   this.setState({ordersAsString:JSON.stringify(result.data.order)}) 
  
}

async updateOrders(event) {
 console.log('fdewufhsgdsj')
 return (
  <div>
    <h2>ceva de exemplu</h2> 
 </div>
);
}

render() {
   const showSearch = this.state.showSearch;  
  
  
  return (
      <div>
      <form onSubmit={this.onSubmit}>
      <br />
      <br />
      <br />
      <br />
      <h2>Search by clientName</h2>
      <div>
       <label htmlFor="clientname">clientname:</label>
       <input 
         name = "clientname"
         type = "box"
         checked = {this.state.clientname}
         onChange = {this.handleInputChange} 
        />
      </div>
      <button onClick={() => this.updateOrders}>Search</button>
         
    </form>
      <h1>{this.state.ordersAsString}</h1>
    
    </div>
    );
   }
}




export default SearchOrderByClientName;