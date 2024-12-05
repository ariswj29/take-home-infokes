import {
  BsFileEarmark,
  BsFileEarmarkBinary,
  BsFileEarmarkImage,
  BsFileEarmarkPdf,
  BsFileEarmarkSpreadsheet,
  BsFileEarmarkText,
  BsFolder,
} from "react-icons/bs";

export default function IconFile({ type }: { type: string }) {
  switch (type) {
    case "folder":
      return <BsFolder className="text-blue-500 text-4xl mb-4" size={50} />;
    case "exe":
      return (
        <BsFileEarmarkBinary
          className="text-blue-500 text-4xl mb-4"
          size={50}
        />
      );
    case "pdf":
      return (
        <BsFileEarmarkPdf className="text-blue-500 text-4xl mb-4" size={50} />
      );
    case "png":
      return (
        <BsFileEarmarkImage className="text-blue-500 text-4xl mb-4" size={50} />
      );
    case "xlsx":
      return (
        <BsFileEarmarkSpreadsheet
          className="text-blue-500 text-4xl mb-4"
          size={50}
        />
      );
    case "docx":
      return (
        <BsFileEarmarkText className="text-blue-500 text-4xl mb-4" size={50} />
      );
    default:
      return (
        <BsFileEarmark className="text-blue-500 text-4xl mb-4" size={50} />
      );
  }
}
