import React, { useState } from 'react'
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';

const UserCard = (props) => {

    const [isActive, setActive] = useState('false');

    const handleClick = () => {
        setActive(!isActive);
    }

    const buttonStyle = {
        backgroundColor: "rgb(192, 192, 192)",
        color: "dimgray",
        border: "none",
        cursor: "pointer"
    }

    if (isActive) {
        return (
            <Rotate>
            <li className="userInfo">
                <div className="basicUserInfo">
                    <img src={props.user.picture.large}></img>
                    <h2 className="userNameButton" style={{color: "white"}}>{props.user.name.first}<br></br>{props.user.name.last}</h2>
                </div>
                <button className="userNameButton" style={buttonStyle} onClick={handleClick}>Show Details</button>
            </li>
            </Rotate>
        )
    } else {
        return (
                <Flip left>
            <li className="userInfoExtended">
                <div className="basicUserInfo_extend">
                    {/* <img src={props.user.picture.medium}></img> */}
                    <h2 style={{color: "white"}}>{props.user.name.first} {props.user.name.last}</h2>
                </div>
                <div className="extendedUserInfo">
                    <h4>Contact Info</h4>
                    <ul style={{ listStyle: "none", padding: 0}}>
                        <li><p>Email: {props.user.email}</p></li>
                        <li><p>Phone: {props.user.phone}</p></li>
                        <li><p>Cell: {props.user.cell}</p></li>
                        <li><br></br></li>
                        <li>
                            <p>{props.user.location.street.number} {props.user.location.street.name}<br></br>{props.user.location.city} {props.user.locationstate} {props.user.location.postcode} {props.user.location.country}</p>
                        </li>
                    </ul>
                </div>
                <button style={buttonStyle} onClick={handleClick}>Hide Details</button>
            </li>
                </Flip>
        )}
}

export default UserCard


