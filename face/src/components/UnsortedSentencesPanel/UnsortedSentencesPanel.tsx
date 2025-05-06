import React from 'react'
import { useSentencesStore } from '../../sentencesData/sentencesStore.ts'
import BigTextarea from '../common/BigTextarea/BigTextarea.tsx'
import { useGetOnUnsortedSentencesTextareaChange } from './fn/onChange.ts'

function UnsortedSentencesPanel() {
	const unsortedSentences = useSentencesStore((s) => s.unsortedSentences)
	const changeTextarea = useGetOnUnsortedSentencesTextareaChange()

	return <BigTextarea value={unsortedSentences} onChange={changeTextarea} />
}

export default UnsortedSentencesPanel
