import React from 'react';
import { getSession, useSession } from 'next-auth/react';

const Profile = ({ roles }) => {
	const { data: session, status } = useSession();
	if (status === 'authenticated') {
		return (
			<div>
				<p className="mb-4">
					Welcome back <strong>{session.user.email}</strong> your roles are:
				</p>
				<div>
					{roles.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>
				<p className="mb-4 mt-4">your tags are:</p>
				<div>
					{session.user.tags.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>
			</div>
		);
	}
	return <div className="text-4xl">Hello visitor!!!</div>;
};

export const getServerSideProps = async context => {
	const session = await getSession({ req: context.req });

	if (!session) {
		return { props: {} };
	}

	const myHeaders = new Headers();
	myHeaders.append('Cookie', context.req.headers.cookie);
	const requestOptions = {
		method: 'GET',
		headers: myHeaders,
	};

	const endpoint =
		process.env.API_URL + '/api/roles?email=' + session.user.email;
	const response = await fetch(endpoint, requestOptions);

	const data = await response.json();
	return { props: { roles: data.roles } };
};

export default Profile;
