import React, { useState, useEffect } from "react";
import axios from "axios";
import "../AdminGO.css";
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
        <div>
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
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
