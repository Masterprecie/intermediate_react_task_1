import '../App.css'
import kodecamp from '../assets/kodecampLogo.png'
import kodehauz from '../assets/kodehauzLogo.png'


const Footer = () => {
  return (

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

  )
}

export default Footer