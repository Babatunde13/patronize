import chalk from 'chalk'

const log = console.log
export const infoLogger = (data: string): void => {
	log(chalk.bold.blue(data))
}

export const errorLogger = (data: string): void => {
	log(chalk.bold.red(data))
}

export const warningLogger = (data: string): void => {
	log(chalk.bold.yellow(data))
}
