import Logo from './Logo';

const friendIcon = (
	<svg
		className='w-8 h-8 text-cyan-700'
		fill='none'
		stroke='currentColor'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
		></path>
	</svg>
);

const newsIcon = (
	<svg
		className='w-8 h-8 text-cyan-700'
		fill='none'
		stroke='currentColor'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
		/>
	</svg>
);

const shoppingIcon = (
	<svg
		className='w-8 h-8 text-cyan-700'
		fill='none'
		stroke='currentColor'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
		/>
	</svg>
);

const videoIcon = (
	<svg
		className='w-8 h-8 text-cyan-700'
		fill='none'
		stroke='currentColor'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z'
		/>
	</svg>
);

const NavBar = () => {
	return (
		<>
			<div className="flex justify-between items-center nav">
				<Logo />
				<ul className="flex space-x-4">
					<li>{friendIcon}</li>
					<li>{newsIcon}</li>
					<li>{shoppingIcon}</li>
					<li>{videoIcon}</li>
				</ul>
			</div>
		</>
	);
};

export default NavBar;
