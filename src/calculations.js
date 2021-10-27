import dayjs from "dayjs";

function calculateBiorhythm(birthDate, targetDate, cycle) {
	const birthDay = dayjs(birthDate).startOf('day');
	const targetDay = dayjs(targetDate).startOf('day');
	const diff = targetDay.diff(birthDay, 'days');

	return Math.sin(2 * Math.PI * diff / cycle);
}

export function calculateBiorhythms(birthdate, targetDate) {
	return {
		date: targetDate,
		physical: calculateBiorhythm(birthdate, targetDate, 23),
		emotional: calculateBiorhythm(birthdate, targetDate, 28),
		intellectual: calculateBiorhythm(birthdate, targetDate, 33)
	};
}

export function calculateBiorhythmSeries(birthdate, startDate, size) {
	const series = [];
	const startDay = dayjs(startDate).startOf('day');
	for (let i = 0; i < size; i++) {
		const targetDay = startDay.add(i, 'days').toISOString();
		series.push(calculateBiorhythms(birthdate, targetDay));
	}
	return series;
}