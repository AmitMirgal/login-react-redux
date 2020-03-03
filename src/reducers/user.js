export const user = (state = {}, action) => {

    switch (action.type) {
        case 'USER':
            return {
                userId: action.id,
                userName: action.userName
            }
        default:
            return state;
    }
}