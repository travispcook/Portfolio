import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!this.refHook.value.trim()) {
            return
          }
          dispatch(addTodo(this.refHook.value))
          this.refHook.value = ''
        }}>
        <Input inputName="add-todo" refHook={input => this.refHook = input} type="text" />
        <Button type="submit" content="Add Todo"/>
      </form>
    </div>
  );
}

export default connect()(AddTodo)
