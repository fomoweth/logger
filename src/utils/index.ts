import chalk from "chalk";


export const colorize = (text: string, color: string, bold: boolean) => {
	return !!bold ? chalk.bold.hex(color)(text) : chalk.hex(color)(text)
}

const formatDate = (date: Date) => {
	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()
	const time = date.toTimeString().split(" ")[0]

	const format = (x: number) => x < 10 ? "0" + x : "" + x

	return `${format(month)}-${format(day)}-${year} ${time}`
}

export const getCurrentTime = () => formatDate(new Date())

const replacer = (_key: string, value: any) => {
	if (!!value && typeof value === "object") {
		if (!Array.isArray(value)) {
			const newVal = Object.assign({}, value)
			Object.entries(value).forEach(([key, val]) => newVal[key] = val)

			return newVal
		} else {
			return value.map((v) => v)
		}
	} else {
		return value
	}
}

export const parseArg = (arg: any) => {
	const parsed = !!arg && typeof arg === "object"
		? JSON.stringify(arg, replacer, 4).replace(/"/g, "")
		: arg === null || arg === undefined
			? chalk.bold.cyan(arg)
			: arg

	return parsed
}
