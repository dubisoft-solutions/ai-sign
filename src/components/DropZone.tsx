import { useState } from "react";
import { useDropzone } from "react-dropzone";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export interface IDroppedFile {
    file: File;
    preview: string;
}


interface IDropZone {
    onSelectFile: (droppedFile: IDroppedFile | undefined) => void | undefined;
}

const DropZone = (props: IDropZone) => {
    const [droppedFile, setDroppedFile] = useState<IDroppedFile | undefined>(undefined);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/png': ['.png'],
        },
        onDrop: (acceptedFiles) => {
            const file = {file: acceptedFiles[0], preview: URL.createObjectURL(acceptedFiles[0])};
            setDroppedFile(file);
            props?.onSelectFile(file)
        }
    });

    const clearDroppedFile = () => {
        setDroppedFile(undefined)
        props?.onSelectFile(undefined)
    }

    return (
        <div className="drop-zone-container">
            {droppedFile ? (
                <div className="dropped-file-preview">
                    <img className="max-image-preview-size" src={droppedFile.preview} alt={droppedFile.file.name} />
                    <div className="dropped-file-details d-flex justify-content-center">
                        <span className='dropped-file-name'>{droppedFile.file.name}</span> 
                        <button className='btn p-0' onClick={() => clearDroppedFile()}>
                            <FontAwesomeIcon icon={faTrash} className='ms-3 text-danger' />
                        </button>
                    </div>
                    
                </div>
            ) : (
                <div
                    {...getRootProps({ className: "dropzone p-5 bg-success" })}
                >
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                    <div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropZone;