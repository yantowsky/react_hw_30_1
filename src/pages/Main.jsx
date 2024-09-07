import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import InputValueForm from '../components/InputValueForm/InputValueForm';
import TodoList from '../components/TodoList/TodoList';
import EmptyTodoList from '../components/EmptyTodoList/EmptyTodoList';
import FollowError from '../components/ErrorBoundary/ErrorBoundary';
import { FaPlusSquare } from "react-icons/fa";
import { addItemTodoList } from '../features/itemsTodoList/itemsTodoListSlice';

const Main = () => {
    const itemsTodoList = useSelector(state => state.itemsTodoList.itemsTodoList);
 
    useEffect(() => {
        localStorage.setItem('todo_list', JSON.stringify(itemsTodoList));
    }, [itemsTodoList]);

    return (
        <FollowError>
            <main className='todo'>
                <InputValueForm
                    placeholder='Add Task...'
                    textButton={<FaPlusSquare />}
                    titleButton='Add Task'
                    reducer={addItemTodoList}
                />
                {itemsTodoList.length ? <TodoList /> : <EmptyTodoList />}
            </main>
        </FollowError>
    );
}

export default Main;