import PropTypes from 'prop-types';
import ContactItem from "./ContactItem";
import s from './ConcatcList.module.css';

function ConcatcList ({contacts, onDeleteContact}) {
    return (
        <ul className={s.concatcList}>
            {contacts.map(({ name, id, number }) =>
            (
                <ContactItem name={name} number={number} key={id} id={id} onDeleteContact={onDeleteContact}/>
            ))}
        </ul>
    )
}

ConcatcList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
}

export default ConcatcList;