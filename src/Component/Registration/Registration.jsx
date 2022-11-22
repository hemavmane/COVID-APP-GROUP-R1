import React, { useState } from "react";
import '../Registration/Registration.css'

const Registration = () => {
    const [userReg, setuserReg] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })
    const [records, setRecords] = useState([])

    const handleInput = (e) => {
        const Name = e.target.name;
        const val = e.target.value;
        setuserReg({ ...userReg, [Name]: val })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = { ...userReg }
        console.log(newUser);
        setRecords([...records, newUser])
        setuserReg({ username: "", email: "", phone: "", password: "" })

    }
    const regAlert = () => {
        setTimeout(() => {
            alert("registration successfully!")
        }, 1000)
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <p className="head">Register for Vaccination</p>
                <div>
                    <label htmlFor="username">Fullname</label>
                    <input type="text" autoComplete="off" value={userReg.username} onChange={handleInput} name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="text" autoComplete="off" value={userReg.email} onChange={handleInput} name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" autoComplete="off" value={userReg.phone} onChange={handleInput} name="phone" id="phone" />
                </div>
                <div>
                    <label htmlFor="pass">Password</label>
                    <input type="password" autoComplete="off" onChange={handleInput} name="pass" id="pass" />
                </div>
                <button className="regbtn" type="submit" onClick={regAlert}>Registration</button>
            </form>

            <div>
                {
                    records.map((curElm) => {
                        const { username, email, phone } = curElm;
                        return (
                            <>
                                <div className="displayData">
                                    <p>FullName: {username}</p>
                                    <p>Email: {email}</p>
                                    <p>phone: {phone}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )

}
export default Registration;