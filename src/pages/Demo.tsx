import { useState } from 'react';


import DropZone, { IDroppedFile } from '../components/DropZone';



const DemoPage = () => {
    const [selectedFile, setSelectedFile] = useState<IDroppedFile|undefined>(undefined)
    const [step, setStep] = useState(0)

    return (
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

                        <div className="card">
                            <div className="card-body">

                                {step == 0 && 
                                    <div className="step-body">
                                        <h3 className="text-start">Upload your content</h3>
                                        <DropZone onSelectFile={(droppedFile) => setSelectedFile(droppedFile)}/>
                                    
                                        <div className="text-end mt-3">
                                            <button className={"btn btn-info" + (!selectedFile ? " disabled" : '')} onClick={() => setStep(1)}>Next</button>
                                        </div>
                                    </div>
                                }
                                {step == 1 && 
                                    <div className="step-body">
                                        <h3 className="text-start">Assign your signature</h3>
                                    
                                        <div className="text-end mt-3">
                                            <button className={"btn btn-info" + (!selectedFile ? " disabled" : '')} onClick={() => setStep(2)}>Next</button>
                                        </div>
                                    </div>
                                }
                                {step == 2 && 
                                    <div className="step-body">
                                        <h3 className="text-start">Download your content</h3>
                                        
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoPage;