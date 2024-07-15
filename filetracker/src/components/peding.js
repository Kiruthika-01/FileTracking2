import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './context';
import '../cssfolder/pending.css';

export default function Pending() {
    const { employeeMail } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };

    useEffect(() => {
        const fetchPendingTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/delayed/${employeeMail}`);
                setTasks(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchPendingTasks();
    }, [employeeMail]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error loading tasks: {error.message}</div>;
    }

    return (
        <div className="pending-container">
            <h1 className="pending-header">Delayed Work</h1>
            <ul className="pending-list">
                {tasks.map(task => (
                    <li key={task.id} className="pending-task-item">
                        <div className="pending-task-header"><strong>Application Number:</strong> {task.ApplicationNumber}</div>
                        <div className="pending-task-details"><strong>Status:</strong> {task.status}</div>
                        <div className="pending-task-details"><strong>Created At:</strong> {formatDate(task.created_at)}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
