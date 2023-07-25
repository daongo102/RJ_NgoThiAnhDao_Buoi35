import { createStore, combineReducers } from "redux";
import { bookingTicketReducer } from "./dat-ve-xem-phim/dat-ve-xem-phim.reducer";

const rootReducer = combineReducers({
    bookingTicketReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);
