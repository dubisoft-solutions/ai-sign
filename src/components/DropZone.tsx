import { useState } from "react";
import { useDropzone } from "react-dropzone";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


import upload from '../assets/images/upload.svg';

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
        <div className="drop-zone-container row justify-content-center">
            {droppedFile ? (
                <div className="dropped-file-preview">
                    <img className="max-image-preview-size w-100" src={droppedFile.preview} alt={droppedFile.file.name} />
                    <div className="dropped-file-details d-flex justify-content-center">
                        <span className='dropped-file-name'>{droppedFile.file.name}</span> 
                        <button className='btn p-0' onClick={() => clearDroppedFile()}>
                            <FontAwesomeIcon icon={faTrash} className='ms-3 text-danger' />
                        </button>
                    </div>
                    
                </div>
            ) : (
                <div
                    {...getRootProps({ className: "dropzone p-5 col-lg-8 text-center" })}
                >
                    <input {...getInputProps()} />
                    <img src={upload} alt="Upload" />
                    <p className="my-2">DRAG AND DROP</p>
                    <p className="fs-5 mb-3">or <span className="text-decoration-underline">browse your files</span></p>
                    <p className="fs-6 fst-italic text-dark-grey">Compatible with images, audio, text and videos</p>
                    <div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropZone;