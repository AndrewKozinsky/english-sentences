import React from 'react'
import './BigTextarea.scss'

type BigTextareaProps = {
	value: string
	onChange: (value: string) => void
	ref?: React.Ref<HTMLTextAreaElement>
}

function BigTextarea(props: BigTextareaProps) {
	const { value, onChange, ref } = props

	return <textarea value={value} onChange={(e) => onChange(e.target.value)} className='big-textarea' ref={ref} />
}

export default BigTextarea
