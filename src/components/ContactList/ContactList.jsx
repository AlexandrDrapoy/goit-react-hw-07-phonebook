const listToRender = (filter, contacts) => {
  if (!filter) {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

export const ContactList = (contact, filter) => {
  const contactsList = listToRender(filter, contact);

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
