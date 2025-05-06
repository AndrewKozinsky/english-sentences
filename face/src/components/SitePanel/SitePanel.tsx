import React, { ReactNode } from 'react'
import './SitePanel.scss'

type SitePanelProps = {
	children: ReactNode
}

function SitePanel(props: SitePanelProps) {
	const { children } = props

	return <div className='site-panel'>{children}</div>
}

export default SitePanel
