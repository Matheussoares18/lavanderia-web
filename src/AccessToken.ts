export let accessToken = ''

export const setAccessToken = (data: string) => {
	accessToken = data
}

export const getAccessToken = () => {
	return accessToken
}
