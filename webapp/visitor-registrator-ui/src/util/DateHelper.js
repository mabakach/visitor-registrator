export default class DateHelper {
	
	jsonReviver = (key, value) => {
		const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
		if (typeof value === "string" && dateFormat.test(value)) {
			return new Date(value);
		}
	
		return value;
	}
	
	isoStringToDate = (isoString) => {
		const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
		if (typeof isoString === "string" && dateFormat.test(isoString)) {
			return new Date(isoString);
		}
	
		return isoString;
		
	}
	
	dateToIsoString = (date) => {
		if (typeof date === 'object') {
			return date.toISOString();
		}
		return date;
	}
}