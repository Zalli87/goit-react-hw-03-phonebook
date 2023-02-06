import PropTypes from "prop-types";

export const Filter = ({ handlChange }) => {
   
    return (
        <label>Find contacts by name
         <div> <input
  onChange={handlChange}   
  type="text"
  name="filter"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
              </div>
            </label>
    )
}

Filter.propTypes = {
    handlChange: PropTypes.func
}