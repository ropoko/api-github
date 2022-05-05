import axios from 'axios';

async function Api(resource: string, username: string): Promise<any> {
	await axios({
		baseURL: 'https://api.github.com/',
		method: 'get',
		url: `${resource.replace('.', username)}`
	}).then(res => {
		const { data } = res;
		console.log(data);
	});
}

export default Api;
