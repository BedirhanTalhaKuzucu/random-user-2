import React from 'react';
import { useEffect, useState } from 'react';
import "./style.css";
import growing_man from "../assets/growing-up-man.svg";
import growing_woman from "../assets/growing-up-woman.svg";
import mail from "../assets/mail.svg";
import man from "../assets/man.svg";
import map from "../assets/map.svg";
import padlock from "../assets/padlock.svg";
import phone from "../assets/phone.svg";
import woman from "../assets/woman.svg";
import UserList from './UserList';


function Card() {
    const [userList, setUserList] = useState([]);
    const [data, setData] = useState("");
    const [displayData, setdisplayData] = useState("");
    const [title, settitle] = useState("");

    useEffect(() => {
        getData();
        settitle("My name is");
        setdisplayData(data ? data[0].name.first + " " + data[0].name.last : "");
    }, [])

    const getData = async () => {
        const response = await fetch(`https://randomuser.me/api/`);
        const resJson = await response.json();
        setData(resJson.results);
        settitle("My name is");
        setdisplayData(resJson.results[0].name.first + " " + resJson.results[0].name.last)
    }

    const newUser = () => {
        setData("");
        setdisplayData("");
        settitle("")
        getData();
    }

    const addUser = () => {
        if (userList.indexOf(data[0]) === -1) {
            setUserList([...userList, data[0]]);
        } else {
            alert("this user already is added in list");
        }
    }

    const deleteButton = (item) => {
        setUserList(
            userList.filter((deletedItem) => {
                return !(userList.indexOf(deletedItem) === item)
            })
        )

    }

    const handleButtonClick = (e) => {

        switch (e.target.id) {
            case "name":
                settitle("My name is");
                setdisplayData(data ? data[0].name.first + " " + data[0].name.last : "");
                break;
            case "mail":
                settitle("My email is");
                setdisplayData(data[0].email);
                break;
            case "age":
                settitle("My age is");
                setdisplayData(data[0].dob.age);
                break;
            case "location":
                settitle("My street is");
                setdisplayData(data[0].location.street.number + " " + data[0].location.street.name);
                break;
            case "phone":
                settitle("My phone is");
                setdisplayData(data[0].phone);
                break;
            case "password":
                settitle("My password is");
                setdisplayData(data[0].login.password);
                break;
            default:
        }
    }


    return (
        <div className='card'>
            <div className='img-div'>
                <img src={data ? data[0].picture.large : ""} alt="" className='user-image' />
            </div>
            <div className='data-div'>
                <div className='display-data'>
                    <h5>{title}</h5>
                    <h2 style={{ marginTop: "-15px" }}>{displayData ? displayData : "loading..."}</h2>
                </div>
                <div className='buttons' onMouseMove={handleButtonClick} >
                    <img src={data ? (data[0].gender === "male" ? man : woman) : man} alt="" className='button-img data-buttons' id='name' />
                    <img src={mail} alt="" className='button-img data-buttons' id='mail' />
                    <img src={data ? (data[0].gender === "male" ? growing_man : growing_woman) : growing_man} alt="" className='button-img data-buttons' id='age' />
                    <img src={map} alt="" className='button-img data-buttons' id='location' />
                    <img src={phone} alt="" className='button-img data-buttons' id='phone' />
                    <img src={padlock} alt="" className='button-img data-buttons' id='password' />
                </div>
                <div className='user-buttons'>
                    <button className='user-new-add' onClick={newUser}>{data === "" ? "LOADİNG" : "NEW USER"} </button>
                    <button className='user-new-add' onClick={addUser}>ADD USER</button>
                </div>
                <div className='userList'>
                    {
                        userList.length > 0 ? <UserList userList={userList} deleteButton={deleteButton} /> : ""

                    }
                </div>
            </div>
        </div>

    )
}

export default Card