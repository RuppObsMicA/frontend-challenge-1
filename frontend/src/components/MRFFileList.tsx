import React from 'react';
import {Loader, Notification} from '@mantine/core';
import {useFetchMrfFiles} from "~/hooks/hooks.ts";
import MrfFileItem from "~/components/MRFFileItem.tsx";
import {Link} from "react-router-dom";

const MRFFileList: React.FC = () => {
    const { mrfFiles, loading, error } = useFetchMrfFiles();

    return (
        <>
            <h1 className={'flex justify-center'}>Files</h1>
            <Link to={'/'} className={'flex justify-center text-blue-600 hover:text-blue-800 font-semibold'}>Go to main</Link>
            <div className="max-w-4xl mx-auto p-4">
                {loading && (
                    <div className="flex justify-center">
                        <Loader size="lg"/>
                    </div>
                )}

                {error && (
                    <Notification color="red" title="Error" className="mt-4">
                        {error}
                    </Notification>
                )}

                {mrfFiles.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-4">MRF Files:</h3>
                        <ul className="space-y-2">
                            {mrfFiles.map((file, index) => (
                                <MrfFileItem key={index} file={file}/>
                            ))}
                        </ul>
                    </div>
                )}

                {mrfFiles.length === 0 && !loading && !error && (
                    <p className="mt-6 text-gray-600">No MRF files found.</p>
                )}
            </div>
        </>
    );
};

export default MRFFileList;
