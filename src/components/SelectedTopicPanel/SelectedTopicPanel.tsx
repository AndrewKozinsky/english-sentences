import React, { useEffect, useRef } from 'react'
import { sentencesLogic } from '../../sentencesData/sentencesLogic.ts'
import BigTextarea from '../common/BigTextarea/BigTextarea.tsx'
import { adjustTextarea, useGetOnTopicContentChange } from './fn/onTopicContentChange.ts'

function SelectedTopicPanel() {
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const selectedTopic = sentencesLogic.useGetSelectedTopic()

	const onTopicContentChange = useGetOnTopicContentChange()

	useEffect(
		function () {
			const $textarea = textareaRef.current
			if (!$textarea) return

			adjustTextarea($textarea)
		},
		[textareaRef.current, selectedTopic],
	)

	if (!selectedTopic) return null

	return <BigTextarea value={selectedTopic.content} onChange={onTopicContentChange} ref={textareaRef} />
}

export default SelectedTopicPanel
