import PropTypes from 'prop-types'
import React, { Component } from "react";
import {Button, Form, Input} from './ContactForm.styled'
import Notiflix from 'notiflix';

export class ContactForm extends Component {

  state = {
    name: '',
    number: '',

  }

    handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })

  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name.trim() && !this.state.number.trim()) {
      Notiflix.Notify.failure('Empty input!')
      return
    }

    this.props.onSubmit(this.state);
  }

  render() {
  return (
      <Form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label htmlFor="tel">Number</label>
          <Input
            id="tel"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
          <Button type="submit">Add contact</Button>
          </div>
          </Form>
           );
  }
  
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
 