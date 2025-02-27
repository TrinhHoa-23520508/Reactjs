import UserTable from "../components/User/User.table";
import UserForm from "../components/User/User.form";
const UserPage = () =>{
    return (
        <div style={{padding: "20px"}}>
            <UserForm/>
            <UserTable/>
        </div>
    )
}
export default UserPage;