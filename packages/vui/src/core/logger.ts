class Logger {
  constructor () {}

  prefix: string = 'mobov-vui:'

  public error (msg: string) {
    const message = `${this.prefix}${msg}`
    console.error(message)
    throw new Error(message)
  }

  public warn (msg: string) {
    const message = `${this.prefix}${msg}`
    console.warn(message)
  }

  public info (msg: string) {
    const message = `${this.prefix}${msg}`
    console.info(message)
  }
}

export default new Logger()
