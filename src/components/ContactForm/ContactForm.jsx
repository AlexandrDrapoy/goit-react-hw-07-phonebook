import { FormButtonSubmit, FormLabel, FormWrapper } from './ContactForm.styled';
// import PropTypes from 'prop-types';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  console.log(contacts);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    if (contacts.find(el => el.name === name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }
    dispatch(addContact(name, form.elements.number.value));
    form.reset();
  };

  return (
    <FormWrapper action="submit" onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // value={name}
          // onChange={handleChange}
        />
      </FormLabel>
      <FormLabel htmlFor="number">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // value={number}
          // onChange={handleChange}
        />
      </FormLabel>
      <FormButtonSubmit type="submit">Add Contact</FormButtonSubmit>
    </FormWrapper>
  );
};

// ContactForm.propTypes = {
//   handleSubmit: PropTypes.func,
// };
