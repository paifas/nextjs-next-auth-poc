import React from 'react';
import Head from 'next/head';
import NavBar from './navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<main className="flex justify-center p-10">{children}</main>
			<div className="flex justify"></div>
		</>
	);
};

export default Layout;