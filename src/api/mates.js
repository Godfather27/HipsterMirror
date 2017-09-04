import http from './../resource'

export default {
  async getMates (callback) {
    try {
      const response = await http.get('users')
      callback(response.data)
    } catch (err) {
      console.error(err)
    }
  }
}
