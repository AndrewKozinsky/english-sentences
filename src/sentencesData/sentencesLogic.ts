import { moveElementInArray } from '../utils/array.ts'
import { useSentencesStore } from './sentencesStore.ts'
import { Topic } from './sentencesTypes.ts'

export const sentencesLogic = {
	changeUnsortedSentence(newText: string) {
		useSentencesStore.getState().setUnsortedSentences(newText)
	},
	addTopic(topicName: string) {
		const allTopicsCopy = [...useSentencesStore.getState().topics]

		allTopicsCopy.push({
			index: allTopicsCopy.length,
			topicName,
			isTopicNameEditable: false,
			content: '',
		})

		useSentencesStore.getState().setTopics(allTopicsCopy)
	},
	makeTopicNameEditable(topicIndex: number) {
		sentencesLogic.editTopic(topicIndex, 'isTopicNameEditable', true)
	},
	finishTopicNameEditing(topicIndex: number) {
		sentencesLogic.editTopic(topicIndex, 'isTopicNameEditable', false)
	},
	changeTopicName(topicIndex: number, newName: string) {
		sentencesLogic.editTopic(topicIndex, 'topicName', newName)
	},
	changeTopicContent(newContent: string) {
		const selectedTopic = sentencesLogic.getSelectedTopic()
		if (!selectedTopic) {
			throw new Error('Unknown selected topic')
		}

		sentencesLogic.editTopic(selectedTopic.index, 'content', newContent)
	},
	selectTopic(topicIndex: number) {
		useSentencesStore.setState({ selectedTopicIndex: topicIndex })
	},
	editTopic<T extends keyof Topic>(topicIndex: number, topicKey: T, topicKeyValue: Topic[T]) {
		const allTopicsCopy = [...useSentencesStore.getState().topics]

		const topicIdx = allTopicsCopy.findIndex((topic) => topic.index === topicIndex)
		if (topicIdx === -1) {
			throw new Error('Unknown topic index')
		}

		const topicCopy = { ...allTopicsCopy[topicIdx] }
		topicCopy[topicKey] = topicKeyValue

		allTopicsCopy[topicIdx] = topicCopy

		useSentencesStore.getState().setTopics(allTopicsCopy)
	},
	getSelectedTopic() {
		const { topics, selectedTopicIndex } = useSentencesStore.getState()

		return topics.find((topic) => topic.index === selectedTopicIndex)
	},
	useGetSelectedTopic() {
		const selectedTopicIndex = useSentencesStore((s) => s.selectedTopicIndex)
		const topics = useSentencesStore((s) => s.topics)

		return topics.find((topic) => topic.index === selectedTopicIndex)
	},
	moveTopic(topicIndex: number, direction: 'up' | 'down') {
		const allTopicsCopy = [...useSentencesStore.getState().topics]

		const topicIdx = allTopicsCopy.findIndex((topic) => topic.index === topicIndex)
		const newTopicIdx = direction === 'up' ? topicIdx - 1 : topicIdx + 1

		moveElementInArray(allTopicsCopy, topicIdx, newTopicIdx)

		useSentencesStore.getState().setTopics(allTopicsCopy)
	},
}
