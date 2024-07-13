import { Link } from 'react-router-dom';
import '../cssfolder/employeeNavbar.css';
import { AuthContext } from './context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmployeeNavbar() {
    const { setIsEmployeeLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout() {
        setIsEmployeeLoggedIn(false);
        navigate("/employee")
    }

    return (
        <nav className="employee-navbar">
            <ul>
                <li className='employeeNavbar-link'><Link to="/employeeWorking">Home</Link></li>
                <li className='employeeNavbar-link'><Link to="/pending">Delayed applications</Link></li>
                <li className='employeeNavbar-link'><Link to="/officeabout">About Us</Link></li>
                <li className='employeeNavbar-link'><Link to="/employeeGO">G.O</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    );
}

