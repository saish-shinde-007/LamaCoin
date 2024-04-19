import React, { useState } from 'react';
import { FiClipboard, FiCheck } from 'react-icons/fi';

const CopyToClipboard = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
    };

    return (
        <div>
            <button onClick={handleCopy}>
                {copied ? <FiCheck /> : <FiClipboard />}
            </button>
        </div>
    );
};

export default CopyToClipboard;
