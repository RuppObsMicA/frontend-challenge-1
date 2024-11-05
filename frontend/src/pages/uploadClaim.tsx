import {Center, FileInput, Notification, Space, Title} from "@mantine/core";
import {useCSVParser, useUploadClaim} from "~/hooks/hooks.ts";
import {useEffect} from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {AgGridReact} from "ag-grid-react";
import {columnDefsWithApprove} from "~/utils/claimColumns.tsx";
import claimStore, {Claim} from "~/store/claimStore.ts";

const UploadClaim = () => {
    const { error, setError, handleFileChange, file } = useUploadClaim();
    const { claimsData, error: parseError, parseCSV } = useCSVParser();

    useEffect(() => {
        if (file) {
            parseCSV(file);
        }
    }, [file]);

    const handleApproveClick = (claim: Claim) => {
        if (claim) {
            claimStore.addClaim(claim);
        }
    };

    return (
        <Center className={'flex flex-col mt-4'}>
            <Title order={2}>Upload Claims</Title>

                <FileInput
                    placeholder="Click to upload"
                    label="Upload CSV"
                    onChange={handleFileChange}
                    error={error}
                    className="m-2"
                    style={{ width: '20%' }}
                />

                {error && (
                    <Notification color="red" title="Error" onClose={() => setError('')}>
                        {error}
                    </Notification>
                )}

                {parseError && (
                    <div className="error">
                        <Notification color="red" title="Parse Error" onClose={() => {}}>
                            {parseError}
                        </Notification>
                    </div>
                )}

                <Space h="md" />

                {claimsData && claimsData.length > 0 && (
                    <div className="ag-theme-alpine" style={{ width: '90%' }}>
                        <AgGridReact
                            columnDefs={columnDefsWithApprove}
                            rowData={claimsData}
                            pagination={true}
                            domLayout="autoHeight"
                            context={{ handleApproveClick }}
                        />
                    </div>
                )}
        </Center>
    );
};

export default UploadClaim;
