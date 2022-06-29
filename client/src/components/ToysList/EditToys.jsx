
import React, { Component } from 'react';
import axios from 'axios';

class EditToys extends Component {
  state = {
    name: this.props.toys.name, 
    description: this.props.toys.description,
    price: this.props.toys.price, 
  }

    
  handleFormSubmit = (event) => {
    const name= this.state.name;
    const description = this.state.description;
    const price = this.state.price;

    event.preventDefault();

    axios.put(`http://localhost:5000/toys/${this.props.name._id}`, { name, description,price })
      .then( () => {
        this.props.getTheToys();
        this.props.history.push('/toys');    
      })
      .catch( error => console.log(error) )
  }

  handleChangeName = (event) => {  
    this.setState({
      name:event.target.value
    })
  }

  handleChangeDescription = (event) => {  
    this.setState({
      description:event.target.value
    })
  }


  handleChangePrice = (event) => {  
    this.setState({
      price:event.target.value
    })
  }

  render(){
    return (
        <div>
          <hr />
          <h3>Edit Toys</h3>
              <form onSubmit={this.handleFormSubmit}>
                  <label>Nom:</label>
                  <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChangeName(e)}/>
                  <label>Description:</label>
                  <textarea name="description" value={this.state.description} onChange={ e => this.handleChangeDescription(e)} />
                  <label>Price:</label>
                  <input type="number" name="price" value={this.state.price} onChange={ e => this.handleChangePrice(e)}/>
               </form>

        </div>
    )
  }
}

export default EditToys;
