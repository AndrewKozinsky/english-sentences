import React from 'react'
import AddTopicButton from '../AddTopicButton/AddTopicButton.tsx'
import TopicsList from '../TopicsList/TopicsList.tsx'
import './TopicsPanel.scss'

function TopicsPanel() {
	return (
		<div className='topics-panel'>
			<TopicsList />
			<AddTopicButton />
		</div>
	)
}

export default TopicsPanel
