import { useRouter } from 'next/router';

const NewPostButton = () => {
	const router = useRouter();

	const handleClick = (event) => {
		event.preventDefault();
		router.push('/new-post');
	};

	return (
		<button className='btn btn-newpost' onClick={handleClick}>
			Create New Post
		</button>
	);
};

export default NewPostButton;
