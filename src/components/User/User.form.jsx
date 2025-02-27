import { Input } from "antd";
import { Button } from "antd";
const UserForm = () =>{
    return (
        <div style={{margin: "10px 0"}}>
            <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
                <div>
                    <span>Full name</span>
                    <Input/>
                </div>
                <div>
                    <span>Email</span>
                    <Input/>
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password/>
                </div>
                <div>
                    <span>Phone number</span>
                    <Input/>
                </div>
                <div>
                <Button type="primary">Create User</Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm;