import React from 'react';
import { useSelector } from 'react-redux';
import './TotalTodos.css';

const TotalTodos = () => {
    const itemsTodoList = useSelector(state => state.itemsTodoList.itemsTodoList);

    return (
        <p className="total-todos">
            {
                !itemsTodoList.length ? 'No ' : `Total: ${itemsTodoList.length} `
            }
            {
                itemsTodoList.length == 0 || itemsTodoList.length > 1 ? 'tasks' : 'task'
            }
        </p>
    )
}

export default TotalTodos;