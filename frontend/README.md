# Project Name

This project is a web application for uploading and managing MRF files. Users can upload a CSV file containing claims data, which will be processed and stored as MRF files. The application also allows fetching and displaying a list of generated MRF files.

## Getting Started

To get started with this project, follow the steps below:

### 1. Install Dependencies

First, clone the repository to your local machine and navigate to the project folder. Then, run the following command to install the required dependencies:

```bash
npm install
```

### 2. Configure Backend URL
Before running the application, you need to configure the backend URL and API endpoints.

Open the src/constants.ts file.
Set the URL variable to the URL of your backend server.
Set the ENDPOINT_TO_FETCH_FILES to the correct endpoint for fetching MRF files.

### 3. Run the Application Locally
Once dependencies are installed and the backend URL is configured, start the development server by running:

```bash
npm run dev
```