import { useCallback } from 'react'
import { sentencesLogic } from '../../../sentencesData/sentencesLogic.ts'

export function useGetOnTopicContentChange() {
	return useCallback(function (newText: string) {
		if (!newText.endsWith('\n')) {
			newText += '\n'
		}

		sentencesLogic.changeTopicContent(newText)
	}, [])
}

export function adjustTextarea(textarea: HTMLTextAreaElement) {
	// Add newline if the last character isn't a newline
	if (!textarea.value.endsWith('\n')) {
		textarea.value += '\n'
	}

	// Scroll to bottom
	textarea.scrollTop = textarea.scrollHeight

	// Focus the textarea and set the cursor at the end
	textarea.focus()
	const end = textarea.value.length
	textarea.setSelectionRange(end, end)
}
