import UploadClaim from "~/components/UploadClaim.tsx";
import {Link} from "react-router-dom";

export default function MainPage() {
  return (
    <div className="flex h-full text-sm text-gray-400 text-center flex-col">
        <Link to={'/files'} className="text-blue-600 hover:text-blue-800 font-semibold">Files</Link>
        <UploadClaim />
    </div>
  );
}