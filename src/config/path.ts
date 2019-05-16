import paths from '../../config'
import { Paths } from '../types/path'

// We assume that the project are already up and running
// The project should always be ready for the command, if not check the
// README of the faulty project
export const PATHS: Paths = paths

export const getPath = (path: string) => PATHS[path]
