import style from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({onChange}) => {
  return (
    <section className={style.filter_section}>
      <h2>Find contact by name</h2>
          <input className={style.filter_input} type="text" name="filter" onChange={onChange} placeholder='Enter name' />
    </section>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func
}