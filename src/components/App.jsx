import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { nanoid } from "nanoid";

export class App extends Component {

  state = {
    contacts: [  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],

    filter: ''
  }

  addContact = ({ name, number }) => {
      const { contacts } = this.state;
      if (this.isDublcate(name)) {
        return alert(`${name} is already in contacts.`)
      }
    this.setState((prevState) => {
      const newContact = {
        id: nanoid(),
        name,
        number
      }
      return {contacts: [newContact, ...contacts], name:'', number:''}
    })
  }

    isDublcate(name) {
      const normolizeName = name.toLocaleLowerCase();
      const { contacts } = this.state;
      const contact = contacts.find(({ name }) => {
        return(name.toLocaleLowerCase() === normolizeName)
      });
      return Boolean(contact);
    }

  removeContact = (id) => {
    this.setState(({contacts}) => {
      const newContacts = contacts.filter(contact => contact.id !== id)
      return {contacts: newContacts}  
    })
  }

  handlChangeFilter = ({ target }) => {
    this.setState(
     { filter: target.value}
    )
  }

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalazeFilter = filter.toLocaleLowerCase();
    const result = contacts.filter(({ name }) => {
      return(name.toLocaleLowerCase().includes(normalazeFilter))
    })

    return result;
  }

  render() {

    const contacts = this.getFilteredContacts();
    
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />

          <h2>Contacts</h2>
          <Filter handlChange={this.handlChangeFilter} filter={this.state.filter} />
          <ContactList contacts={contacts} removeContact={this.removeContact}/>
        </div>
      </>
    )
    
  }
};