import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div className="text-gray-800">
					<h1 className="text-4xl m4">Welcome to Next.js</h1>
					<div className="ml-10">with next-auth...</div>
				</div>
			</main>
		</div>
	);
}
