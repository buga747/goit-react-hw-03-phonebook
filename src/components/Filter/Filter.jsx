import PropTypes from 'prop-types';

import { Input } from "./Filter.styled";

function Filter({ onChange }) {
  return (
     <Input 
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Search"
           onChange={onChange}
         />

  );
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default Filter;