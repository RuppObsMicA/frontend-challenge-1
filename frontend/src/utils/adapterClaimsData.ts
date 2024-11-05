export const adapterClaimsData = (claimsData) => {
    console.log('Received claimsData:', claimsData);
    if (!Array.isArray(claimsData)) {
        throw new Error("Expected claimsData to be an array");
    }

    return claimsData.map(claim => ({
        claimId: claim["Claim ID"],
        subscriberId: claim["Subscriber ID"],
        memberSequence: claim["Member Sequence"],
        claimStatus: claim["Claim Status"],
        billed: claim["Billed"],
        allowed: claim["Allowed"],
        paid: claim["Paid"],
        paymentStatusDate: claim["Payment Status Date"],
        serviceDate: claim["Service Date"],
        receivedDate: claim["Received Date"],
        entryDate: claim["Entry Date"],
        processedDate: claim["Processed Date"],
        paidDate: claim["Paid Date"],
        paymentStatus: claim["Payment Status"],
        groupName: claim["Group Name"],
        groupId: claim["Group ID"],
        divisionName: claim["Division Name"],
        divisionId: claim["Division ID"],
        plan: claim["Plan"],
        planId: claim["Plan ID"],
        placeOfService: claim["Place of Service"],
        claimType: claim["Claim Type"],
        procedureCode: claim["Procedure Code"],
        memberGender: claim["Member Gender"],
        providerId: claim["Provider ID"],
        providerName: claim["Provider Name"]
    }));
};
