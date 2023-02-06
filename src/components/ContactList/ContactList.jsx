import PropTypes from "prop-types";
import { ContactListItem } from "components/ContactListItem/ContactListItem"

export const ContactList = ({ contacts, removeContact }) => {
    const items = contacts.map(({ id, name, number }) => <ContactListItem key={id} id={id} name={name} number={number} removeContact={removeContact} />)

    return (
        <ul>
            {items}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired 
    })) ,
    removeContact: PropTypes.func.isRequired 
}