import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List, Item, ItemName, ItemNumber, Btn } from './ContactList.styled';
import { deleteContact } from 'redux/slice';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const filteredContacts = contacts?.filter(contact =>
        contact?.name?.toLowerCase().includes(filter.toLowerCase())
    );

    const onDeleteContact = id => {
        dispatch(deleteContact(id));
    };

    return (
        <List>
            {filteredContacts.map(({ name, number, id }) => (
                <Item key={id}>
                    <ItemName>
                        {name}<ItemNumber>{number}</ItemNumber>
                    </ItemName>
                    <Btn onClick={() => onDeleteContact(id)}>Delete</Btn>
                </Item>
            ))}
        </List>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }).isRequired
    ),
};