import storage from "redux-persist/lib/storage";

const defaultState = { tokens: null, profile: null };

export default function auth(state: any = defaultState, action: any = {}) {
    switch (action.type) {
        case "LOGGED_IN":
            return {
                ...state,
                tokens: action.token,
                profile: action.profile,
            };
        case "LOGGED_OUT":
            storage.removeItem("persist:root");
            return defaultState;
        default:
            return state;
    }
}