import {useEffect, useState} from "react";
import {claimSchema} from "~/utils/claimSchema.ts";
import Papa from 'papaparse';
import {ENDPOINT_TO_FETCH_FILES, URL} from "~/utils/constants.ts";
import {adapterClaimsData} from "~/utils/adapterClaimsData.ts";
import {fetchAPI} from "~/services/api.ts";

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
                setFile(null);
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
                    let isValid = true;

                    for (let i = 0; i < parsedData.length; i++) {
                        const claim = parsedData[i];
                        try {
                            claimSchema.parse(claim);
                        } catch (validationError) {
                            setError('Validation error: ' + validationError.errors.map((e: any) => e.message).join(`, `));
                            isValid = false;
                            break;
                        }
                    }

                    if (isValid) {
                        setClaimsData(parsedData);
                        setError('');
                        console.log(parsedData);
                    }

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

export const useUploadFile = () => {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<any>(null);

    const uploadFile = async (claimsData: any[]) => {
        if (!claimsData || claimsData.length === 0) {
            setError('No claims data provided');
            return;
        }

        const transformedClaimsData = adapterClaimsData(claimsData);
        setUploading(true);

        try {
            const data = await fetchAPI(URL, {
                method: 'POST',
                body: JSON.stringify(transformedClaimsData),
            });
            setResponse(data);
            setError(null);
        } catch (err: any) {
            setError(err.message || "Something went wrong..");
        } finally {
            setUploading(false);
        }
    };

    return { uploading, error, response, uploadFile };
};

interface MRFFile {
    fileName: string;
    size: number;
}

export const useFetchMrfFiles = () => {
    const [mrfFiles, setMrfFiles] = useState<MRFFile[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMrfFiles = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await fetchAPI(`${URL}/${ENDPOINT_TO_FETCH_FILES}`);
                setMrfFiles(data.mrfFiles);
            } catch (err: any) {
                setError(err.message || "Something went wrong while fetching MRF files.");
            } finally {
                setLoading(false);
            }
        };

        fetchMrfFiles();
    }, []);

    return { mrfFiles, loading, error };
};