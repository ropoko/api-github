import React, { useState } from 'react';

export const UserContext = React.createContext({
	username: '',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setUsername: (user: string) => {} 
});

export const UserContextProvider = (props: any) => {
	const [username, setUsername] = useState('');
	return (
		<UserContext.Provider value = {{ username, setUsername }}>
			{props.children}
		</UserContext.Provider>
	);
};
