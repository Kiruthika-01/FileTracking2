import React, { useState, useEffect } from "react";
import axios from "axios";
import "../cssfolder/employeeGO.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload} from '@fortawesome/free-solid-svg-icons';

export default function EmployeeGO() {
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

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };

    return (
        <div className="employeego-container">
            <h2 className="employeego-title">Uploaded Documents</h2>
            <table class="employee-go-table">
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
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
