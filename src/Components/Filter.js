import { connect } from 'react-redux';
import action from '../redux/actions';

const Filter = ({ value, changeFilter }) => {
   return (
      <label className="phonebook__filter">
         Find contacts by name
         <input
            type="text"
            value={value}
            onChange={e => changeFilter(e.currentTarget.value)}
         />
      </label>
   );
};

const mapStateToProps = state => {
   return {
      value: state.filter,
   };
};

const mapDispatchToProps = dispatch => {
   return {
      changeFilter: value => dispatch(action.changeFilter(value)),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
