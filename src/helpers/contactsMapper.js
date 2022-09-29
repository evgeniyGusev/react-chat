import mockMessages from '../mock/mockMessages';

export const contactsMapper = contacts => {
	return contacts
		.map(({ id, name, username }) => ({
			id,
			name,
			username,
			avatar: 'https://placekitten.com/g/35/35',
			isOnline: Math.random() >= 0.5,
			messages: new Array((Math.floor(Math.random() * 7)))
				.fill(undefined)
				.map(() => ({
					inbox: Math.random() >= 0.3,
					time: 'Вчера',
					value: mockMessages[Math.floor(Math.random() * mockMessages.length)],
				})),
		}));
}
