import SelectedTopicPanel from '../SelectedTopicPanel/SelectedTopicPanel.tsx'
import SitePanel from '../SitePanel/SitePanel.tsx'
import TopicsPanel from '../topicsPanel/TopicsPanel/TopicsPanel.tsx'
import UnsortedSentencesPanel from '../UnsortedSentencesPanel/UnsortedSentencesPanel.tsx'
import './css/global.scss'
import './css/app.scss'

function App() {
	return (
		<div className='app'>
			<SitePanel>
				<UnsortedSentencesPanel />
			</SitePanel>
			<SitePanel>
				<TopicsPanel />
			</SitePanel>
			<SitePanel>
				<SelectedTopicPanel />
			</SitePanel>
		</div>
	)
}

export default App
