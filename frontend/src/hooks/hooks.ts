import {useState} from "react";
import {claimSchema} from "~/utils/claimSchema.ts";
import Papa from 'papaparse';
import {URL} from "~/utils/constants.ts";
import {adapterClaimsData} from "~/utils/adapterClaimsData.ts";


export const useUploadClaim = () => {
    const [fileName, setFileName] = useState('');
    const [error, setError] = useState('');
    const [file, setFile] = useState<File>();

    const handleFileChange = (event) => {
        console.log(event);
        const file = event;
        setFile(file);

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

    return {fileName, error, setError,handleFileChange, file};
}

export const useCSVParser = () => {
    const [claimsData, setClaimsData] = useState<any[]>([]);
    const [error, setError] = useState<string>('');

    const parseCSV = (file: File) => {
        console.log(file);
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                try {
                    const parsedData = results.data;
                    console.log(parsedData);
                    parsedData.forEach((claim) => {
                        try {
                            claimSchema.parse(claim);
                        } catch (validationError) {
                            setError('Validation error: ' + validationError.errors.map((e: any) => e.message).join(', '));
                            return;
                        }
                    });

                    setClaimsData(parsedData);
                    setError('');
                    console.log(claimsData)

                } catch (e) {
                    setError('Error parsing the CSV file');
                }
            },
            error: (parseError) => {
                setError('Error parsing the CSV file: ' + parseError.message);
            }
        });
    };

    return {
        claimsData,
        error,
        parseCSV,
    };
};

const useUploadFile = () => {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<any>(null);

    const uploadFile = async (claimsData) => {
        if (!claimsData || claimsData.length === 0) {
            setError('No claims data provided');
            return;
        }

        const transformedClaimsData = adapterClaimsData(claimsData); // Преобразуем данные с помощью адаптера

        setUploading(true);
        const formData = new FormData();

        formData.append("claimsData", JSON.stringify(transformedClaimsData));

        try {
            const res = await fetch(URL, {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                throw new Error("Failure during uploading");
            }

            const data = await res.json();
            setResponse(data); // Сохраняем ответ от сервера
            setError(null); // Очищаем ошибку при успешной загрузке
        } catch (err: any) {
            setError(err.message || "Something went wrong..");
        } finally {
            setUploading(false); // Заканчиваем процесс загрузки
        }
    };

    return { uploading, error, response, uploadFile };
};

export default useUploadFile;
