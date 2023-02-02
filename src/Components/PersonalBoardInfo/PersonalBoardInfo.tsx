import "./PersonalBoardInfo.css";
import Settings from "../../Assets/Icons/settings2.png";
import personImg from '../../Assets/Images/person1.png'
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import Header from "../../atoms/Header/Header";

const PersonalBoardInfo = () => {
  return (
    <div className="PersonalBoardInfo">
     
     
      <div className="personal-info-right">
        <h3>Info</h3>
        <div className="avatar">
          <span>Avatar</span>
          <img src={personImg} alt="" />
        </div>
        <form className="info-form">
          <div className="info-input-wrapper">
            
          <div className="info-input">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" />

          </div>
          <div className="info-input">
          <label htmlFor="username">Username</label>
          <input type="text" id="username"/>
          </div>
          <div className="info-input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          </div>
        <h4>PREFERENCES</h4>


        <h5>Language</h5>

        <select defaultValue='Italian'>
          <option value="Italian">Italian</option>
          <option value="Georgian">Georgian</option>
          <option value="American">American</option>
        </select>
          </div>
          <div className="buttons-wrapper">
            <Button title="SAVE" color="white" backgroundColor=" #4C84FF" fsize='14px' borderRadius="6px" width="96px"
            heigth="32px" />
            <Button title="Cancel" color="white" backgroundColor="tomato" fsize='14px' borderRadius="6px" width="96px"
            heigth="32px" />
         

          </div>

        </form>
      </div>
    </div>
  );
};

export default PersonalBoardInfo;
