import React from "react";
import { Document, Page } from "react-pdf";

const ResumeViewer = ({ pdfUrl }) => {
  return (
    <div className="resume-viewer">
      <Document
        file={pdfUrl}
        onLoadError={(error) => console.error("PDF load error:", error)}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default ResumeViewer;
