
import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import storage from "helpers/storage";
import storageKeys from "data/storageKeys";
import Notiflix from 'notiflix';
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid'

export class App extends Component {

  state = {
  contacts: [],
  filter: '',
  }

  componentDidMount() {
    if (localStorage.getItem(storageKeys.CONTACTS)) {
      this.setState({contacts: storage.load(storageKeys.CONTACTS)})
    }
  }

  componentDidUpdate(_, prevState) {
    const {contacts} = this.state
    if (prevState.contacts !== contacts) {
      storage.save(storageKeys.CONTACTS, this.state.contacts)
    }

    if (prevState.contacts.length > contacts.length) Notiflix.Notify.failure('Contact deleted successfully')
    if (prevState.contacts.length < contacts.length) Notiflix.Notify.success('Contact added successfully');
  }

  handleFormSubmit = ({ name, number }) => {  

  if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
    Notiflix.Notify.info(`${name} is already in contcts`)
    return
  };

  const newContact = {
    name: name,
    number: number,
    id: nanoid()
  };

  this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact],
  }));
  };

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value })
  }

  getFilteredContacts = () => {
    const { filter, contacts } = this.state 
    
    const normilizedFilterValue = filter.toLowerCase();
    return contacts.filter(
      contact => contact.name.toLowerCase().includes(normilizedFilterValue)
    );
  }
  
  onDeleteBtn = (id) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(contact => contact.id !== id)],
    }))
  }

render() {
  return (
    <>
      <div>
        <h2>Phonebook</h2>
      
        <ContactForm onSubmit={this.handleFormSubmit}/>
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        <ContactList contacts={this.getFilteredContacts()} onDeleteBtn={this.onDeleteBtn} />

      </div>
    </>
  );
}
}
