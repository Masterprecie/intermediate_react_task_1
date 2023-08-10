
import './App.css'
import profile from './assets/profileImg.png'
import icon1 from './assets/shareIcon.png'
import icon2 from './assets/shareButton.png'
import slack from './assets/slackIcon.svg'
import github from './assets/githubIcon.svg'
import kodecamp from './assets/kodecampLogo.png'
import kodehauz from './assets/kodehauzLogo.png'

const App = () => {

	return (
		<>
			<div className='app'>
				<div className='content'>
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

					<div className='box'>
						<a href="#">Twitter Link</a>
					</div>

					<div className='box'>
						<a href="#">KodeCamp Team</a>
					</div>

					<div className='box'>
						<a href="#">KodeCamp Books</a>
					</div>

					<div className='box'>
						<a href="#">Python Books</a>
					</div>

					<div className='box'>
						<a href="#">Background Check for Coders</a>
					</div>

					<div className='box'>
						<a href="#">Design books</a>
					</div>

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
				</div>


				<footer>
					<div className='logo1'>
						<img src={kodecamp} alt="kodecamp" />
					</div>

					<div>
						<p className='footerText'>KodeCamp Internship Task</p>
					</div>

					<div className='logo2'>
						<img src={kodehauz} alt="kodehauz" />
					</div>

				</footer>

			</div >

		</>
	)
}

export default App
