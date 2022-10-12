import './AppChat.css';
import MessagesList from "../MessagesList/MessagesList";

export default function AppChat({ checkedContact = null }) {
	const getIsListVisible = checkedContact?.messages?.length
	const getEmptyMessage = checkedContact && (!checkedContact.messages || !checkedContact.messages.length)
		? 'Отправьте первое сообщение'
		: '⇽ Выберите, кому хотите написать';

	const getContactStatus = () => checkedContact.isOnline ? 'Онлайн' : 'Был в сети недавно';

	return checkedContact ? (
		<div className="app-chat">
			<section className="head">
				<img src={ checkedContact.avatar } alt={ checkedContact.name } className="avatar" />
				<div className="contact-data">
					<div className="name">
						{ checkedContact.name }
					</div>
					<div className="status">
						{ getContactStatus() }
					</div>
				</div>
			</section>

			<section className="body">
				{
					!getIsListVisible ? (
						<div className="not-checked">
							{ getEmptyMessage }
						</div>
					) : (
						<MessagesList messages={ checkedContact.messages }/>
					)
				}
			</section>

			<section className="footer">
				<form	className="chat-form">
					<input type="text" placeholder="Введите сообщение" />
					<button className="button">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path
								d="M6.48 6.794l.49 1.963a1 1 0 0 1-1.94.486l-1-4a1 1 0 0 1 1.393-1.15l15 7a1 1 0 0 1 0 1.813l-15 7a1 1 0 0 1-1.385-1.18l2-7A1 1 0 0 1 7 11h4a1 1 0 0 1 0 2H7.754l-1.19 4.167L17.635 12 6.48 6.794z"
								fill="#000" fillRule="nonzero"/>
						</svg>
					</button>
				</form>
			</section>
		</div>
	) : (
		<div className="not-checked">
			{ getEmptyMessage }
		</div>
	)
}
