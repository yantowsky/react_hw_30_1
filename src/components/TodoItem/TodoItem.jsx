import React from 'react';
import { useDispatch } from 'react-redux';
import { checkedItemTodoList } from '../../features/itemsTodoList/itemsTodoListSlice';
import { delItemTodoList } from '../../features/itemsTodoList/itemsTodoListSlice';
import { FaTrashAlt } from "react-icons/fa";
import './TodoItem.css';

const TodoItem = ({ id, checked, text }) => {
    const dispatch = useDispatch();

    return (
        <li className={!checked ? 'todo-list__item' : 'todo-list__item todo-list__item--checked'}>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => dispatch(checkedItemTodoList({ id }))}
            />
            <label>
                {text}
            </label>
            <FaTrashAlt
                role='button'
                title='Delete Task'
                onClick={() => dispatch(delItemTodoList({ id }))}
            />
        </li>
    );
}

export default TodoItem;