import { configureStore } from '@reduxjs/toolkit';
import itemsTodoListReducer from '../features/itemsTodoList/itemsTodoListSlice';
import baseCounterReducer from '../features/baseCounter/baseCounterSlice';
import getInfoSwapiReducer from '../features/getInfoSwapi/getInfoSwapiSlice';


export default configureStore({
    reducer: {
        itemsTodoList: itemsTodoListReducer,
        counter: baseCounterReducer,
        swapi: getInfoSwapiReducer,
    },
});