import winston from "winston";
import GoogleLog from "./gc-log";

const alignedWithColorsAndTime = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(info => {
    const { timestamp, lvl, message, ...args } = info;

    // tslint:disable-next-line:no-magic-numbers
    const ts = timestamp.slice(0, 19).replace("T", " ");
    // tslint:disable-next-line:no-magic-numbers
    return `${ts} [${lvl}]: ${message} ${
      Object.keys(args).length ? JSON.stringify(args, null, 2) : ""
    }`;
  })
);

const level = process.env.NODE_ENV === "development" ? "silly " : "debug";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: alignedWithColorsAndTime,
      level
    }),
    new GoogleLog({
      labels: {
        name: `ts-wtf-${process.env.SERVER_TYPE}`
      }
    })
  ]
});

export default logger;
