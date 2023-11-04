import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice';
import { getContacts } from 'redux/selectors';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };

    const isContact = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContact) {
      return alert(`${contact.name}: is already exists`);
    }

    dispatch(addContact(contact));
    e.target.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Please, enter name"
        />
        
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Please, enter number"
        />
                
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
};