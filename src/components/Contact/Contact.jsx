import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import {
  ContactListItem,
  ContactListItemNumber,
  ContactListItemName,
  ContactListItemButton,
} from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const { name, number, id } = contact;
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <ContactListItem>
      <ContactListItemName>{name}</ContactListItemName>
      <ContactListItemNumber>{number}</ContactListItemNumber>
      <ContactListItemButton onClick={handleDelete}>
        Delete
      </ContactListItemButton>
    </ContactListItem>
  );
};
