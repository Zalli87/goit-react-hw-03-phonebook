import React, { Component } from 'react';
import Container from './components/Container'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
state = {
  contacts: [
    { id: uuidv4(), name: 'Rosie Simpson', number:'995-54-37' },
      { id: uuidv4(), name: 'Hermione Kline', number:'535-15-15'},
      { id: uuidv4(), name: 'Eden Clements', number:'333-13-13' },
      { id: uuidv4(), name: 'Annie Copeland', number:'225-25-25'},
  ],
  filter: ''
}
  
  addContact = ({name, number}) => {
    const { contacts } = this.state;
    const id = uuidv4();
    const contact = { id, name, number }

    contacts.find(
      ({name}) => name.toLowerCase() === contact.name.toLowerCase()
    ) ? alert(`${name} is already in contacts.`) :    
    this.setState(prevState => ({
      contacts: [contact, ...contacts]
    }));
  }

  filterChange = e => {
    const { value } = e.currentTarget;
    this.setState({filter: value})
};

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !==contactId),
    }))
  }

  componentDidMount() { 
    const contacts = localStorage.getItem('contacts');
    const parsedContactcs = JSON.parse(contacts);

    if(parsedContactcs){
    this.setState({ contacts: parsedContactcs })}
  };


  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
   localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
 }
  };

  render() {
    const { contacts, filter } = this.state;
    const tolowerCaseFilter = filter.toLowerCase();
    const visibleContact = contacts.filter(contact => contact.name.toLowerCase().includes(tolowerCaseFilter))
    return (
      <Container>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.filterChange} />
        <ContactList contacts={visibleContact} onDeleteContact={this.deleteContact}/>
      </Container>
  
    );
  }
}

export default App;
