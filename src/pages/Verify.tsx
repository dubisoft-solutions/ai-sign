import { MouseEventHandler, useState } from 'react';

import DropZone, { IDroppedFile } from '../components/DropZone';
import { API_BASE_URL, MAX_SIGNATURE_LENGTH } from '../utils/settings';
import { generateRandomString } from '../utils/strings';
import { Button, Modal, Spinner } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { routeCodes } from '../routes';
import { Link } from 'react-router-dom';
import UploadFileBtn from '../components/UploadFileBtn';


const VerifyPage = () => {
    const [selectedFile, setSelectedFile] = useState<IDroppedFile|undefined>(undefined)
    const [signatureText, setSignatureText] = useState<string>('')
    const [step, setStep] = useState(0)
    const [showLoaderModal, setShowLoaderModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

   

    const handleSubmit = () => {
        setShowLoaderModal(true);

        const formData = new FormData();
        formData.append('watermark', signatureText);
        if (selectedFile) {
            formData.append('image', selectedFile.file);
        }

        fetch(new URL('decode', API_BASE_URL).href, {
            method: 'post',
            body: formData,
        })
        .then(async response => {
            if (response.ok) {
                setSignatureText(await response.text())
                setStep(1)
            } else {
                throw new Error('Error occurred');
            }
        })
        .catch(e => {
            console.log(e);
            setShowErrorModal(true)
        }).finally(() => {
            setShowLoaderModal(false);
        })
    }

    const handleReset = () => {
        setStep(0);
        setSelectedFile(undefined);
        setSignatureText('');
    }

    return (
        <>
            <div className="content d-flex w-100 h-100 mx-auto flex-column">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center pb-4">
                            <h2 className="mb-lg-4 mb-3">Decode and verify your content</h2>
                            <p className="fs-3 mb-lg-5 mb-4">Upload content to determine if it contains your unique signature. Any rendition or reappropriation of your content will contain your unique signature</p>
                           

                            <div className="card">
                                <div className="card-body">
                                    {step == 0 && 
                                        <div className="step-body">
                                            <DropZone onSelectFile={(droppedFile) => setSelectedFile(droppedFile)}/>
                                        
                                            <div className="text-end mt-3">
                                                <button className={"btn btn-info" + (!selectedFile ? " disabled" : '')} onClick={() => handleSubmit()}>Decode and verify</button>
                                            </div>
                                        </div>
                                    }
                                    {step == 1 && 
                                        <div className="step-body">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img className='w-100' src={selectedFile?.preview} alt={selectedFile?.file.name} />
                                                </div>
                                                <div className="col-md-8">
                                                    {signatureText ? (
                                                        <>
                                                            <h3>We have detected this content contains a unique signature:</h3>
                                                            <div className="d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faCircleCheck} size='lg' className='text-success' />
                                                                <span>{signatureText}</span>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <h3>Signature was not detected</h3>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-end">
                                                <Button variant="success" onClick={() => {handleReset()}}>Try again</Button>
                                                    <Button variant="success" onClick={() => {}}>Download report</Button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Loader modal */}
            <Modal centered show={showLoaderModal}>
                <Modal.Body className='text-center py-5'>
                    <p className='mb-3' >Processing...</p>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Modal.Body>
            </Modal>

            {/* Error modal */}
            <Modal centered show={showErrorModal} onHide={() => setShowErrorModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Unexpected error</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p className='text-center' ><FontAwesomeIcon icon={faTriangleExclamation} size='6x' className='text-danger mb-5' /></p>

                    <p>Sorry, unexpected error occurred. Please, try again later</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" onClick={() => {setShowErrorModal(false)}}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VerifyPage;