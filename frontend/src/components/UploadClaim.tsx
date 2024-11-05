import {Button, FileInput, Notification} from "@mantine/core";
import useUploadFile, {useCSVParser, useUploadClaim} from "~/hooks/hooks.ts";
import {useEffect, useState} from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {AgGridReact} from "ag-grid-react";
import {columnDefs} from "~/utils/claimColumns.ts";

const UploadClaim = () => {
    const {fileName, error, setError, handleFileChange, file} = useUploadClaim();
    const { claimsData, error: parseError, parseCSV } = useCSVParser();
    const { uploading, response, uploadFile } = useUploadFile();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(true);
        if (file){
            parseCSV(file);
        }
    }, [file]);

    useEffect(() => {
        if (response) {
            console.log("Response data:", response);
            setError("");
        }
    }, [response]);

    if (!isReady) {
        return <div>Loading AG Grid...</div>;
    }

    const handleApproveClick = () => {
        if (claimsData) {
            uploadFile(claimsData);
        }
    }

    return (
        <div>
            <FileInput
                placeholder={'Click to upload'}
                label="Upload CSV"
                onChange={handleFileChange}
                error={error}
            />
            {error && (
                <Notification color="red" title="Error" onClose={() => setError('')}>
                    {error}
                </Notification>
            )}
            <Button disabled={!fileName || uploading} onClick={handleApproveClick}>
                {uploading ? "Uploading..." : "Approve Claims"}
            </Button>

            {parseError && <div className="error">{parseError}</div>}
            {claimsData && <div>
                {claimsData.length > 0 && (
                    <div className="ag-theme-alpine" style={{ width: '90vw' }}>
                        <AgGridReact
                            columnDefs={columnDefs}
                            rowData={claimsData}
                            pagination={true}
                            domLayout='autoHeight'
                        />
                    </div>
                )}
            </div>}
        </div>
    );
};

export default UploadClaim;
