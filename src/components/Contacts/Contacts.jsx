import PropTypes from 'prop-types';
import style from './Contacts.module.css'

export const Contacts = ({ contacts, filter, onClick }) => {
  
  return (
    <ul className={style.contacts_list}>
      {contacts
        .filter(i => i.name.includes(filter))
        .map(item => {
          const { name, id, number } = item;
          return (
            <li key={id} className={style.contacts_item}>
              <p className={style.contacts_info}>
                {name} : {number}
              </p>
              <button className={style.contacts_btn} type="button" onClick={onClick} value={id}>Delete</button>
            </li>
          );
        })}
    </ul>
  );
};


Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string
    })),
    filter: PropTypes.string,
    onClick: PropTypes.func
}