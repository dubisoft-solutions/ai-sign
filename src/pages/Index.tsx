import React from 'react';

import herobg from '../assets/images/hero-bg.png';

const IndexPage = () => {

    return  (
        <>
        <div className="hero d-flex w-100 h-100 mx-auto flex-column">
            <main>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="pb-5">
                                <a href="#">
                                    <img src="src/assets/images/logo.svg" alt="Hero bg" />
                                </a>
                            </div>
                            <h1 className="text-white mb-lg-4 mb-3">Protect and track your data</h1>
                            <p className="text-white fs-1 mb-lg-5 mb-4">Create a traceable and permanent digital signature
        for your content that withstands the challenges posed 
        by generative AI models.<br></br> 
        Works for images, videos, audio, and text.</p>
                            <div className="d-lg-flex gap-2 d-grid">
                                <a className="btn btn-outline-info w-100" href="#" role="button">Watch how it works</a>
                                <a className="btn btn-info w-100" href="#" role="button">Try a demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div className="models-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mb-4">Your data is being used to train AI models,  
                        <span className="d-lg-block">without your knowledge or consent.</span></h2>
                            <p className="fs-2 mb-lg-5 mb-4">Companies are stealing copyright, violating terms of use <span className="d-lg-block">and 
    misusing personal data, creating large datasets to train models.</span></p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <div className="card mb-4">
                            <div className="card-body row">
                                <div className="col-lg-4 text-center pb-lg-0 pb-4">
                                    <h3 className="text-secondary fw-normal mb-4">Data owners</h3>
                                    <img src="src/assets/images/owners.png" alt="Data owners" />
                                    <p className="fs-3 mt-3">Text, image, video, and audio data is stolen</p>
                                </div>
                                <div className="col-lg-4 text-center pb-lg-0 pb-4">
                                    <h3 className="text-secondary fw-normal mb-4">AI companies</h3>
                                    <img src="src/assets/images/companies.png" alt="Companies" />
                                    <p className="fs-3 mt-3">Microsoft, Github, Midjourney, OpenAI, and StabilityAI
train models for applications </p>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <h3 className="text-secondary fw-normal mb-4">End Users</h3>
                                    <img src="src/assets/images/users.png" alt="Users" />
                                    <p className="fs-3 mt-3">Users of
Github Copilot, ChatGPT, and StableDiffusion
 pay AI companies. Data owners get nothing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="fs-4">Can probably cite ongoing lawsuits</p>
                            <a href="https://techcrunch.com/2023/01/27/the-current-legal-cases-against-generative-ai-are-just-the-beginning/" className="btn-link d-block">https://techcrunch.com/2023/01/27/the-current-legal-cases-against-generative-ai-are-just-the-beginning/</a>
                            <a href="https://www.theverge.com/2023/1/16/23557098/generative-ai-art-copyright-legal-lawsuit-stable-diffusion-midjourney-deviantart" className="btn-link d-block">https://www.theverge.com/2023/1/16/23557098/generative-ai-art-copyright-legal-lawsuit-stable-diffusion-midjourney-deviantart</a>
                            <a href="https://www.latimes.com/entertainment-arts/music/story/2023-04-18/drake-the-weeknd-ai-song-fake-removed-streaming-services" className="btn-link d-block">https://www.latimes.com/entertainment-arts/music/story/2023-04-18/drake-the-weeknd-ai-song-fake-removed-streaming-services</a>
                            <a href="https://www.nytimes.com/2023/04/18/technology/reddit-ai-openai-google.html" className="btn-link d-block">https://www.nytimes.com/2023/04/18/technology/reddit-ai-openai-google.html</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-bottom"></div>
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h2 className="text-start mb-0">How it works</h2>
                            </div>
                            <div className="card-body p-0">
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-6 pe-lg-0">
                                        <img src={herobg} alt="Hero bg" className="img-fluid" />
                                    </div>
                                    <div className="col-lg-6 px-5 text-start">
                                        <h3>Upload your digital art work, add a unique fingerprint</h3>
                                        <p>Upload your digital art work, add a unique fingerprint</p>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-6 px-5 text-start">
                                        <h3>Download, and export your original artwork with our invisible fingerprint</h3>
                                        <p>Some more content here explaining how they art is now protected from AI modeling</p>
                                    </div>
                                    <div className="col-lg-6 ps-lg-0">
                                        <img src="src/assets/images/hero-bg.png" alt="Hero bg" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-6 pe-lg-0">
                                        <img src="src/assets/images/hero-bg.png" alt="Hero bg" className="img-fluid" />
                                    </div>
                                    <div className="col-lg-6 px-5 text-start">
                                        <h3>Stay protected and prove your ownership</h3>
                                        <p>After securing your digital intellectual property, you’re able to verify and prove an AI model has utilized your art by uploading to our system and verifying your fingerprint matches the stolen work</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="learn-more-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h2 className="text-white mb-4">Learn more</h2>
                        <div className="d-lg-flex gap-2 d-grid">
                                <a className="btn btn-outline-info w-100" href="#" role="button">Watch how it works</a>
                                <a className="btn btn-info w-100" href="#" role="button">Try a demo</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default IndexPage
