import { create } from 'zustand'
import { debounce } from '../utils/debounce.ts'
import { sentencesLocalStorage } from './sentencesLocalStorage.ts'
import { SentencesStore, Topics } from './sentencesTypes.ts'

const debouncedSaveUnsortedSentences = debounce((unsortedSentences: string) => {
	sentencesLocalStorage.saveUnsortedSentences(unsortedSentences)
}, 10000)

const debouncedSaveTopics = debounce((topics: Topics) => {
	sentencesLocalStorage.saveTopics(topics)
}, 10000)

export const useSentencesStore = create<SentencesStore>()((set) => {
	return {
		selectedTopicIndex: null,
		unsortedSentences: sentencesLocalStorage.getUnsortedSentences(),
		setUnsortedSentences(unsortedSentences: string) {
			set(() => {
				debouncedSaveUnsortedSentences(unsortedSentences)
				return { unsortedSentences }
			})
		},

		topics: sentencesLocalStorage.getTopics(),
		setTopics(topics: Topics) {
			set(() => {
				debouncedSaveTopics(topics)
				return { topics }
			})
		},
	}
})
