import { GlobalStyle } from './GlobalStyle'
import { Container } from './App.styled';
import { nanoid } from 'nanoid'
import React, {Component} from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';

class App extends Component {
 state = {
  contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
   filter: '',
  }

  addContact = ({name, number}) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`)
      return
    }
    
    const newContact = { id: nanoid(), name, number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }));
  }
    
  handleChange = (event) => {
  const { name, value } = event.currentTarget;
  this.setState({ [name]: value });
  };
  
  getContacts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

   deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };
  
  render() {
   const filteredContacts = this.getContacts();
     return (
    <Container>
         <GlobalStyle />
         <h1>Phonebook</h1>
         <ContactForm addContact={this.addContact}/>
             
         <h2>Contacts</h2>
         <Filter onChange={this.handleChange} />
         <ContactList contacts={filteredContacts} deleteUser={this.deleteContact} />
         
    </Container>
  );
  }
}

export default App;
