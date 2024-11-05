import {Button, FileInput, Notification} from "@mantine/core";
import {useCSVParser, useUploadClaim, useUploadFile} from "~/hooks/hooks.ts";
import {useEffect} from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {AgGridReact} from "ag-grid-react";
import {columnDefs} from "~/utils/claimColumns.ts";

const UploadClaim = () => {
    const {fileName, error, setError, handleFileChange, file} = useUploadClaim();
    const { claimsData, error: parseError, parseCSV } = useCSVParser();
    const { uploading, error: uploadError, uploadFile } = useUploadFile();

    useEffect(() => {
        if (file){
            parseCSV(file);
        }
    }, [file]);

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
                className="flex items-center justify-center flex-col m-2"
            />
            {error && (
                <Notification color="red" title="Error" onClose={() => setError('')}>
                    {error}
                </Notification>
            )}
            <Button disabled={!fileName || uploading} onClick={handleApproveClick}>
                {uploading ? "Uploading..." : "Approve Claims"}
            </Button>

            {uploadError && (
                <Notification color="red" title="Error" onClose={() => setError('')}>
                    {uploadError}
                </Notification>
            )}

            {/* Table with parsed data*/}
            {parseError && <div className="error">{parseError}</div>}
            {claimsData && <div className={'flex justify-center'}>
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
