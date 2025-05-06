export type Topic = {
	index: number
	topicName: string
	isTopicNameEditable: boolean
	content: string
}

export type Topics = Topic[]

export type SentencesStore = {
	selectedTopicIndex: null | number
	unsortedSentences: string
	setUnsortedSentences: (unsortedSentences: string) => void

	topics: Topic[]
	setTopics: (topics: Topic[]) => void
}
