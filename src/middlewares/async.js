export default function({ dispatch }) {
    return next => action => {
        // If action does not have payload
        // or the payload does not have .then property (promise)
        // pass on action as is
        if (!action.payload || !action.payload.then) {
            return next(action)
        }

        // Ensure action's promise resolves
        action.payload
            .then(function(response) {
                // create new action, maintain action type
                // replace payload promise (.then) with response
                const newAction = { ...action, payload: response }
                dispatch(newAction)
            })
    }
}