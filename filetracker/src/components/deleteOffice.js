import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../cssfolder/deleteOffice.css';

function DeleteOffice() {
    const [officeId, setOfficeId] = useState('');
    const [responseMessage, setResponseMessage] = useState('');    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setOfficeId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8080/deleteOffice/${officeId}`)
            .then(response => {
                setResponseMessage(response.data);
    
                if (response.data === "Office Deleted") {
                    setTimeout(() => {
                        navigate("/adminWorking");
                    }, 1500); 
                } else {
                    setTimeout(() => {
                        setResponseMessage('');
                    }, 1500);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="deleteOffice-container">
            <div className="deleteOffice-formContainer">
                <div className="deleteOffice-header">
                    <Typography variant="h4" gutterBottom>Delete Office</Typography>
                </div>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="officeId"
                        value={officeId}
                        onChange={handleChange}
                        label="Office ID"
                        variant="outlined"
                        fullWidth
                        required
                        className="deleteOffice-textField"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth className="deleteOffice-button">
                        Delete Office
                    </Button>
                    {responseMessage && (
                        <Typography variant="body1" className="deleteOffice-responseMessage">
                            {responseMessage}
                        </Typography>
                    )}
                </form>
            </div>
        </div>
    );
}

export default DeleteOffice;
