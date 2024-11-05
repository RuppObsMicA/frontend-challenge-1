import { makeAutoObservable } from "mobx";

export interface Claim {
    "Claim ID": string;
    "Subscriber ID": string;
    "Member Sequence": string;
    "Claim Status": string;
    "Billed": number;
    "Allowed": number;
    "Paid": number;
    "Payment Status Date": string;
    "Service Date": string;
    "Received Date": string;
    "Entry Date": string;
    "Processed Date": string;
    "Paid Date": string;
    "Payment Status": string;
    "Group Name": string;
    "Group ID": string;
    "Division Name": string;
    "Division ID": string;
    "Plan": string;
    "Plan ID": string;
    "Place of Service": string;
    "Claim Type": string;
    "Procedure Code": string;
    "Member Gender": string;
    "Provider ID": string;
    "Provider Name": string;
}

class ClaimStore {
    approvedClaims: Claim[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addClaim(claimData: Claim) {
        this.approvedClaims.push(claimData);
        console.log("Claim added:", claimData);
    }

    getApprovedClaims() {
        return this.approvedClaims;
    }
}

const claimStore = new ClaimStore();
export default claimStore;
