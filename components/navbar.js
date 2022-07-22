import Link from 'next/link';
import React from 'react';

const NavBar = () => {
	const logout = () => {
		console.log('logout');
	};

	return (
		<header className="w-screen h-15 flex justify-center bg-gray-800">
			<nav className="w-8/12 flex justify-between text-gray-200 m-auto text-lg">
				<div className="cursor-pointer hover:text-white p-5 ">
					<Link href="/">Home</Link>
				</div>
				<ul className="flex space-x-12">
					<li className="cursor-pointer hover:text-white py-5 hover:underline">
						<Link className="text-gray-800" href="/auth">
							Login
						</Link>
					</li>
					<li className="cursor-pointer hover:text-white py-5 hover:underline">
						<Link href="/profile">Profile</Link>
					</li>
					<li>
						<button
							className="cursor-pointer hover:text-white hover:bg-gray-600 p-5"
							onClick={logout}
						>
							Logout
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
