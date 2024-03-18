import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css"
import { MdOutlineFileDownload } from "react-icons/md";
import "./Resume.css"


// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// )
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


// pdfjs.GlobalWorkerOptions.workerSrc = new URL( "pdfjs-dist/build/pdf.worker.min.js", import.meta.url ).toString();


const Resume = () => {
  const fileUrl="./resume.pdf";

  

  return (
    <div className='w-full min-h-[100vh] mt-14 flex flex-col justify-center items-center gap-8 pb-14'>

      <a href={fileUrl} download={fileUrl}><button className='button flex justify-center items-center gap-2 mt-20' >Download Resume 
      <span><MdOutlineFileDownload /></span> </button></a>

      <Document file={fileUrl} className='w-11/12 flex border-2  justify-center items-center max-w-[650px] mx-auto '>
        <Page pageNumber={1} renderAnnotationLayer={false} />
      </Document>
      
    </div>
  );
};

export default Resume;