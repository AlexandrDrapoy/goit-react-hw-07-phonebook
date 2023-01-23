import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
// const filterContacts = e => setFilter(e.target.value.toLowerCase());

// const onSubmitForm = ({ name, number }) => {
//   if (contacts.find(el => el.name === name)) {
//     alert(`${name} is alredy in contacts`);
//     return;
//   }
//   setContacts(state => [
//     ...state,
//     { id: nanoid(), name: name, number: number },
//   ]);
// };

// useEffect(() => {
//   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
//   console.log(parsedContacts);
//   if (parsedContacts) {
//     setContacts(parsedContacts);
//   }
// }, []);
// useEffect(() => {
//   if (isFirstRender.current) {
//     isFirstRender.current = false;
//     return;
//   }
//   contacts.length >= 0 &&
//     localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);

// const deleteContact = contactId => {
//   setContacts(state => state.filter(contact => contact.id !== contactId));
// };
