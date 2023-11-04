import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Title, Article } from './App.styled.';

export const App = () => {
  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />

      <Article>Contacts</Article>
      <Filter />
        
      <ContactList />
    </div>
  );
};  