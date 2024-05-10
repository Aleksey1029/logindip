import React from 'react'
import { Header } from '../../components/UI/Header/Header'
import { SCMainPage } from './MainPage.styled'
import { useGetallAreasByIdQuery } from '../../store/api/bigAreasApi'

export const MainPage = () => {
	const { data } = useGetallAreasByIdQuery('')

	const getScoreBackgroundColor = (home, away) => {
		if (home > away) {
			return 'green'
		} else if (home < away) {
			return 'red'
		} else {
			return 'grey'
		}
	}

	const isMatchInFavorites = (match) => {
		const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
		return favorites.some(favoriteMatch => favoriteMatch.id === match.id)
	}

	const toggleFavorite = (match) => {
		const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
		const isMatchFavorite = isMatchInFavorites(match)

		if (isMatchFavorite) {
			// Удаляем матч из избранного
			const updatedFavorites = favorites.filter(
				favoriteMatch => favoriteMatch.id !== match.id
			)
			localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
		} else {
			// Добавляем матч в избранное
			favorites.push(match)
			localStorage.setItem('favorites', JSON.stringify(favorites))
		}
	}

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
								<button className='buton' onClick={() => toggleFavorite(match)}>
									{isMatchInFavorites(match)
										? 'Удалить из избранного'
										: 'Добавить в избранное'}
								</button>
							</div>
						</div>
					))}
			</div>
			<aside className='RightSide'></aside>
		</SCMainPage>
	)
}
