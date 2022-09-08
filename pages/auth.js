import React from 'react';
import AuthForm from '../components/auth-form';
import { getSession } from 'next-auth/react';

const Auth = () => {
	return <AuthForm />;
};

export const getServerSideProps = async context => {
	const session = await getSession({ req: context.req });

	if (session) {
		return {
			redirect: {
				destination: '/profile',
				permanent: false,
			},
		};
	}

	return { props: { session } };
};

export default Auth;
