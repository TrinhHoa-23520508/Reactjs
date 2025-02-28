import { Input, message } from "antd";
import { Button } from "antd";
import { useState } from "react";
import { createUserApi } from "../../services/api.service";
import { notification } from "antd";
const UserForm = () =>{
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const handleClickBtn = async () =>{
       const res = await createUserApi(fullName, email, password, phone);
       if(res.data){
        notification.success(
            {
                message: "create user",
                description: "Tạo user thành công"
            }
        )
       }
       console.log(">>res", res.data);
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