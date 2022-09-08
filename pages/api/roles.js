import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
	const session = await getSession({ req });
	if (!session) {
		return res.status(401).json({ error: 'Not authenticated' });
	}

	if (req.method === 'GET') {
		const { email } = req.query;
		if (email !== 'test@user.com') {
			return res.status(403).json({ error: 'Not allowed' });
		}

		return res.status(200).json({
			roles: ['admin', 'user', 'manager'],
		});
	}

	return res.status(400).json({ error: 'Method not allowed' });
};

export default handler;
