import AllFriendsPosts from "../components/friends/AllFriendsPosts";

const HomePage = () => {
	return (
		<div className="m-8 uppercase tracking-widest text-center text-2xl text-cyan-700 font-semibold">
			<h1 className="pb-12">Friends Feed</h1>
			<AllFriendsPosts />
		</div>
        
	);
};

export default HomePage;
