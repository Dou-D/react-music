import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

type Props = {
	children?: ReactNode
}

const Discover: FC<Props> = () => {
	return (
		<>
			<div>
				<Link to="/discover/recommend">推荐</Link>
				<Link to="/discover/ranking">排行榜</Link>
				<Link to="/discover/artist">歌单</Link>
				<Link to="/discover/djradio">主播电台</Link>
				<Link to="/discover/songs">歌手</Link>
				<Link to="/discover/albumn">新碟上架</Link>
			</div>
			<Suspense fallback="loading...">
				<Outlet />
			</Suspense>
		</>
	)
}

export default memo(Discover)
