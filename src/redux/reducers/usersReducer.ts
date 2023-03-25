const initialState = {
    users: [
        {
            id: 1,
            name: 'John Smith',
            username: 'john.smith',
            password: 'password123',
            email: 'john.smith@example.com',
            address: {
                street: '123 Main St',
                suite: 'Apt. 4',
                city: 'Anytown',
                state: 'CA',
                zipCode: '12345'
            },
            phone: '555-1234'
        },
        {
            id: 2,
            name: 'Jane Doe',
            username: 'jane.doe',
            password: 'password456',
            email: 'jane.doe@example.com',
            address: {
                street: '456 Oak Ave',
                suite: 'Suite 5',
                city: 'Anytown',
                state: 'CA',
                zipCode: '12345'
            },
            phone: '555-5678'
        }
    ]
};

const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        // Добавление нового пользователя
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        // Удаление пользователя по ID
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };
        // Обновление информации о пользователе
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
            };
        default:
            return state;
    }
};

export default usersReducer;
