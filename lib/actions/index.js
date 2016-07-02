import { ActionTypes } from "../constants";

export const downloadPDF = () => {
    return {
        type: ActionTypes.DOWNLOAD_PDF,
    };
};

export const showDownloadPopup = () => {
    return {
        type: ActionTypes.SHOW_DOWNLOAD_POPUP,
    };
};

export const hideDownloadPopup = () => {
    return {
        type: ActionTypes.HIDE_DOWNLOAD_POPUP,
    };
};
