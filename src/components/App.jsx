import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

const STORAGE_KEY = 'contacts-data';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  componentDidMount() {
    const localStorageData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(localStorageData);
    if (!parsedData) {
      return
    }
    this.setState({ contacts: parsedData })
  }


  handleAddContacts = e => {
    e.preventDefault();
    
    const contactName = e.target.elements.name.value;
    const contactNumber = e.target.elements.number.value;
    const newContact = {
      name: contactName,
      number: contactNumber,
      id: nanoid(),
    };
    if (this.state.contacts.some(i => i.name === contactName)) {
      alert(`You alraeady have a ${contactName} in contacts`)
      return
    }
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, newContact],
      };
    });

  };
  
  handleDeleteContact = e => {
    const { contacts } = this.state;
    const filteredNewArray = contacts.filter(({ id }) => id !== e.target.value);
    this.setState({contacts: filteredNewArray})
    
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts))
  }

  render() {

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
        <Phonebook props={this.state} onSubmit={this.handleAddContacts} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <Contacts contacts={this.state.contacts} filter={this.state.filter} onClick={this.handleDeleteContact} />
      </div>
    );
  }
}
