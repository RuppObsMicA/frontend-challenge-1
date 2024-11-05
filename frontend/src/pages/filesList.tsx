import React from 'react';
import {Center, Container, Loader, Notification, Space, Text, Title} from '@mantine/core';
import {useFetchMrfFiles} from "~/hooks/hooks.ts";
import MrfFileItem from "~/components/MRFFileItem.tsx";
import {Link} from "react-router-dom";

const FilesList: React.FC = () => {
    const { mrfFiles, loading, error } = useFetchMrfFiles();

    return (
        <Container size="xl" className={'flex justify-center flex-col'}>
            <Title order={1} className={'flex justify-center'}>MRF Files</Title>

            <Center className={'mt-5'}>
                <Link
                    to="/"
                    className="text-blue-600 hover:text-blue-800 font-semibold text-xl mb-4"
                >
                    Go to Upload files
                </Link>
            </Center>

            <Space h="lg" />

            {loading && (
                <Center>
                    <Loader size="lg" />
                </Center>
            )}

            {error && (
                <Notification color="red" title="Error" className="mt-4">
                    {error}
                </Notification>
            )}

            {mrfFiles.length > 0 && (
                <div className="mt-6">
                    <Title order={3} className="mb-4">MRF Files:</Title>
                    <ul>
                        {mrfFiles.map((file, index) => (
                            <MrfFileItem key={index} file={file} />
                        ))}
                    </ul>
                </div>
            )}

            {mrfFiles.length === 0 && !loading && !error && (
                <Text  color="dimmed" size="lg">No MRF files found.</Text>
            )}

            <Space h="lg" />
        </Container>
    );
};

export default FilesList;
