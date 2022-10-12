import { useState } from 'react';
import { useFetchContacts } from "../../services/mainApi/index.js";
import './App.css'
import AppContacts from '../AppContacts/AppContacts.jsx';
import AppChat from '../AppChat/AppChat.jsx';

export default function App() {
  const [checkedContact, setCheckedContact] = useState(null);
  const [contacts, isLoading, fetchContacts] = useFetchContacts();

  const setContact = contact => {
    setCheckedContact(contact);
  }

  return isLoading ? (
    <div className="app">
      Загрузка...
    </div>
  ) : (
    <div className="app">
      <AppContacts
        isLoadError={ !contacts.length }
        contacts={ contacts }
        checkedContactName={ checkedContact ? checkedContact.name : '' }
        onSetContact={ setContact }
        onReload={ fetchContacts }
      />

      <AppChat checkedContact={ checkedContact } />
    </div>
  )
}
