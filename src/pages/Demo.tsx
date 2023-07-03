import { MouseEventHandler, useState } from 'react';

import DropZone, { IDroppedFile } from '../components/DropZone';
import { API_BASE_URL, MAX_SIGNATURE_LENGTH } from '../utils/settings';
import { generateRandomString } from '../utils/strings';
import { Button, Modal, Spinner } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faUpload } from '@fortawesome/free-solid-svg-icons'
import { routeCodes } from '../routes';
import { Link } from 'react-router-dom';
import UploadFileBtn from '../components/UploadFileBtn';


const DemoPage = () => {
    const [selectedFile, setSelectedFile] = useState<IDroppedFile|undefined>(undefined)
    const [signatureText, setSignatureText] = useState<string>('')
    const [step, setStep] = useState(0)
    const [showLoaderModal, setShowLoaderModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [encodedImageUrl, setEncodedImageUrl] = useState<string>('');

    const generateSignature = () => {
        setSignatureText(generateRandomString(MAX_SIGNATURE_LENGTH));
    }

    const handleSubmit = () => {
        setShowLoaderModal(true);

        const formData = new FormData();
        formData.append('watermark', signatureText);
        if (selectedFile) {
            formData.append('image', selectedFile.file);
        }

        fetch(new URL('encode', API_BASE_URL).href, {
            method: 'post',
            body: formData,
        })
        .then(async response => {
            if (response.ok) {
                const blob = await response.blob();
                const blobUrl = URL.createObjectURL(blob);
                setEncodedImageUrl(blobUrl);
                setStep(2);
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

    return (
        <>
            <div className="content d-flex w-100 h-100 mx-auto flex-column">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center pb-4">
                            <h2 className="mb-lg-4 mb-3">Protect your content</h2>
                            <p className="fs-3 mb-lg-5 mb-4">Add an invisible permanent digital signature that will withstand the challenges posed by generative AI models.</p>
                            
                            <div className="steps mb-3">
                                <div className={"step " + (step == 0 ? 'active' : '')}>
                                    <div className="step-body">
                                        <div className="step-title">
                                            Step 1
                                        </div>
                                        <div className="step-description">
                                            Upload your content
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={"step " + (step == 1 ? 'active' : '')}>
                                    <div className="step-body">
                                        <div className="step-title">
                                            Step 2
                                        </div>
                                        <div className="step-description">
                                            Add your signature
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={"step " + (step == 2 ? 'active' : '')}>
                                    <div className="step-body">
                                        <div className="step-title">
                                            Step 3
                                        </div>
                                        <div className="step-description">
                                            Export content
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-body">
                                    {step == 0 && 
                                        <div className="step-body">
                                            <h3 className="text-start mb-lg-5 mb-4">Upload your content</h3>
                                            <DropZone onSelectFile={(droppedFile) => setSelectedFile(droppedFile)}/>
                                        
                                            <div className="text-end mt-3">
                                                <button className={"btn btn-info" + (!selectedFile ? " disabled" : '')} onClick={() => setStep(1)}>Next</button>
                                            </div>
                                        </div>
                                    }
                                    {step == 1 && 
                                        <div className="step-body text-start">
                                            <h3>Add your signature</h3>
                                            <p className="mb-5">This unique watermark attributes your content to you, and will only be visible when you verify and upload work that has utilized your content.</p>
                                        
                                            <input value={signatureText} type="text" className="form-control mb-3" placeholder="Add your unique signature here..." maxLength={MAX_SIGNATURE_LENGTH} onChange={(e) => setSignatureText(e.target.value)} />

                                            <p className="text-dark">or <span className='text-decoration-underline cursor-pointer' onClick={() => generateSignature()}>generate this for me</span></p>

                                            <div className="text-end mt-3">
                                                <button className={"btn btn-info" + (!signatureText ? " disabled" : '')} onClick={() => handleSubmit()}>Next</button>
                                            </div>
                                        </div>
                                    }
                                    {step == 2 && 
                                        <div className="step-body text-start">
                                            <h3 className="mb-2">Download your content</h3>
                                            <p className="mb-3">Your content is now protected with your unique signature. If your content is consumed by an .AI model, reappropriated or utilized in anyway, upload it here to verify that your content was stolen.</p>
                                            <p className="mb-5">To secure your content, ensure only this version is publicly available online.</p>
                                            
                                            <UploadFileBtn fileStringUrl={encodedImageUrl} />

                                            <div className="row justify-content-center d-lg-flex gap-2 d-block">
                                                <div className="col-lg-8">
                                                    <Link to={routeCodes.VERIFY} className="btn btn-outline-info btn-lg w-100">
                                                        <span>Upload and test your signature</span>
                                                        <FontAwesomeIcon icon={faUpload} className='ms-3' />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {step == 2 && 
                            <div className="card">
                                <div className="card-body">
                                        <div className="step-body text-start">
                                            <h3 className="mb-1">Sign up to be notified when someone steals your shit</h3>
                                            <p className="mb-3">We proactively scan people who commonly steal art. If you would like to be notified.</p>
                                            
                                            <form className="email-style row g-3">
                                                <div className="col-lg-7">
                                                    <input type="email" className="form-control border-0" id="inputEmail" placeholder="Enter your email" />
                                                </div>
                                                <div className="col-lg-3">
                                                    <button type="submit" className="btn btn-info btn-lg w-100">Sign up</button>
                                                </div>
                                            </form>
                                        </div>
                                   
                                </div>
                            </div>
                             }
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

export default DemoPage;