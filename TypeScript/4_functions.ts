function add(a: number, b: number): number {
	return a + b
}

function toUpperCase(str: string): string {
	return str.trim().toUpperCase()
}


interface MyPos {
	x: number | undefined
	y: number | undefined
}

interface MyPosWithDefault extends MyPos {
	default: string
}

function position(): MyPos
function position(a:number): MyPosWithDefault
function position (a:number, b:number): MyPos

function position(a?: number, b?: number) {
	if (!a && !b) {
		return {x: undefined, y: undefined}
	}

	if (a && !b) {
		return {x: a, y: undefined, default: a.toString()}
	}

	return {x: a, y: b}
}

console.log('Empty: ', position())
console.log('One param: ', position(42))
console.log('Two params: ', position(2, 3))






