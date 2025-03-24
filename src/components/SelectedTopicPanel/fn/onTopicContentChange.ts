import React, { useCallback } from 'react'
import { sentencesLogic } from '../../../sentencesData/sentencesLogic.ts'

export function useGetOnTopicContentChange() {
	return useCallback(function (e: React.ChangeEvent<HTMLTextAreaElement>) {
		const newContent = e.currentTarget.value

		sentencesLogic.changeTopicContent(newContent)
	}, [])
}
