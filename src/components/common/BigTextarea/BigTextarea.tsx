import React from 'react'

type BigTextareaProps = {
	value: string
}

function BigTextarea(props: BigTextareaProps) {
	const { value } = props

	return <textarea defaultValue={value} />
}

export default BigTextarea
