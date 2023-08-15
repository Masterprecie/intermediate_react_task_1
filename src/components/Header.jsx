import '../App.css'
import profile from '../assets/profileImg.png'
import icon1 from '../assets/shareIcon.png'
import icon2 from '../assets/shareButton.png'

const Header = () => {
	return (
		<>
			<div className='icon1'>
				<a href="#">
					<img src={icon1} alt="icon1" />
				</a>
			</div>


			<div className='icon2'>
				<a href="#">
					<img src={icon2} alt="icon2" />
				</a>
			</div>


			<div>
				<div className='profileImg'>
					<img src={profile} alt="profile" />
				</div>

				<p className='profileName'>John Doe</p>
			</div>
		</>
	)
}

export default Header