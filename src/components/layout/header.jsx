import { NavLink, Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <ul>
            {/*Link tag Không reload lại trang
            NavLink tự động thêm class="active"*/}
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>
        </ul>
    )
}
export default Header;