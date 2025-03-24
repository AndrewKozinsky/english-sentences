export function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
	// @ts-ignore
	let timeout: NodeJS.Timeout | null = null

	return (...args: Parameters<T>) => {
		if (timeout) clearTimeout(timeout)

		timeout = setTimeout(() => {
			func(...args)
		}, delay)
	}
}
