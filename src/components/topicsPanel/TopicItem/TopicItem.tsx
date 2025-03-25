import React from 'react'
import { Button, Input, Typography } from 'antd'
import { EditOutlined, ArrowUpOutlined, ArrowDownOutlined, CheckOutlined } from '@ant-design/icons'
import cn from 'classnames'
import { useSentencesStore } from '../../../sentencesData/sentencesStore.ts'
import { Topic } from '../../../sentencesData/sentencesTypes.ts'
import {
	useGetToggleMakeTopicName,
	useGetOnTopicNameChange,
	useGetOnTopicNameClick,
	useGetMoveTopic,
} from './fn/editTopicItem.ts'
import './TopicItem.scss'

const { Text } = Typography

type TopicItemProps = {
	topicData: Topic
}

function TopicItem(props: TopicItemProps) {
	const { topicData } = props

	return (
		<div className='topic--list-item'>
			<TopicItemName topicData={topicData} />
			<div className='topic--list-item__buttons'>
				<EditNameButton topicData={topicData} />
				<MoveUpButton topicData={topicData} />
				<MoveDownButton topicData={topicData} />
			</div>
		</div>
	)
}

export default TopicItem

function TopicItemName(props: TopicItemProps) {
	const { topicData } = props

	const selectedTopicIndex = useSentencesStore((s) => s.selectedTopicIndex)

	const onTopicNameChange = useGetOnTopicNameChange(topicData.index)
	const onTopicNameClick = useGetOnTopicNameClick(topicData.index)

	if (topicData.isTopicNameEditable) {
		return <Input onChange={onTopicNameChange} value={topicData.topicName} />
	}

	const wrapperClasses = cn(
		'topic--list-item__text-button',
		topicData.index === selectedTopicIndex && 'topic--list-item__text-button--selected',
	)

	return (
		<div className={wrapperClasses} onClick={onTopicNameClick}>
			<Text>{topicData.topicName}</Text>
		</div>
	)
}

function EditNameButton(props: TopicItemProps) {
	const { topicData } = props

	const toggleTopicNameEditing = useGetToggleMakeTopicName(topicData)

	return topicData.isTopicNameEditable ? (
		<Button icon={<CheckOutlined onClick={toggleTopicNameEditing} />} />
	) : (
		<Button icon={<EditOutlined onClick={toggleTopicNameEditing} />} />
	)
}

function MoveUpButton(props: TopicItemProps) {
	const { topicData } = props

	const toggleTopicNameEditing = useGetMoveTopic(topicData.index, 'up')

	return <Button icon={<ArrowUpOutlined />} onClick={toggleTopicNameEditing} />
}

function MoveDownButton(props: TopicItemProps) {
	const { topicData } = props

	const toggleTopicNameEditing = useGetMoveTopic(topicData.index, 'down')

	return <Button icon={<ArrowDownOutlined />} onClick={toggleTopicNameEditing} />
}
