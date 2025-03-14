import React from "react";

const PdfViewer = ({pdfUrl}) => {
    return (
        <div className="pdf-container d-flex justify-content-center align-items-center">
            <iframe
                src={pdfUrl}
                width="80%"
                height="90%"
                className="pdf-iframe"
                title="PDF Viewer"
            ></iframe>
        </div>
    );
}; 

export default PdfViewer;
