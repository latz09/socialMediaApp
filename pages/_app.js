import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<div className="min-h-full p-2">
			<div className="h-screen flex flex-col">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</div>
		</div>
	);
}

export default MyApp;
