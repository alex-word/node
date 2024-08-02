import dayjs from "dayjs";

export const HandleTime = (date: Date | string, format?: string) => dayjs(date).format(format || "YYYY-MM-DD HH:mm:ss")