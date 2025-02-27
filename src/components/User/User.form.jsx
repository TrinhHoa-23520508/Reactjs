import { Input } from "antd";
import { Button } from "antd";
import axios from "axios";
import { useState } from "react";
const UserForm = () =>{
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const handleClickBtn = () =>{
        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = {
              fullName: fullName,
              email: email,
              password: password,
              phone: phone
        }
        axios.post(URL_BACKEND, data);
    }
    return (
        <div style={{margin: "10px 0"}}>
            <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
                <div>
                    <span>Full name</span>
                    <Input
                     value = {fullName}
                     onChange={(e)=>{setFullName(e.target.value)}}/>
                </div>
                <div>
                    <span>Email</span>
                    <Input
                    value = {email}
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                     value = {password}
                     onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                     value = {phone}
                     onChange={(e)=>{setPhone(e.target.value)}}/>
                </div>
                <div>
                <Button
                   type="primary"
                   onClick = {handleClickBtn} >Create User</Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm;