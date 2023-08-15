import '../App.css'
import data from '../utils/data'
import Lists from './Lists'


const Links = () => {
	return (

		<ul>
			{data.map((data) => (
				<Lists key={data.id} {...data} />
			))}

		</ul>

	)
}

export default Links