import React from 'react';
import '../cssfolder/adminAbout.css'; // Ensure the correct path to your CSS file

const AdminAbout = () => {
    return (
        <div className="adminAbout-container">
            <h1 className="adminAbout-title">About FileTracker</h1>
            <div className="adminAbout-content">
                <div className="adminAbout-box">
                    <h2 className="adminAbout-box-title">Overview</h2>
                    <p className="adminAbout-box-detail">
                        FileTracker is a powerful tool designed to streamline document management and tracking. It allows users to upload, retrieve, and manage files efficiently.
                    </p>
                </div>
                <div className="adminAbout-box">
                    <h2 className="adminAbout-box-title">Features</h2>
                    <ul className="adminAbout-box-detail">
                        <li>Easy document upload and retrieval</li>
                        <li>Secure access control</li>
                        <li>Real-time tracking of document status</li>
                        <li>Automated notifications and reminders</li>
                    </ul>
                </div>
                <div className="adminAbout-box">
                    <h2 className="adminAbout-box-title">Benefits</h2>
                    <p className="adminAbout-box-detail">
                        FileTracker simplifies document management, reduces administrative overhead, and ensures that all files are securely stored and easily accessible.
                    </p>
                </div>
                <div className="adminAbout-box">
                    <h2 className="adminAbout-box-title">Screenshots</h2>
                    <div className="adminAbout-images">
                        <img src="your_image_path_here_1" alt="Screenshot 1" className="adminAbout-image" />
                        <img src="your_image_path_here_2" alt="Screenshot 2" className="adminAbout-image" />
                    </div>
                </div>
                <div className="adminAbout-box">
                    <h2 className="adminAbout-box-title">Contact Us</h2>
                    <p className="adminAbout-box-detail">
                        For more information, contact us at <a href="mailto:support@filetracker.com" className="adminAbout-link">support@filetracker.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AdminAbout;
