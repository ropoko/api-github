import axios, { AxiosError } from 'axios';

async function Api(resource: string, username: string): Promise<any> {
	const response = await axios({
		baseURL: 'https://api.github.com/',
		method: 'get',
		url: `${resource.replace('.', username)}`
	}).then(r => {
		const { data } = r;
		return data;
	}).catch((err: AxiosError) => {
		const { status } = err;
		const obj: any = {
			status
		};
		return obj;
	});

	return response;
}

export default Api;
