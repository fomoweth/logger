import { ColorId, LevelId } from "../constants"


export type Mapping<T> = Map<string, T>

export interface LogLevel {
	id: LevelId
	color: ColorId
}
