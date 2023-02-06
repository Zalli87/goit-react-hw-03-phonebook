import PropTypes from "prop-types";

export const ContactListItem = ({id, name, number, removeContact}) => {
    return (<>
    <li key={id}>{name}:{number}<button onClick={() => removeContact(id)} type='button'>delete</button></li>
    </>)
}

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    removeContact: PropTypes.func }