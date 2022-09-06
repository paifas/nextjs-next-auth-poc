import '../styles/globals.css';
import Layout from '../components/layout';
import { SessionProvider } from 'next-auth/react';

const MyApp = ({ Component, pageProps }) => {
	return (
		<SessionProvider session={pageProps.session}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
};

export default MyApp;
