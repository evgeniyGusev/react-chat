import { useState, useEffect } from "react";
import { contactsMapper } from "../../helpers/contactsMapper.js";

export const useFetchContacts = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [contacts, setContacts] = useState([]);

	const fetchContacts = () => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => setContacts(contactsMapper(data)))
			.catch(e => console.error(e))
			.finally(() => setIsLoading(false));
	}

	useEffect(() => {
		fetchContacts();
	}, []);

	return [contacts, isLoading, fetchContacts];
};
