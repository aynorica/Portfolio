export default function yearsSinceAugust1996(): number {
	const pastDate = new Date(1996, 7, 31);

	const currentDate = new Date();

	const differenceInYears =
		currentDate.getFullYear() - pastDate.getFullYear();

	if (
		currentDate.getMonth() < pastDate.getMonth() ||
		(currentDate.getMonth() === pastDate.getMonth() &&
			currentDate.getDate() < pastDate.getDate())
	) {
		return differenceInYears - 1;
	}

	return differenceInYears;
}
