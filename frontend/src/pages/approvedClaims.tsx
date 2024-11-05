import {observer} from "mobx-react-lite";
import claimStore from "~/store/claimStore.ts";
import {AgGridReact} from "ag-grid-react";
import {baseColumnDefs} from "~/utils/claimColumns.tsx";
import {Link} from "react-router-dom";
import {Button, Center, Container, Loader, Notification, Space, Text, Title} from "@mantine/core";
import {useSendClaims} from "~/hooks/hooks.ts";

const ApprovedClaims = observer(() => {
    const approvedClaims = claimStore.getApprovedClaims();
    const { error, uploading, response, sendClaims, setResponse, setError } = useSendClaims();

    return (
        <Container size="xl">
            <Center>
                <Title order={1}>Approved Claims</Title>
            </Center>

            <Center>
                <Link
                    to={'/'}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-xl mb-4 mt-4"
                >
                    Go to Upload files
                </Link>
            </Center>

            <Space h="lg" />

            {approvedClaims.length === 0 ? (
                <Center>
                    <Text>No approved claims.</Text>
                </Center>
            ) : null}

            <Space h="lg" />

            {approvedClaims && approvedClaims.length > 0 && (
                <Center className={'flex-col'}>
                    <div className="ag-theme-alpine" style={{ width: '90vw' }}>
                        <AgGridReact
                            columnDefs={baseColumnDefs}
                            rowData={approvedClaims}
                            pagination={true}
                            domLayout="autoHeight"
                            context={{ approvedClaims }}
                        />
                    </div>
                    <Button
                        className={'mt-4'}
                        onClick={() => sendClaims(approvedClaims)}
                        disabled={uploading}
                    >
                        {uploading ? <Loader size="sm" /> : "Submit claims"}
                    </Button>
                </Center>
            )}

            {error && (
                <Notification color="red" title="Error" onClose={() => setError(null)}>
                    {error}
                </Notification>
            )}

            {response && (
                <Notification color="green" title="Success" onClose={() => setResponse(null)}>
                    Claims have been successfully submitted!
                </Notification>
            )}
        </Container>
    );
});

export default ApprovedClaims;