import React from 'react';
import { Card, Text, Anchor, Badge, Button } from '@mantine/core';

interface MRFFile {
    fileName: string;
    status: string;
}

interface MRFFileItemProps {
    file: MRFFile;
}

const MrfFileItem: React.FC<MRFFileItemProps> = ({ file }) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <div className="flex justify-between items-center">
                <Anchor
                    href={`/path/to/mrf-files/${file.fileName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="blue"
                    size="lg"
                >
                    {file.fileName}
                </Anchor>
                <Badge color={file.status === 'Completed' ? 'green' : 'yellow'}>
                    {file.status}
                </Badge>
            </div>

            <Text size="sm" color="dimmed" mt="xs">
                {file.status === 'Completed' ? 'This file has been processed.' : 'This file is pending.'}
            </Text>

            <Button
                variant="outline"
                color="blue"
                mt="md"
                fullWidth
                onClick={() => window.open(`/path/to/mrf-files/${file.fileName}`, '_blank')}
            >
                Download
            </Button>
        </Card>
    );
};

export default MrfFileItem;
