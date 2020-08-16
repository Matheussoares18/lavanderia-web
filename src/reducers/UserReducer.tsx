import IUserAccount, { UserAction, UserState } from '../models/IUserAccount';

const initialState: UserState = {
	currentUser: undefined,
};

export default function UserReducer(state = initialState, action: UserAction) {
	switch (action.type) {
		case 'UPDATE_USER':
			return { ...state, currentUser: action.user };

		case 'REMOVE_USER':
			return { ...state, currentUser: undefined };

		case 'UPDATE_BANK_ACCOUNT':
			return {
				...state,
				currentUser: {
					...state.currentUser,
					bankAAccountId: action.bankAccountId,
				},
			};

		default:
			return state;
	}
}
