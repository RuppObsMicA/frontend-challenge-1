import { Button } from "@mantine/core";
import { ColDef } from "ag-grid-community";
import { Claim } from "~/store/claimStore.ts";

export const baseColumnDefs: ColDef<Claim>[] = [
    { headerName: "Claim ID", field: "Claim ID" },
    { headerName: "Subscriber ID", field: "Subscriber ID" },
    { headerName: "Member Sequence", field: "Member Sequence" },
    { headerName: "Claim Status", field: "Claim Status" },
    { headerName: "Billed", field: "Billed" },
    { headerName: "Allowed", field: "Allowed" },
    { headerName: "Paid", field: "Paid" },
    { headerName: "Payment Status Date", field: "Payment Status Date" },
    { headerName: "Service Date", field: "Service Date" },
    { headerName: "Received Date", field: "Received Date" },
    { headerName: "Entry Date", field: "Entry Date" },
    { headerName: "Processed Date", field: "Processed Date" },
    { headerName: "Paid Date", field: "Paid Date" },
    { headerName: "Payment Status", field: "Payment Status" },
    { headerName: "Group Name", field: "Group Name" },
    { headerName: "Group ID", field: "Group ID" },
    { headerName: "Division Name", field: "Division Name" },
    { headerName: "Division ID", field: "Division ID" },
    { headerName: "Plan", field: "Plan" },
    { headerName: "Plan ID", field: "Plan ID" },
    { headerName: "Place of Service", field: "Place of Service" },
    { headerName: "Claim Type", field: "Claim Type" },
    { headerName: "Procedure Code", field: "Procedure Code" },
    { headerName: "Member Gender", field: "Member Gender" },
    { headerName: "Provider ID", field: "Provider ID" },
    { headerName: "Provider Name", field: "Provider Name" },
];

export const columnDefsWithApprove: ColDef<Claim>[] = [
    {
        headerName: "Approve",
        cellRenderer: (params) => {
            const { handleApproveClick } = params.context;

            return (
                <Button
                    onClick={() => handleApproveClick(params.data)}
                    variant="outline"
                    color={'green'}
                >
                   Approve
                </Button>
            );
        },
        width: 150,
        suppressSizeToFit: true,
    },
    ...baseColumnDefs,
];
