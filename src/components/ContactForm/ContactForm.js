import React, { Component } from "react";

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
}
  
    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })


    }
    
    reset = () => {
        this.setState({ name: '', number: '' });
    }

  handleSubmit = event => {
    event.preventDefault();
      this.props.onSubmit(this.state)
      this.reset()
  }

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
          <label >
            <p>Name:</p>
            <input type="text" value={name} name="name" onChange={this.handleChange} />
          </label>
           <label >
            <p>Number:</p>
            <input type="text" value={number} name="number" onChange={this.handleChange} />
          </label>
                <button type="submit">Add contact</button>
            </form>
            
        )
    }
}

export default ContactForm;