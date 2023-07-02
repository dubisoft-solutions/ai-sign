import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export interface IUploadFileBtn {
    fileStringUrl: string;
}

const UploadFileBtn = (props: IUploadFileBtn) => {
    const handleDownloadEncodedImageClick = (e: any) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = props.fileStringUrl;
        link.download = 'watermark.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <button className='btn btn-success' onClick={(e) => handleDownloadEncodedImageClick(e)}>
            <span>Export your content</span>
            <FontAwesomeIcon icon={faDownload} className='ms-3' />
        </button>
    )
}

export default UploadFileBtn;