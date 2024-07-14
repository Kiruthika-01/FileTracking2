import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context'; // Ensure this path is correct
import '../cssfolder/officeWorking.css';

export default function OfficeWorking() {
    const { setIsOfficeLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsOfficeLoggedIn(false);
        navigate("/office");
    };

    const handleCardClick = (route) => {
        navigate(route);
    };

    return (
        <div className="office-working-container">
            <div className="office-working">
                <div className="card" onClick={() => handleCardClick('/add-employee')}>
                    <h2>Add Employee</h2>
                </div>
                <div className="card" onClick={() => handleCardClick('/delete-employee')}>
                    <h2>Delete Employee</h2>
                </div>
                <div className="card" onClick={() => handleCardClick('/add-application')}>
                    <h2>New Application</h2>
                </div>
                <div className="card" onClick={() => handleCardClick('/rejected-application')}>
                    <h2>Rejected Application</h2>
                </div>
            </div>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
}
