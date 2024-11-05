import {useState} from "react";

export const useUploadClaim = () => {
    const [fileName, setFileName] = useState('');
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        console.log(event.type);
        const file = event;

        if (file) {
            const fileExtension = file.type;
            const validExtensions = ['text/csv'];

            if (!validExtensions.includes(fileExtension)) {
                setError('Please upload a valid CSV file.');
                setFileName('');
                return;
            }

            setFileName(file.name);
            setError('');
        } else {
            setError('No file selected.');
        }
    };

    return {fileName, error, setError,handleFileChange};
}