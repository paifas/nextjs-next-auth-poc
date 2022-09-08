import React from 'react';
import { useSession } from 'next-auth/react';

const Profile = () => {
	const { data: session, status } = useSession();

	if (status === 'authenticated') {
		return <p>Welcome back {session.user.email} </p>;
	}
	return <div className="text-4xl">Hello visitor!!!</div>;
};

export default Profile;
