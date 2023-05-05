import moment from "moment";

export const formatDate = (date: Date): string => {
  const dateFormated = moment(date).format('DD/MM/YYYY')
  return dateFormated
}

