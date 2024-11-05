Application Design

This document outlines the architecture and functionality of the application, covering the overall flow, component responsibilities, state management with MobX, backend API interaction, and routing.

Overview
User Interface: The user uploads a CSV file containing claim data, which is processed and sent to the backend for conversion into MRF files.
File Upload: Upon uploading, the file is transformed and sent to the backend.
Display MRF Files: The application fetches and displays the MRF files from the backend.
Components & Responsibilities
MRFFileList

Displays the list of MRF files fetched from the backend.
Handles loading, error states, and shows the file list to the user.
MrfFileItem

Displays individual MRF file details (name and size).
Provides a clickable link to view/download the file.
FileUpload

Handles CSV file input from the user.
Transforms the file data and sends it to the backend.
UI Components (Mantine)

Loader: Shown during data fetching/uploading.
Notification: Displays error or success messages.
Button: Triggers actions like file upload.
TextInput: Used for user input (e.g., customer ID).
Backend Interaction
Uploading Claims Data:

The CSV file is read, transformed using adapterClaimsData, and sent to the backend for processing.
Fetching MRF Files:

A GET request is made to the backend to retrieve a list of MRF files. The response is processed and displayed to the user.