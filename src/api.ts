import axios from 'axios';

async function Api(resource: string, username: string): Promise<any> {
	const response = await axios({
		baseURL: 'https://api.github.com/',
		method: 'get',
		url: `${resource.replace('.', username)}`
	}).then(r => {
		const { data } = r;
		return data;
	});

	return response;
}

export default Api;
