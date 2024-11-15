import moment from 'moment'

moment.locale('pt-br')

function toRelative(date: string): string {
  return moment(date).fromNow()
}

export default { toRelative }
