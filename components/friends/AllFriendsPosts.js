//pull data from here and then use props to render individual post elements

import PostItem from './PostItem';
import avatar from '../../public/images/avatar.svg';
import NewPostButton from '../utils/NewPostButton';

const posts = [
	{
		id: 1,
		avatar: avatar,
		name: 'Jordan',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat.',
		date: '11/26/2019',
	},
	{
		id: 2,
		avatar: avatar,
		name: 'Emily',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat.',
		date: '11/26/2019',
	},
	{
		id: 3,
		avatar: avatar,
		name: 'Kenny',
		content: 'Lorem ipsum dolor sit amet.',
		date: '11/26/2019',
	},
];

const AllFriendsPosts = () => {
	return (
		<>
			<div>
				<NewPostButton />
			</div>
			<div className='grid gap-12'>
				{posts.map((post) => (
					<PostItem
						key={post.id}
						image={post.avatar}
						name={post.name}
						date={post.date}
						content={post.content}
					/>
				))}
			</div>
		</>
	);
};

export default AllFriendsPosts;
