import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import { shallowEqual, useDispatch } from 'react-redux'
import routes from '@/router'
import { useAppSelector } from './store'
import { ChangeCount } from './store/modules/counter'
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-cyan/theme.css'

function App() {
	const dispatch = useDispatch()
	const handleCount = () => {
		dispatch(ChangeCount(1))
	}

	const { name, count } = useAppSelector((state) => ({
		name: state.counter.name,
		count: state.counter.count
	}), shallowEqual)
	return (
		<div className="App">
			<Button label="Submit" />
			<button onClick={handleCount}>+1</button>
			<div className="nav">
				<Link to="/discover">发现音乐</Link>
				<Link to="/mine">我的音乐</Link>
				<Link to="/focus">关注</Link>
				<Link to="/download">下载客户端</Link>
			</div>
			<div>count: {count}</div>
			<div>name: {name}</div>
			<Suspense fallback="loading...">
				<div className="main">{useRoutes(routes)}</div>
			</Suspense>
		</div>
	)
}

export default App
