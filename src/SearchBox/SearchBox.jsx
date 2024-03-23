
import css from "./SearchBox.module.css";

const SearchBox = ({onChangeFilter, filter}) => {
    
    
  return (
    <div>
        <h3>Find contacts by name</h3>
        <input type="text" value={filter} onChange={onChangeFilter}></input>
    </div>
  )
}

export default SearchBox