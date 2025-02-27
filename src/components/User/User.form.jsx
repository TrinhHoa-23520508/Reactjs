import { Input } from "antd";
import { Button } from "antd";
import { useState } from "react";
const UserForm = () =>{
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNUmber] = useState("");
    const handleClickBtn = () =>{
        console.log(">>Check state: ", {fullName, email, password, phoneNumber});
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
                     value = {phoneNumber}
                     onChange={(e)=>{setPhoneNUmber(e.target.value)}}/>
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