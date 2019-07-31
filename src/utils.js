export function copyProperties(target, source, raw, filter) {
	if(!target || !source)
		return;

	for(let prop in source) {
		if(!source.hasOwnProperty(prop) || !prop)
			continue;

		if(filter && filter.indexOf(prop)>=0)
			continue;

		let value = source[prop];

		if(isObject(value)) {
			let obj = Object.create(value.constructor.prototype);
			copyProperties(obj, value);
			value = obj;
		} else if(isDate(value)) {
			value = new Date(value);
		}

		target[prop] = value;
	}
}

/**
* Simple is object check.
* @param item
* @returns {boolean}
*/
export function isObject(item) {
  if (item &&
		 item != null &&
		 typeof item === 'object' &&
		 !Array.isArray(item) &&
		 !isDate(item)) {
	  return true;
  } else {
	  return false;
  }
}

export function isDate(value) {
	//The only reliable way to check for a Date object completely via its internal class
	//https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date
	if(Object.prototype.toString.call(value) === '[object Date]') {
		return true;
	}
	return false;
}
