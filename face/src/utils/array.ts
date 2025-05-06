export function moveElementInArray(arr: any[], fromIndex: number, toIndex: number) {
	if (fromIndex < 0 || toIndex < 0 || fromIndex >= arr.length || toIndex >= arr.length) {
		return arr // Prevent out-of-bounds access
	}

	const element = arr.splice(fromIndex, 1)[0] // Remove the element
	arr.splice(toIndex, 0, element) // Insert at new index

	return arr
}
