import { Component } from 'react';

import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filters';
// import { number } from 'prop-types';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };
  onSubmitForm = ({ name, number }) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: nanoid(),
          name: name.value,
          number: number.value,
        },
      ],
    });
  };

  listToRender = () => {
    console.log(this.state.contacts);
    if (!this.state.filter) {
      return this.state.contacts;
    }
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  renderContacts = () => {
    const contactsList = this.listToRender();

    return (
      <>
        <ul>
          {contactsList.map(({ id, name, number }) => (
            <li key={id}>
              <span>{name}</span>
              <span>{number}</span>
            </li>
          ))}
        </ul>
      </>
    );
  };

  render() {
    const { filter } = this.state;
    // console.log(<ContactForm />);
    return (
      <div>
        {/* // <h1>Phonebook</h1>
  //<ContactForm ... /> 

  // <h2>Contacts</h2>
  // <Filter ... />
  // <ContactList ... />  */}
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitForm} />
        <div>
          <h2>Contacts</h2>
          <Filter />

          {this.renderContacts()}
        </div>
      </div>
    );
  }
}
