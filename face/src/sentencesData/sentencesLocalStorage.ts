import { Topics } from './sentencesTypes.ts'

const lsKeyNames = {
	unsorted: 'unsorted',
	topics: 'topics',
} as const

// Type of all values
type LsKeyNamesValues = (typeof lsKeyNames)[keyof typeof lsKeyNames]

export const sentencesLocalStorage = {
	getUnsortedSentences(): string {
		return sentencesLocalStorage.getData<string>(lsKeyNames.unsorted) || ''
	},
	saveUnsortedSentences(sentences: string) {
		sentencesLocalStorage.saveData(lsKeyNames.unsorted, sentences)
	},
	getTopics() {
		return sentencesLocalStorage.getData<Topics>(lsKeyNames.topics) || []
	},
	saveTopics(topics: Topics) {
		sentencesLocalStorage.saveData(lsKeyNames.topics, topics)
	},
	saveData(keyName: LsKeyNamesValues, data: any) {
		try {
			localStorage.setItem(keyName, JSON.stringify(data))
		} catch (err: unknown) {
			alert(err)
		}
	},
	getData<T>(keyName: LsKeyNamesValues): T {
		const topicsFromLocalStorage = localStorage.getItem(keyName)
		return topicsFromLocalStorage ? JSON.parse(topicsFromLocalStorage) : null
	},
}
