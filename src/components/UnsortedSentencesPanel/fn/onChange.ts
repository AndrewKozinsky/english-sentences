import { useCallback } from 'react'
import { sentencesLogic } from '../../../sentencesData/sentencesLogic.ts'

export function useGetOnUnsortedSentencesTextareaChange() {
	return useCallback(function (newText: string) {
		sentencesLogic.changeUnsortedSentence(newText)
	}, [])
}
