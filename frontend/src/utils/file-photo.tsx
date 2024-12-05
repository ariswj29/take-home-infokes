import {
  BsFileEarmark,
  BsFileEarmarkBinary,
  BsFileEarmarkImage,
  BsFileEarmarkPdf,
  BsFileEarmarkSpreadsheet,
  BsFileEarmarkText,
  BsFolder,
} from "react-icons/bs";

export default function FilePhoto({ path }: { path: string }) {
  switch (path) {
    case "icon-folder.png":
      return <BsFolder className="text-blue-500 text-4xl mb-4" size={50} />;
    case "icon-exe.png":
      return (
        <BsFileEarmarkBinary
          className="text-blue-500 text-4xl mb-4"
          size={50}
        />
      );
    case "icon-pdf.png":
      return (
        <BsFileEarmarkPdf className="text-blue-500 text-4xl mb-4" size={50} />
      );
    case "icon-png.png":
      return (
        <BsFileEarmarkImage className="text-blue-500 text-4xl mb-4" size={50} />
      );
    case "icon-xlsx.png":
      return (
        <BsFileEarmarkSpreadsheet
          className="text-blue-500 text-4xl mb-4"
          size={50}
        />
      );
    case "icon-docx.png":
      return (
        <BsFileEarmarkText className="text-blue-500 text-4xl mb-4" size={50} />
      );
    default:
      return (
        <BsFileEarmark className="text-blue-500 text-4xl mb-4" size={50} />
      );
  }
}
