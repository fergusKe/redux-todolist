import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
  const {
    inputValue,
    list,
    changeInputValue,
    handleClick,
    handleDelete
  } = props;

  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={changeInputValue}
        />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => (
            <li
              key={index}
              onClick={() => handleDelete(index)}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  inputValue: state.inputValue,
  list: state.list
});

const mapDispatchToProps = dispatch => ({
  changeInputValue(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    };
    dispatch(action);
  },
  handleClick() {
    const action = {
      type: 'add_item',
    };
    dispatch(action);
  },
  handleDelete(index) {
    const action = {
      type: 'delete_item',
      index
    };
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
