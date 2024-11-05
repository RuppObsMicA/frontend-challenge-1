import UploadClaim from "~/pages/uploadClaim.tsx";
import {Link} from "react-router-dom";

export default function MainPage() {
  return (
    <div className="flex h-full text-sm text-gray-400 text-center flex-col">
        <Link
            to={'/files'}
            className="text-blue-600 hover:text-blue-800 font-semibold text-xl mb-4"
        >
            Go to MRF Files
        </Link>
        <Link
            to={'/approve-claim'}
            className="text-blue-600 hover:text-blue-800 font-semibold text-xl mb-4"
        >
            Go to Approved Claims
        </Link>
        <UploadClaim />
    </div>
  );
}