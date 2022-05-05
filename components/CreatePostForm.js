import { useRouter } from 'next/router';
import { useRef } from 'react';

const CreatePostForm = () => {
	const postText = useRef();
    const router = useRouter()

    function handleSubmit(event) {
        router.push('/')        
        event.preventDefault()
     
        const text = postText.current.value
        console.log(text)
        
    }

	return (
		<>
			<div className='pt-12'>
				<form onSubmit={handleSubmit}>
					<div className='grid gap-4 justify-items-center border-2 border-cyan-200 shadow-lg bg-cyan-100'>
						<h1 className='text-2xl tracking-wide mt-6 text-cyan-700 font-bold'>
							Create a new Post
						</h1>
						<label htmlFor='message'></label>
						<textarea
							id='message'
							rows='4'
							className='block p-2.5 mx-auto w-2/3 text-sm text-gray-900 bg-cyan-200 rounded-lg border-2 border-cyan-400 focus:ring-blue-500 focus:border-blue-500 '
							placeholder='Create a post'
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
