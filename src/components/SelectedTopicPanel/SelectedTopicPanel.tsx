import { Input } from 'antd'
import React from 'react'
import { sentencesLogic } from '../../sentencesData/sentencesLogic.ts'
import { useGetOnTopicContentChange } from './fn/onTopicContentChange.ts'

const { TextArea } = Input

function SelectedTopicPanel() {
	const selectedTopic = sentencesLogic.useGetSelectedTopic()

	const onTopicNameChange = useGetOnTopicContentChange()

	if (!selectedTopic) return null

	return <TextArea value={selectedTopic.content} onChange={onTopicNameChange} />
}

export default SelectedTopicPanel
