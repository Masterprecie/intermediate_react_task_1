import slack from '../assets/slackIcon.svg'
import github from '../assets/githubIcon.svg'

const Social = () => {
	return (
		<div className='socialIcon'>
			<div>
				<a href="#">
					<img src={slack} alt="slack" />
				</a>
			</div>

			<div>
				<a href="#">
					<img src={github} alt="github" />
				</a>
			</div>
		</div>
	)
}

export default Social