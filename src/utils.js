import moment from 'moment'

export function formatDate(date) {
  let publishDate = moment(date)
  publishDate = moment().format('MMMM D, YYYY')
  return publishDate
}
