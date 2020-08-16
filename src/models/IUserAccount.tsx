import { TypeInfo } from 'graphql';

export default interface IUserAccount {
	id: number;
	name: string;
	email?: string | undefined;
	cpf?: string;
	RG?: string;
	password?: string;
	type: string;
	ratting?: number | null;
	bankAccountId?: string | null;
	cardId?: string | null;

	ProfileAddress?: {
		id: number;
		state: string;
		city: string;
		street: string;
		neighborhood: string;
		number: string;
		CEP: string;
		complement: string;
		references: string;
	} | null;

	ProfileContacts?: {
		id: number;
		phone: string;
	} | null;
}

export interface UserState {
	currentUser?: IUserAccount;
}

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_BANK_ACCOUNT = 'UPDATE_BANK_ACCOUNT';
export const REMOVE_USER = 'REMOVE_USER';

export interface IUpdateUserAction {
	type: typeof UPDATE_USER;
	user: IUserAccount;
}
export interface IUpdateBankAccountAction {
	type: typeof UPDATE_BANK_ACCOUNT;
	bankAccountId: string;
}
export interface IRemoveUserAction {
	type: typeof REMOVE_USER;
}

export type UserAction =
	| IUpdateUserAction
	| IRemoveUserAction
	| IUpdateBankAccountAction;
