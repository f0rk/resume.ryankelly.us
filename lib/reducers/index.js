import { combineReducers } from "redux";

import { ActionTypes } from "../constants";

const popups = (state={}, action) => {
    switch (action.type) {
        case ActionTypes.SHOW_DOWNLOAD_POPUP:
            return {
                ...state,
                isDownloadPopupVisible: true,
            };
        case ActionTypes.HIDE_DOWNLOAD_POPUP:
            return {
                ...state,
                isDownloadPopupVisible: false,
            };
        default:
            return state;
    };
};

const rootReducer = combineReducers({popups});

export default rootReducer;
