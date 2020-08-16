import React, { useState, createContext } from 'react';
import { UserContext, UserProvider } from './UserProvider';

interface IProviderProps {
	children: any;
}

interface IState {
	color: string;
}

interface IContextProps {
	state: IState;
	dispatch: ({ type }: { type: string }) => void;
}

const defaultState: IState = { color: '#38628C' };
export const AppContext = createContext(defaultState as IState);

export const AppProvider = ({ children }: IProviderProps) => {
	const [state, setState] = useState({ ...defaultState });

	return (
		<AppContext.Provider value={state}>
			<UserProvider>{children}</UserProvider>
		</AppContext.Provider>
	);
};
