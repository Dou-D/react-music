import React, { memo, useState, useEffect } from 'react'
import request from '@/services'
import type { Banner } from './types/banner'

type Props = {}
const Recommend = (props: Props) => {
	const [banners, setBanners] = useState<Banner[]>([])
	useEffect(() => {
		request
			.get({
				url: '/banner'
			})
			.then((res) => {
				setBanners(res.banners)
			})
	}, [])
	return <div>{banners.map(item => {
    return <div key={item.imageUrl}>{item.imageUrl}</div>
  })}</div>
}
  
export default memo(Recommend)
// export default React.memo(Recommend)
