import PropTypes from 'prop-types';
import { List, ListWrapper, } from "./ContactList.styled";
import Contact from 'components/Contact';

const ContactList = ({ contacts, deleteUser}) => {
    return (
        <ListWrapper>
        <List>
            {contacts.map(({ id, name, number }) =>
                <li key={id} >
                    <Contact id={id} name={name} number={number} deleteUser={deleteUser} />
                </li>
           )}
            </List>
            </ListWrapper>
)
}

ContactList.propTypes = {
    deleteUser: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
}


export default ContactList;