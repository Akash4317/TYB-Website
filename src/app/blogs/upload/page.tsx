import { Metadata } from 'next';
import UploadForm from './form';

export const generateMetadata = (): Metadata => {
	return {
		title: "Upload Blogs - The Yarn Bazaar",
		description: "Upload blogs to The Yarn Bazaar.",
	};
};
const UploadPage: React.FC = () => {

	return (
		<UploadForm />
	);
};


export default UploadPage;