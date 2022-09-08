import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const AuthForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLogin, setIsLogin] = useState(true);

	const router = useRouter();

	const submitHandler = async e => {
		e.preventDefault();
		const result = await signIn('credentials', {
			redirect: false,
			email: email,
			password: password,
		});

		if (result.error) {
			alert(result.error);
		}
		if (!result.error) {
			router.replace('/profile');
		}
	};

	const createUser = async () => {};

	return (
		<form
			className="max-w-md w-full space-y-8 flex flex-col justify-center"
			onSubmit={submitHandler}
		>
			<div>
				<div>
					<h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						{isLogin ? 'Sign in to your account' : 'Register your account'}
					</h1>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{' '}
						<span
							onClick={() => setIsLogin(!isLogin)}
							className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
						>
							{!isLogin ? 'Sign in to your account' : 'Register your account'}
						</span>
					</p>
				</div>
				<div className="mt-8 space-y-6">
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="User Name"
								required
								className="relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Username"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
					</div>
					{isLogin && (
						<button
							type="submit"
							className="py-2 px-4 w-full font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Sign in
						</button>
					)}
					{!isLogin && (
						<button
							type="button"
							onClick={createUser}
							className="py-2 px-4 w-full font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Create User
						</button>
					)}
				</div>
			</div>
		</form>
	);
};

export default AuthForm;
