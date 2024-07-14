import { Link } from 'react-router-dom';
import '../cssfolder/officeNavbar.css';

export default function OfficeNavbar() {
    return (
        <nav className="office-navbar">
            <ul>
                <li><Link to="/officeWorking">Home</Link></li>
                <li><Link to="/addAppType">Add Application Type</Link></li>
                <li><Link to="/officeabout">About Us</Link></li>
                <li><Link to="/officeGO">G.O</Link></li>
            </ul>
        </nav>
    );
}
