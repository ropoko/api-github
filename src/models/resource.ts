export const resources = {
	user: 'users/.',
	repositories: 'users/./repos',
	favorites: 'users/./starred'
};

export const getResource = (resource: keyof typeof resources) => resources[resource];
