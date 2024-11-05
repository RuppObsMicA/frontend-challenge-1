import React from 'react';

interface MRFFile {
    fileName: string;
    size: number;
}

interface MRFFileItemProps {
    file: MRFFile;
}

const MrfFileItem: React.FC<MRFFileItemProps> = ({ file }) => {
    return (
        <li className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
            <a
                href={`/path/to/mrf-files/${file.fileName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
            >
                {file.fileName}
            </a>
            <span className="text-sm text-gray-600">{file.size} bytes</span>
        </li>
    );
};

export default MrfFileItem;
