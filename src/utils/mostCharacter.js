const str = 'absdcsafqwerfcnmaksdkrjdcnawpeirvn'
const fn = (str) => {
	const charMap = {};
	let mostNum = 0
	let index = ''
	
	for (let char of str) {
		if (char in charMap) charMap[char]++
		else charMap[char] = 1
	}
	for (let key in charMap) {
		if (charMap[key] >= mostNum) {
			mostNum = charMap[key]
			index = key
		}
	}
	return index;
}
console.log(fn(str));