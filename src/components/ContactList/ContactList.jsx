import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/operations';
import { getIsLoading, getError, getFilteredContacts } from 'redux/selectors';
import { List, Item, ItemName, ItemNumber, Btn } from './ContactList.styled';

export const ContactList = () => {
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const filteredContacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const onDeleteContact = id => {
        dispatch(deleteContact(id));
    };

    return (
        <div>
            {isLoading && <p>Contacts is loading...</p>}
            {error && <p>{error}</p>}
            <List>
            {filteredContacts.map(({ id, name, phone }) => (
                <Item key={id}>
                    <ItemName>
                        {name}<ItemNumber>{phone}</ItemNumber>
                    </ItemName>
                    <Btn onClick={() => onDeleteContact(id)}>Delete</Btn>
                </Item>
            ))}
            </List>
        </div>
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