import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './context';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import '../cssfolder/addOffice.css'; // Ensure the correct path to your CSS file

function AddOffice() {
    const { districtId } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        officeId: '',
        officeName: '',
        officeLocation: '',
        email: '',
        password: '',
        districtId: districtId
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/addOffice', formData)
            .then(response => {
                setResponseMessage(response.data);
    
                if (response.data === "New Office Added") {
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
        <Grid container className="addOffice-background">
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <div className="addOffice-container">
                <div className="addOffice-header">
                    <Typography variant="h4" gutterBottom>
                        <AccountBalanceIcon className="addOffice-icon" />
                        Add Office
                    </Typography>
                </div>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="officeId"
                        name="officeId"
                        value={formData.officeId}
                        onChange={handleChange}
                        label="Office Id"
                        variant="outlined"
                        required
                        className="addOffice-textField"
                    />
                    <TextField
                        type="officeName"
                        name="officeName"
                        value={formData.officeName}
                        onChange={handleChange}
                        label="Office Name"
                        variant="outlined"
                        required
                        className="addOffice-textField"
                    />
                    <TextField
                        type="officeLocation"
                        name="officeLocation"
                        value={formData.officeLocation}
                        onChange={handleChange}
                        label="Office Location"
                        variant="outlined"
                        required
                        className="addOffice-textField"
                    />
                    <TextField
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        label="Email"
                        variant="outlined"
                        required
                        className="addOffice-textField"
                    />
                    <TextField
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        label="Password"
                        variant="outlined"
                        required
                        className="addOffice-textField"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth className="addOffice-button">
                        Add New Office
                    </Button>
                    {responseMessage && (
                        <Typography variant="body1" className="addOffice-responseMessage">
                            {responseMessage}
                        </Typography>
                    )}
                </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default AddOffice;
