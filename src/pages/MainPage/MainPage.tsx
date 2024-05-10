import React, { useState } from 'react'
import { Header } from '../../components/UI/Header/Header'
import { SCMainPage } from './MainPage.styled'
import { useGetallAreasByIdQuery } from '../../store/api/bigAreasApi'

const MatchCard = ({ match }) => {
	const [isFavorite, setIsFavorite] = useState(false)

	const saveMatchToLocalStorage = (data: any) => {
		const favorites = JSON.parse(localStorage.getItem('favorites')) || []
		favorites.push(data)
		localStorage.setItem('favorites', JSON.stringify(favorites))
	}

	const handleToggleFavorite = () => {
		setIsFavorite(!isFavorite)
		saveMatchToLocalStorage(match)
	}

	const getScoreBackgroundColor = (home: number, away: number) => {
		if (home > away) {
			return 'green'
		} else if (home < away) {
			return 'red'
		} else {
			return 'grey'
		}
	}

	return (
		<div className='match-card'>
			<div className='team'>
				<img src={match.teams.home.logo} alt='' />
				<p>{match.teams.home.name}</p>
				<span
					style={{
						backgroundColor: getScoreBackgroundColor(
							match.goals.home,
							match.goals.away
						),
					}}
				>
					{match.goals.home}
				</span>
			</div>
			<div className='details'>
				<p>{match.league.name}</p>
				<p>{match.league.country}</p>
				<p>{match.fixture.date}</p>
				<p>{match.fixture.referee}</p>
				<p>{match.fixture.venue.city}</p>
			</div>
			<div className='team'>
				<span
					className='goals-1'
					style={{
						backgroundColor: getScoreBackgroundColor(
							match.goals.away,
							match.goals.home
						),
					}}
				>
					{match.goals.away}
				</span>
				<img src={match.teams.away.logo} alt='' />
				<p>{match.teams.away.name}</p>
				<span
					className='goals-2'
					style={{
						backgroundColor: getScoreBackgroundColor(
							match.goals.away,
							match.goals.home
						),
					}}
				>
					{match.goals.away}
				</span>
			</div>
			<button className='button' onClick={handleToggleFavorite}>
				{isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
			</button>
		</div>
	)
}

export const MainPage = () => {
	const { data } = useGetallAreasByIdQuery('')

	return (
		<SCMainPage>
			<Header />
			<aside className='LeftSide'></aside>
			<main className='Main'></main>
			<div className='Matches'>
				<h1>Список матчей</h1>
				{!!data?.response &&
					data.response.length &&
					data?.response.map(match => (
						<div className='block-matches' key={match.id}>
							<MatchCard match={match} />
						</div>
					))}
			</div>
			<aside className='RightSide'></aside>
		</SCMainPage>
	)
}
