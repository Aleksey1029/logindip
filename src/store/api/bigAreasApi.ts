import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apihost, apikey, baseUrl } from './baseUrl'
import { IGetCountriesResponse, IGetMatchesResponse } from './types'

export const bigAreasApi = createApi({
	reducerPath: 'bigAreasApi',
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
		prepareHeaders: headers => {
			headers.set('X-RapidAPI-Key', apikey)
			headers.set('X-RapidAPI-Host', apihost)
			return headers
		},
	}),
	endpoints: builder => ({
		getCountries: builder.query<IGetCountriesResponse, any>({
			query: () => ({
				url: '/countries',
			}),
		}),
		getallAreasById: builder.query<IGetMatchesResponse, any>({
			query: (h2h) => ({
				url: '/fixtures/headtohead',
				params: {
                    h2h: "33-34",
                },
			}),
		}),
	}),
})

export const { useGetallAreasByIdQuery, useGetCountriesQuery } = bigAreasApi
