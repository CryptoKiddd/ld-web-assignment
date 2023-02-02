import rocketIcon from '../../Assets/Icons/Rocket.png'
import camerIcon from '../../Assets/Icons/conference.png'
import calendar from '../../Assets/Icons/logos_google-calendar.png'
import slack from '../../Assets/Icons/logos_slack-icon.png'
import more from '../../Assets/Icons/more.png'

import Button from '../../atoms/Button'


import './ObjectivesPageHeader.css'

const ObjectivesPageHeader = () => {
  return (
    <div className="objectivesPageHeader">
    <div className="oHeader-left">
      <h1>Objectives</h1>
      <img src={camerIcon} alt="" />
    </div>
    <div className="oHeader-right">
      <p>Iteration Type: Round  <img src={more} alt="" />  </p>
      <img src={slack} alt="" />
      <img src={calendar} alt="" />
      <Button title='upgrade' img={rocketIcon} backgroundColor='#29C293' borderRadius='6px' color='white' fsize='15px' heigth='32px' width='130px'/>
    </div>
  </div>
  )
}

export default ObjectivesPageHeader