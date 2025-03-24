import React from 'react'
import './BigTextarea.scss'

type BigTextareaProps = {
	value: string
	onChange: (value: string) => void
}

function BigTextarea(props: BigTextareaProps) {
	const { value, onChange } = props

	return <textarea value={value} onChange={(e) => onChange(e.target.value)} className='big-textarea' />
}

export default BigTextarea
