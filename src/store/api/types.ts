export interface ICountries {
	name: string
	code: string
	flag: string
}

export interface IGetCountriesResponse {
	results: number
	response: ICountries[]
}

export interface MatchItem {
	id: Key | null | undefined
	fixture: {
		id: number
		referee: string
		timezone: string
		date: string
		venue: {
			id: number
			name: string
			city: string
		}
		status: {
			long: string
			short: string
		}
	}
	league: {
		id: number
		name: string
		country: string
		logo: string
		flag: string
		season: number
		round: string
	}
	teams: {
		home: {
			id: number
			name: string
			winner: boolean
			logo: string
		}
		away: {
			id: number
			name: string
			winner: boolean
			logo: string
		}
	}
	goals: {
		home: number
		away: number
	}
	score: {
		fulltime: {
			home: number
			away: number
		}
	}
}

export interface IGetMatchesResponse {
    results: number
    response: MatchItem[]
}