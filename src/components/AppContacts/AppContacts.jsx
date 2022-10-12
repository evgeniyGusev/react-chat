import './AppContacts.css';
import ContactsLoadError from "../ContactsLoadError/ContactsLoadError.jsx";

export default function AppContacts({
  isLoadError, contacts, checkedContactName, onSetContact, onReload
}) {

	const getContactClassList = contact => {
		return `contacts-item${contact.isOnline ? ' _online' : ''}${contact.name === checkedContactName ? ' _checked' : ''}`
	}

	if (isLoadError) {
		return (
			<ContactsLoadError reloadContacts={ onReload } />
		)
	} else {
		return (
			<div className="app-contacts">
				<h3 className="title">
					Контакты
				</h3>

				<ul className="contacts-list">
					{
						contacts.map((contact) => (
							<li key={ contact.id } className={ getContactClassList(contact) } onClick={ () =>  onSetContact(contact) }>
								<img src={ contact.avatar } alt={ contact.name } className="avatar" />
								<div className="contact-data">
									<div className="name">
										{ contact.name }
									</div>
									<div className="last-message">
										{ contact.messages.length ? contact.messages.at(-1).value : 'Нет сообщений' }
									</div>
								</div>
							</li>
						))
					}
				</ul>
			</div>
		)
	}
}
