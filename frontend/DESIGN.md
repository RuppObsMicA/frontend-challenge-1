## Application Design

This document outlines the architecture and functionality of the application, covering the overall flow, component responsibilities, state management with MobX, backend API interaction, and routing.

Overview
User Interface: The user uploads a CSV file containing claim data, which is processed and sent to the backend for conversion into MRF files.
File Upload: Upon uploading, the file is transformed and sent to the backend.
Display MRF Files: The application fetches and displays the MRF files from the backend.

### Components & Responsibilities:

#### FilesList

Displays the list of MRF files fetched from the backend.
Handles loading, error states, and shows the file list to the user.

#### MrfFileItem

Displays individual MRF file details (name and status).
Provides a clickable link to view/download the file.

#### UploadClaim

Handles CSV file input from the user.
Transforms the file data and validates it.

#### ApproveClaims

Render approved claims and sends them to the backend.

#### Routing

The app uses React Router to handle navigation between pages. Here are the main routes:

/ (Home page): Displays the UploadClaim component where users upload CSV files.

/files (Files List page): Displays the list of MRF files using the FilesList component.

/approve-claim (Approved Claims page): Shows the approved claims using the ApproveClaims component.

#### Store

The claimStore manages the state for claims and MRF files using MobX:

###### Actions:
addClaim: Adds a claim to approvedClaims.

setClaimsData: Sets the parsed claim data.

getApprovedClaims(): Retrieves approved claims for display.