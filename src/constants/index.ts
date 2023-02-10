import { LogLevel } from "../types";


export enum ColorId {
	CYAN = "#02B0E5",
	GRAY = "#939496",
	GREEN = "#3DC9B0",
	RED = "#ED1010",
	YELLOW = "#EAEA07",
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
		id: LevelId.DEBUG,
		color: ColorId.GRAY
	},
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
