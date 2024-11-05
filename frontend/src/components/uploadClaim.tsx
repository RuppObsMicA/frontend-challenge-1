import {Button, FileInput, Notification} from "@mantine/core";
import {useUploadClaim} from "~/hooks/hooks.ts";

const UploadClaim = () => {
    const {fileName, error, setError, handleFileChange} = useUploadClaim();

    return (
        <div>
            <FileInput
                placeholder={'Click to upload'}
                label="Upload CSV"
                onChange={handleFileChange}
                error={error}
            />
            {error && (
                <Notification color="red" title="Error" onClose={() => setError('')}>
                    {error}
                </Notification>
            )}
            <Button disabled={!fileName}>Approve Claims</Button>
        </div>
    );
};

export default UploadClaim;
