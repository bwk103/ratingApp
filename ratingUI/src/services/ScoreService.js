import Api from '@/services/Api'

export default {
  addScore (params) {
    return Api().post('/feedback', params)
  }
}
