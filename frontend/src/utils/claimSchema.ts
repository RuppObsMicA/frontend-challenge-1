import { z } from 'zod';

export const claimSchema = z.object({
    "Claim ID": z.string().min(1, "Claim ID is required"),
    "Subscriber ID": z.string().min(1, "Subscriber ID is required"),
    "Member Sequence": z.union([
        z.string().min(1, "Member Sequence is required"),
        z.number().positive("Member Sequence must be a positive number")
    ]),
    "Claim Status": z.string().min(1, "Claim Status is required"),
    "Billed": z.string().min(1, "Billed amount must be positive").optional(),
    "Allowed": z.string().min(1, "Allowed amount must be positive").optional(),
    "Paid": z.string().min(1, "Paid amount must be positive").optional(),
    "Payment Status Date": z.string().refine(value => !isNaN(Date.parse(value)), {
        message: "Payment Status Date must be a valid date",
    }).optional(),
    "Service Date": z.string().refine(value => !isNaN(Date.parse(value)), {
        message: "Service Date must be a valid date",
    }).optional(),
    "Received Date": z.string().refine(value => !isNaN(Date.parse(value)), {
        message: "Received Date must be a valid date",
    }).optional(),
    "Entry Date": z.string().refine(value => !isNaN(Date.parse(value)), {
        message: "Entry Date must be a valid date",
    }).optional(),
    "Processed Date": z.string().refine(value => !isNaN(Date.parse(value)), {
        message: "Processed Date must be a valid date",
    }).optional(),
    "Paid Date": z.string().refine(value => !isNaN(Date.parse(value)), {
        message: "Paid Date must be a valid date",
    }).optional(),
    "Payment Status": z.string().min(1, "Payment Status is required"),
    "Group Name": z.string().min(1, "Group Name is required"),
    "Group ID": z.union([
        z.string().min(1, "Group ID is required"),
        z.number().positive("Group ID must be a positive number")
    ]),
    "Division Name": z.string().min(1, "Division Name is required"),
    "Division ID": z.union([
        z.string().min(1, "Division ID is required"),
        z.number().positive("Division ID must be a positive number")
    ]),
    "Plan": z.string().min(1, "Plan is required"),
    "Plan ID": z.union([
        z.string().min(1, "Plan ID is required"),
        z.number().positive("Plan ID must be a positive number")
    ]),
    "Place of Service": z.string().min(1, "Place of Service is required"),
    "Claim Type": z.string().min(1, "Claim Type is required"),
    "Procedure Code": z.string().min(1, "Procedure Code is required"),
    "Member Gender": z.enum(["Male", "Female"]).optional(),
    "Provider ID": z.string().min(1, "Provider ID must be a positive number"),
    "Provider Name": z.string().min(1, "Provider Name is required")
});
