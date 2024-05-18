import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Albumn = lazy(() => import('@/views/discover/c-views/albumn'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))

const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to="/discover" />
	},
	{
		path: '/discover',
		element: <Discover />,
		children: [
			{
				path: '/discover',
				element: <Navigate to="/discover/recommend" />
			},
			{
				path: '/discover/recommend', // 推荐
				element: <Recommend />
			},
			{
				path: '/discover/albumn',
				element: <Albumn />
			},
			{
				path: '/discover/djradio',
				element: <Djradio />
			},
			{
				path: '/discover/artist',
				element: <Artist />
			},
			{
				path: '/discover/ranking',
				element: <Ranking />
			},
			{
				path: '/discover/songs',
				element: <Songs />
			}
		]
	}
]

export default routes
