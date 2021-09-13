const defaultState = { tokens: null };

export default function auth(state: any = defaultState, action: any = {}) {
    switch (action.type) {
        case "LOGGED_IN":
            return {
                ...state,
                tokens: "Dummy-token-1234"
            };
        case "LOGGED_OUT":
            return defaultState;
        default:
            return state;
    }
}