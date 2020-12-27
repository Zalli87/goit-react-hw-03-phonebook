import PropTypes from 'prop-types';
import s from './ContactItem.module.css'

function ContactItem({ id, name, number, onDeleteContact }) {
    return (
        <li key={id} className={s.contactItem}><p className={s.concatcText}>{name}: {number}</p>
        <button  onClick={()=>{onDeleteContact(id)}}>Delete</button>
        </li>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ContactItem;