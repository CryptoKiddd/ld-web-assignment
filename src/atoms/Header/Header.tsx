import  './Header.css'
import BellIcon from '../../Assets/Icons/Bell.png'


interface HeaderProps{
  title:string
}
const Header = ({title}:HeaderProps) => {
  return (
    <div className='header' >
      <h1>{title}</h1>
      <div className='header-icons' >
        <img src={BellIcon} alt="" />
        <button className='header-plus-icon' > + </button>
      </div>

    </div>
  )
}

export default Header