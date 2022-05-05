import Image from 'next/image';
import HomePage from '../../pages';


const PostItem = ({image, name, date, content}) => {
	return (
		<>
			<div className="border-2 border-cyan-300 shadow-md shadow-cyan-100 p-4 hover:shadow-md hover:shadow-cyan-200">
				<div className="flex justify-between items-center pb-4">
					<Image src={image} alt='Picture of user' width={35} height={35} />
					<p className='text-base font-semibold'>{name}</p>
					<span className='text-xs'>{date}</span>
				</div>
				<div>
					<p className='text-xs text-left leading-6'>
					{content}
					</p>
				</div>				
			</div>
            
		</>
	);
};

export default PostItem;



// make a database of posts with mongodb
//need a create new post button?

//render database posts on friends feed








