import dayjs from "dayjs";

function calculateBiorhythm(birthDate, targetDate, cycle) {
	const birthDay = dayjs(birthDate).startOf('day');
	const targetDay = dayjs(targetDate).startOf('day');
	const diff = targetDay.diff(birthDay, 'days');

	return Math.sin(2 * Math.PI * diff / cycle);
}

export function calculateBiorhythms(birthdate, targetDate) {
	return {
		physical: calculateBiorhythm(birthdate, targetDate, 23),
		emotional: calculateBiorhythm(birthdate, targetDate, 28),
		intellectual: calculateBiorhythm(birthdate, targetDate, 33)
	};
}