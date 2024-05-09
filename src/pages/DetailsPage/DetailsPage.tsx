import { useParams } from 'react-router-dom'
import { useGetallAreasByIdQuery } from '../../store/api/bigAreasApi'
import { Header } from '../../components/UI/Header/Header'

export const DetailsPage = () => {

	return (
		<div>
			<Header />
			<h2>Details for area with ID:</h2>
			
		</div>
	)
}
