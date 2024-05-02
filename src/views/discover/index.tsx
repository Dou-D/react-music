import React from 'react'
import Download from '@/views/download'

export const myContent = React.createContext('')
const discover = () => {
	return (
		<myContent.Provider value="1">
			<Download />
		</myContent.Provider>
	)
}

export default discover
