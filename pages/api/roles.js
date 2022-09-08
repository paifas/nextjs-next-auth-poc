import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
	const session = await getSession(req);
	if (!session) {
		return res.status(401).json({ error: 'Not authenticated' });
	}

	const { email } = req.query;

	if (req.method === 'GET') {
		return res.status(200).json({ data: 'hello ' + email });
	}

	return res.status(400).json({ error: 'Method not allowed' });
};

export default handler;
