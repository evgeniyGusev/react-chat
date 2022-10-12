import './MessagesList.css';

export default function MessagesList({ messages }) {
	const getMessageClass = message => {
		if (message.inbox) {
			return 'message _sent';
		} else {
			return 'message'
		}
	}

	return (
		<ul className="messages">
			{
				messages.map((message, i) => (
					<li key={i} className={ getMessageClass(message) }
					>
						{message.value}
						<span className="time">
	            {message.time}
	          </span>
					</li>
				))
			}
		</ul>
	)
}
