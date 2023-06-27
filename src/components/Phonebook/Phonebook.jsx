import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import style from './Phonebook.module.css';

export const Phonebook = ({onSubmit}) => {

  return (
    <div>
      <form onSubmit={onSubmit} className={style.form}>
        <label htmlFor={nanoid()} className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder='Roboute Guliman'
            required
          />
        </label>
        <label htmlFor={nanoid()} className={style.label}>
          Number
          <input
            className={style.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={style.btn} type="submit">Add contact</button>
      </form>
    </div>
  );
};

Phonebook.propTypes = {
  onSubmit: PropTypes.func
}