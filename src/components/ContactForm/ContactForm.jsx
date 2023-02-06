import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "../ContactForm/ContactForm.module.css"



export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

  handleSubmit = (e) => {
      e.preventDefault();
      const { onSubmit } = this.props;
      onSubmit({ ...this.state });
      this.setState({
        name: '',
        number: ''
      })
    }
     

  handlChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
     { [name]: value}
    )
    }
    
  
    render() {
        const {handleSubmit,  handlChange} = this;
        const { name, number } = this.state;
    return (
        <>
    <form onSubmit={handleSubmit}>
        <div className={css.form}>
          <label><p className={css.label}>Name</p>
              <input
  onChange={handlChange}
  value={name}              
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
          />
            </label>

            <label><p className={css.label}>Number</p>
                <input
  onChange={this.handlChange}
  value={number}              
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
                        />
                    </label>
   <button className={css.button} type="submit">Add contact</button>
           </div>
  </form>     
       
        </>
    )
}
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
