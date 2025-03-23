import BigTextarea from '../common/BigTextarea/BigTextarea.tsx'
import SitePanel from '../SitePanel/SitePanel.tsx'
import './css/global.scss'
import './css/app.scss'

function App() {
	return (
		<div className='app'>
			<SitePanel>
				<BigTextarea value='3333' />
			</SitePanel>
			<SitePanel>
				<p>2</p>
			</SitePanel>
			<SitePanel>
				<BigTextarea value='5555' />
			</SitePanel>
		</div>
	)
}

export default App
