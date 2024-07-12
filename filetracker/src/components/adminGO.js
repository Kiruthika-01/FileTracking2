import React, { useState, useEffect } from "react";
import axios from "axios";
import "../cssfolder/adminGO.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload,faTrash } from '@fortawesome/free-solid-svg-icons';

export default function AdminGO() {
    const [goNumber, setGoNumber] = useState("");
    const [pdfFile, setPdfFile] = useState(null);
    const [message, setMessage] = useState("");
    const [documents, setDocuments] = useState([]);

    const fetchDocuments = async () => {
        try {
            const response = await axios.get("http://localhost:8080/getgo");
            setDocuments(response.data);
        } catch (error) {
            console.error("Failed to fetch documents:", error);
        }
    };

    useEffect(() => {
        fetchDocuments();
    }, []);

    const handleFileChange = (event) => {
        setPdfFile(event.target.files[0]);
    };

    const handleGoNumberChange = (event) => {
        setGoNumber(event.target.value);
    };

    const handleDelete = async (goNumber) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete document with GO Number: ${goNumber}?`);
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:8080/deletego/${goNumber}`);
                setMessage("Document deleted successfully.");
                fetchDocuments();
            } catch (error) {
                console.error("Failed to delete document:", error);
                setMessage("Failed to delete document.");
            }
            setTimeout(() => setMessage(""), 3000);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("goNumber", goNumber);
        formData.append("file", pdfFile);

        try {
            const response = await axios.post("http://localhost:8080/goupload", formData);
            setMessage(response.data);
            fetchDocuments();
        } catch (error) {
            console.error("Failed to upload document:", error);
            setMessage("Failed to upload document.");
        }

        setTimeout(() => {
            setMessage("");
            setGoNumber("");
            setPdfFile(null);
        }, 3000);
    };

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };

    return (
        <div>
            <h1>AdminGO</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>GO Number:</label>
                    <input
                        type="text"
                        value={goNumber}
                        onChange={handleGoNumberChange}
                        required
                    />
                </div>
                <div>
                    <label>Upload PDF:</label>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        required
                    />
                    <br />
                    <button type="submit">Upload</button>
                </div>
            </form>
            {message && <p>{message}</p>}
            <h2>Uploaded Documents</h2>
            <table class="go">
                <thead>
                    <tr>
                        <th>GO Number</th>
                        <th>Upload Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map((doc) => (
                        <tr key={doc.goNumber}>
                            <td>{doc.goNumber}</td>
                            <td>{formatDate(doc.date)}</td>
                            <td>
                                <a href={`http://localhost:8080/downloadgo/${doc.goNumber}`} download={`${doc.goNumber}.pdf`}>
                                <FontAwesomeIcon icon={faDownload} />
                                </a>
                                {"   |   "}
                                <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer' }} onClick={() => handleDelete(doc.goNumber)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
