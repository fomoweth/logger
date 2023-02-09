import { LogLevel } from "../types";


export enum ColorId {
	BLACK = "#000000",
	CYAN = "#049ED0",
	GRAY = "#C4C4C4",
	GREEN = "#3DC9B0",
	RED = "#C63131",
	WHITE = "#ffffff",
	YELLOW = "#CC880C",
}

export enum LevelId {
	DEBUG = "DEBUG",
	ERROR = "ERROR",
	INFO = "INFO",
	TRACE = "TRACE",
	WARN = "WARN",
}

export const DEFAULT_CONFIG: LogLevel[] = [
	{
		id: LevelId.ERROR,
		color: ColorId.RED
	},
	{
		id: LevelId.INFO,
		color: ColorId.GREEN
	},
	{
		id: LevelId.TRACE,
		color: ColorId.CYAN
	},
	{
		id: LevelId.WARN,
		color: ColorId.YELLOW
	},
]
