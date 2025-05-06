import React from 'react'
import { Button } from 'antd'
import { useGetAddTopic } from './fn/addNewTopic.ts'

function AddTopicButton() {
	const addTopic = useGetAddTopic()

	return <Button onClick={addTopic}>Добавить тему</Button>
}

export default AddTopicButton
