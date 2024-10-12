import React, { useState } from 'react';

const Demo = () => {
    const [file, setFile] = useState(null);

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) setFile(droppedFile);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) setFile(selectedFile);
    };

    const handleSubmit = () => {
        if (file) {
            console.log('Processing file:', file.name);
            // Add your file processing logic here
        }
    };

    return (
        <div className="w-64 p-4 border rounded shadow">
            <div
                className="h-32 border-2 border-dashed rounded flex items-center justify-center cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="fileInput"
                />
                <label htmlFor="fileInput" className="text-center">
                    {file ? file.name : 'Drag file or click to upload'}
                </label>
            </div>
            <button
                onClick={handleSubmit}
                disabled={!file}
                className="mt-4 w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
                {file ? 'Process File' : 'Upload a file'}
            </button>
        </div>
    );
};

export default Demo;