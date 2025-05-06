import React from 'react'
import { useSentencesStore } from '../../../sentencesData/sentencesStore.ts'
import TopicItem from '../TopicItem/TopicItem.tsx'

function TopicsList() {
	const topicsArr = useSentencesStore((s) => s.topics)

	return (
		<div>
			{topicsArr.map((topicData) => {
				return <TopicItem topicData={topicData} key={topicData.index} />
			})}
		</div>
	)
}

export default TopicsList
