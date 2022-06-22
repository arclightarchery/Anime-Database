import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navigation from '../components/navigation';
import myContext from '../myContext';
import { useEffect, useState } from 'react';
import AnimeList from '../components/animelist';

let season = {
	Winter: [1, 2, 3],
	Spring: [4, 5, 6],
	Summer: [7, 8, 9],
	Fall: [10, 11, 12],
};

export default function Home() {
	let date = new Date();
	const [currentMonth, setCurrentMonth] = useState(date.getMonth() + 1);
	const [currentYear, setCurrentYear] = useState(date.getFullYear());
	const [currentSeason, setCurrentSeason] = useState();

	useEffect(() => {
		for (let i in season) {
			if (season[i].includes(currentMonth))
				setCurrentSeason(i);
		}
	}, [currentMonth]);

	return (
		<myContext.Provider
			value={{
				currentMonth: currentMonth,
				setCurrentMonth: setCurrentMonth,
				currentYear: currentYear,
				setCurrentYear: setCurrentYear,
				currentSeason: currentSeason,
				setCurrentSeason: setCurrentSeason,
			}}>
			<div className={styles.container}>
				<Head>
					<title>Home</title>
					<meta
						name='description'
						content='Generated by create next app'
					/>
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<main>
					<Navigation />
					<AnimeList />
				</main>
			</div>
		</myContext.Provider>
	);
}
