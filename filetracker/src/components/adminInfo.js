import React from 'react';
import '../cssfolder/adminInfo.css'; // Ensure the correct path to your CSS file

const AdminInfo = () => {
    return (
        <div className="adminInfo-container">
            <h1 className="adminInfo-title">Tamil Nadu - An Overview</h1>
            <div className="adminInfo-content">
                <div className="adminInfo-box">
                    <h2 className="adminInfo-box-title">Number of Districts</h2>
                    <p className="adminInfo-box-detail">38</p>
                </div>
                <div className="adminInfo-box">
                    <h2 className="adminInfo-box-title">Number of Taluks</h2>
                    <p className="adminInfo-box-detail">273</p>
                </div>
                <div className="adminInfo-box">
                    <h2 className="adminInfo-box-title">Number of Villages</h2>
                    <p className="adminInfo-box-detail">16,564</p>
                </div>
                <div className="adminInfo-box">
                    <h2 className="adminInfo-box-title">Area</h2>
                    <p className="adminInfo-box-detail">130,058 sq km</p>
                </div>
                <div className="adminInfo-box">
                    <h2 className="adminInfo-box-title">Population</h2>
                    <p className="adminInfo-box-detail">~77 million</p>
                </div>
                <div className="adminInfo-box">
                    <h2 className="adminInfo-box-title">Capital City</h2>
                    <p className="adminInfo-box-detail">Chennai</p>
                </div>
                <div className="adminInfo-box">
                    <h2 className="adminInfo-box-title">Official Language</h2>
                    <p className="adminInfo-box-detail">Tamil</p>
                </div>
                <div className="adminInfo-box">
                    <h2 className="adminInfo-box-title">Economy</h2>
                    <p className="adminInfo-box-detail">Diverse (Manufacturing, Agriculture, IT, etc.)</p>
                </div>
                <div className="adminInfo-box">
                    <h2 className="adminInfo-box-title">Major Rivers</h2>
                    <p className="adminInfo-box-detail">Kaveri, Thamirabarani, Vaigai, Palar</p>
                </div>
            </div>
        </div>
    );
}

export default AdminInfo;
