import moment from 'moment'

export function formatDate(date) {
  let publishDate = moment(date).format('MMMM D, YYYY')
  return publishDate
}
