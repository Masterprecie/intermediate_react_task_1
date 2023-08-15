import '../App.css'
import propTypes from 'prop-types'

const Lists = ({ name, link }) => {
	return (
		<li>
			<a
				href={link}
				target="_blank"
				rel='noreferrer'
			>{name}</a>
		</li>
	)
}

Lists.propTypes = {
	name: propTypes.string,
	link: propTypes.string
}

export default Lists