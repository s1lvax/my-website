//function to truncate description to 100 words in the portfolio..
export const truncateDescription = (description: string, wordLimit: number = 20): string => {
	const words = description.split(' ');
	if (words.length > wordLimit) {
		return words.slice(0, wordLimit).join(' ') + '...';
	}
	return description;
};
