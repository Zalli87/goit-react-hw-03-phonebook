import PropTypes from "prop-types";

export const Filter = ({ handlChange, filter }) => {
   
    return (
        <label>Find contacts by name
         <div> <input
  onChange={handlChange}   
  type="text"
  name="filter"
  value={filter}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
              </div>
            </label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handlChange: PropTypes.func.isRequired
}