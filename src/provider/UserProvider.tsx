import React, { useState, createContext } from 'react';

interface IProviderProps {
	children: any;
}

interface IUserState {
	id: number;
	name: string;
}

interface IContextProps {
	state: IUserState;
	setState: React.Dispatch<IUserState>;
}

const defaultState: IUserState = { id: -1, name: '' };
export const UserContext = createContext<IContextProps | null>(null);

export const UserProvider = ({ children }: IProviderProps) => {
	const [state, setState] = useState({ ...defaultState });

	return (
		<UserContext.Provider value={{ state, setState }}>
			{children}
		</UserContext.Provider>
	);
};
