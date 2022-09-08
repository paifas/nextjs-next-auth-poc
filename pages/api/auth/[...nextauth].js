import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export default NextAuth({
	session: {
		jwt: true,
	},
	secret: 'im a secret',
	providers: [
		Credentials({
			async authorize(credentials) {
				const allowedUser = {
					email: 'test@user.com',
					password: 'Test123',
				};

				const isValid =
					credentials.email === allowedUser.email &&
					credentials.password == allowedUser.password;

				if (!isValid) {
					throw new Error('Invalid credentials');
				}

				return {
					email: allowedUser.email,
					name: 'test user',
					image: 'http://someurl.com/mypic.jpg',
					extra: 'i wont appear at session',
				};
			},
		}),
	],
	callbacks: {
		async session({ session, token }) {
			session.user.tags = ['FE', 'BE', 'FS'];
			return session;
		},
	},
});
