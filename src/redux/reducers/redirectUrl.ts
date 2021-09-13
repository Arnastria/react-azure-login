import storage from "redux-persist/lib/storage";

const defaultState = { url: '/' };

export default function redirectUrl(state: any = defaultState, action: any = {}) {
    switch (action.type) {
        case "SET_URL":
            return {
                ...state,
                url: action.url,
            };
        case "RESET_URL":
            return defaultState;
        default:
            return state;
    }
}