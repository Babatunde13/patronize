import chalk from 'chalk'

const log = console.log
export const infoLogger = (data: any): void => {
	log(chalk.bold.blue(data))
}

export const errorLogger = (data: any): void => {
	log(chalk.bold.red(data))
}

export const warningLogger = (data: any): void => {
	log(chalk.bold.yellow(data))
}
