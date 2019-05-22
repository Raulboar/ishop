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
       orders: []
      }; 
    
 this.handleInputChange = this.handleInputChange.bind(this);
 // this.onSubmit = this.onSubmit.bind(this);  
  }

 
 async handleInputChange(text) {
    this.setState({clientname: text});

    if (!text) {
      this.setState({orders: []});
    } else { 
      let result = await axios.get('http://localhost:4000/orders/clientname/' +text);
      this.setState({orders: result});
    }

}

render() {
    return (
      <form onSubmit={this.onSubmit}>
      <br />
      <br />
      <br />
      <br />
      <h2>Search by clientName</h2>
      <div>
       <label for="clientname">clientname:</label>
       <input 
         name = "clientname"
         type = "box"
         checked = {this.state.clientname}
         onChange = {this.handleInputChange} 
        />
      </div>
      <button onClick={() => this.handleInputChange}>Search</button>
    
    </form>
     );
  }
}




export default SearchOrderByClientName;