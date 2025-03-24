import React, { useCallback } from 'react'
import { sentencesLogic } from '../../../../sentencesData/sentencesLogic.ts'
import { Topic } from '../../../../sentencesData/sentencesTypes.ts'

export function useGetToggleMakeTopicName(topic: Topic) {
	return useCallback(
		function () {
			if (topic.isTopicNameEditable) {
				sentencesLogic.finishTopicNameEditing(topic.index)
			} else {
				sentencesLogic.makeTopicNameEditable(topic.index)
			}
		},
		[topic],
	)
}

export function useGetOnTopicNameChange(topicIndex: number) {
	return useCallback(function (e: React.ChangeEvent<HTMLInputElement>) {
		const newName = e.currentTarget.value

		sentencesLogic.changeTopicName(topicIndex, newName)
	}, [])
}

export function useGetOnTopicNameClick(topicIndex: number) {
	return useCallback(function () {
		sentencesLogic.selectTopic(topicIndex)
	}, [])
}
