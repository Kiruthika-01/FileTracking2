import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Navbar from './navbar';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

export default function Monitoring() {
    const [applicationNumber, setApplicationNumber] = useState('');
    const [trackingInfo, setTrackingInfo] = useState([]);
    const [error, setError] = useState(null);

    const handleApplicationNumberChange = (e) => {
        setApplicationNumber(e.target.value);
    };

    const handleTrackButtonClick = async () => {
        setTrackingInfo([]);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:8080/track/${applicationNumber}`);
            setTrackingInfo(response.data);
        } catch (error) {
            setError('Failed to track application. Please try again.');
        }
    };

    return (
        <div className="bg-white min-h-screen p-4 pt-16">
            <Navbar />
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h1 className="text-2xl font-bold text-center mb-6 flex items-center justify-center text-gray-800">
                    <AddLocationAltIcon style={{ fontSize: '40px', marginRight: '10px' }} />
                    Track your Application
                </h1>
                <div className="mb-6">
                    <TextField
                        type="text"
                        label="Application Number"
                        variant="outlined"
                        fullWidth
                        value={applicationNumber}
                        onChange={handleApplicationNumberChange}
                        InputProps={{
                            className: 'bg-white text-gray-800'
                        }}
                        InputLabelProps={{
                            className: 'text-gray-600'
                        }}
                    />
                </div>
                <div className="mb-6 text-center">
                    <Button
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                        variant="contained"
                        onClick={handleTrackButtonClick}
                    >
                        Track
                    </Button>
                </div>
                {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                {trackingInfo.length > 0 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Tracking Information</h2>
                        {trackingInfo.map((info, index) => (
                            <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg bg-white">
                                <p className="text-gray-700">Status: {info.status}</p>
                                <p className="text-gray-700">Assigned To: {info.Assigned_To}</p>
                                <p className="text-gray-700">Date: {info.Date}</p>
                                <p className="text-gray-700">Comments: {info.Comments}</p>
                                <hr className="my-2 border-gray-300" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
