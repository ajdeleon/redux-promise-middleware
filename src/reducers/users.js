import {
    FETCH_USERS 
} from '../actions/types'
// this will have payload of array of objects (users)

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_USERS:
            return [...state, ...action.payload.data]
    }

    return state //default is just retrun state
}