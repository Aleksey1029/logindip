import { Header } from '../../components/UI/Header/Header'
import './MainPage.scss'
import { SCMainPage } from './MainPage.styled'
import { useGetallAreasByIdQuery } from '../../store/api/bigAreasApi'

export const MainPage = () => {
	const { data } = useGetallAreasByIdQuery('')
	console.log(data)

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
						<div className='block-matches'>
							<div key={match.id} className='match-card'>
								<div className='team'>
									<img src={match.teams.home.logo} alt='' />
									<p>{match.teams.home.name}</p>
								</div>
								<div className='details'>
									<p>{match.league.country}</p>
									<p>{match.league.season}</p>
								</div>
								<div className='team'>
									<img src={match.teams.away.logo} alt='' />
									<p>{match.teams.away.name}</p>
								</div>
							</div>
						</div>
					))}
			</div>
			<aside className='RightSide'></aside>
		</SCMainPage>
	)
}
