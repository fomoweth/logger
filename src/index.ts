import { DEFAULT_CONFIG, LevelId } from "./constants";
import { LogLevel, Mapping } from "./types";
import { colorize, getCurrentTime, parseArg } from "./utils";


export default class Logger {
	readonly [key: string]: any
	readonly categories: Mapping<LogLevel>

	constructor(config: LogLevel[] = DEFAULT_CONFIG) {
		this.categories = config.reduce<Mapping<LogLevel>>((acc, level) =>
			!acc.has(level.id) ? acc.set(level.id, level) : acc,
			new Map()
		)

		config.forEach((level) => {
			Object.assign(
				this,
				Object.defineProperty(
					this,
					level.id.toLowerCase(),
					{
						value: (arg: any) => this._log(level.id, arg)
					}
				)
			)
		})
	}

	private get(id: LevelId) {
		const logLevel = this.categories.get(id)
		if (!logLevel) throw new Error(`Error: log level does not exist: ${id}`)

		return logLevel
	}

	private title(id: LevelId) {
		return colorize(id, this.get(id).color, true)
	}

	private _log(id: LevelId, arg: any) {
		const parsedArg = parseArg(arg)

		switch (id) {
			case LevelId.DEBUG:
				console.log(`${this.title(id)} [${getCurrentTime()}]:`, parsedArg)
				console.log(``)
				break

			case LevelId.ERROR:
				console.error(`${this.title(id)} [${getCurrentTime()}]:`, parsedArg)
				console.log(``)
				break

			case LevelId.INFO:
				console.info(`${this.title(id)} [${getCurrentTime()}]:`, parsedArg)
				console.log(``)
				break

			case LevelId.TRACE:
				console.log(`${this.title(id)} [${getCurrentTime()}]:`, parsedArg)
				break

			case LevelId.WARN:
				console.warn(`${this.title(id)} [${getCurrentTime()}]:`, parsedArg)
				console.log(``)
				break
		}
	}

	log(arg: any) {
		console.log(parseArg(arg))
	}
}
