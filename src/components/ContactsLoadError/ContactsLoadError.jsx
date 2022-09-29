import './ContactsLoadError.css';

export default function ContactsLoadError({ reloadContacts }) {
	return (
		<div>
			Ошибка загрузки контактов

			<button className="reload-contacts" onClick={ reloadContacts }>
				повторить
			</button>
		</div>
	)
}
