
import css from './Filter.module.css'
const Filter = ({ handleFilter ,filter}) => {
  
    
    return (
        <div className={css.labelDiv}>
            <label className={css.label}>
                Find contacts by name
            </label>
            <input className={css.input}
                 
                 type='text'
                 value={filter}
                 onChange={handleFilter}
              
                 name="filterQuery"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 placeholder="Search contacts..."
            />
        </div>
    )
};

export default Filter;