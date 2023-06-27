import { useEffect, useState } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

const STORAGE_KEY = 'contacts-data';
export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    const contactName = e.target.elements.name.value;
    const contactNumber = e.target.elements.number.value;
    const newContact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };
    if (contacts.some(i => i.name === contactName)) {
      alert(`You alraeady have a ${contactName} in contacts`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const filterValue = e => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = e => {
    const filteredNewArray = contacts.filter(({ id }) => id !== e.target.value);
    setContacts(filteredNewArray);
  };
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h2>Phonebook</h2>
      <Phonebook onSubmit={handleSubmitForm} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={filterValue} />
      <Contacts
        contacts={contacts}
        filter={filter}
        onClick={handleDeleteContact}
      />
    </div>
  );
};
