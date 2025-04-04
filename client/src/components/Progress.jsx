import React from 'react';
import '../styles/Progress.css';

const Progress = ({ status, message, current, total }) => {
    const getStatusClass = () => {
        switch (status) {
            case 'sending':
                return 'progress-sending';
            case 'complete':
                return 'progress-complete';
            case 'error':
                return 'progress-error';
            default:
                return 'progress-idle';
        }
    };

    return (
        <div className={`progress-container ${getStatusClass()}`}>
            <div className="progress-status">
                {status === 'sending' && (
                    <div className="progress-spinner">
                        <div className="spinner"></div>
                    </div>
                )}
                <span className="status-text">{message || 'Ready to send'}</span>
            </div>
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{
                        width: status === 'sending' && total > 0 ? `${Math.min(100, Math.round((current / total) * 100))}%` :
                               status === 'complete' ? '100%' :
                               status === 'cancelled' ? `${Math.min(100, Math.round((current / total) * 100))}%` : '0%',
                        transition: 'width 0.3s ease-in-out'
                    }}
                ></div>
            </div>
            {status === 'sending' && total > 0 && (
                <div className="progress-percentage">
                    {Math.round((current / total) * 100)}%
                </div>
            )}
        </div>
    );
};

export default Progress;