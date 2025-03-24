import { useCallback } from 'react'
import { sentencesLogic } from '../../../../sentencesData/sentencesLogic.ts'

export function useGetAddTopic() {
	return useCallback(function () {
		sentencesLogic.addTopic('New topic')
	}, [])
}
