import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
        const [contacts, setContacts] = useState([]);

        useEffect(() => {
                async function fetcher() {
                        const response = await fetch('http://localhost:3001/contacts');
                        const contacts = await response.json();

                        setContacts(contacts);
                }

                fetcher();
        }, []);

  return (
    <div>
            <ul>
      {
              contacts.map(contact => (
                      <li key={contact.id}>
                              <p>Name: {contact.name} </p>
                              <span>Phone: {contact.phone} </span>
                      </li>
              ))
      }
      </ul>
    </div>
  );
}

export default App;
