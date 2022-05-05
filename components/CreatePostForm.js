import { useRouter } from 'next/router';
import { useRef } from 'react';

const CreatePostForm = () => {
	const postText = useRef();
    const userName = useRef()


	const router = useRouter();

	function handleSubmit(event) {
		router.push('/');
		event.preventDefault();
		const text = postText.current.value;
        const name = userName.current.value

        

	}

	//

	return (
		<>
			<div className='pt-12'>
				<form onSubmit={handleSubmit}>
					<div className='grid gap-2 justify-items-center border-2 border-cyan-200 shadow-lg bg-cyan-100'>
						<h1 className='text-2xl tracking-wide my-6 text-cyan-700 font-bold'>
							Create a new Post
						</h1>
						<label htmlFor='name'></label>
						<input type='text' placeholder='Your name...' className='form-inputs' />
						<label htmlFor='message'></label>
						<textarea
							id='message'
							rows='4'
							className='p-2.5 w-2/3 form-inputs'
							placeholder='Create a post...'
							ref={postText}
						></textarea>
						<button className='btn self-center bg-cyan-300 text-cyan-800 font-semibold tracking-widest'>
							POST
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default CreatePostForm;
