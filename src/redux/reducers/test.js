import { TEST_TEST } from '../types';

const initialState = {
    test: [],
};

const test = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case TEST_TEST: {
            return {
                ...state,
                test: payload,
            };
        }
        default:
            return state;
    }
};

export default test;
