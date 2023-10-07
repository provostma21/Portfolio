import React from "react";
import { Document, Page } from "react-pdf";

const ResumeViewer = ({ ResumePDF }) => {
  return (
    <div className="resume-viewer">
      <Document file={ResumePDF}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default ResumeViewer;
