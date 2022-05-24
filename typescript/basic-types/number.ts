let decimal: number = 6;

let hex: number = 0xff0d;

let binary: number = 0b01010;

let octal: number = 0o744;

let notANumber: number = NaN;

let underscoreNumber: number = 1_000_000;

function f5(a: number): number {
	if (a > 0) {
		return a * 30;
	}
	return a;
}
