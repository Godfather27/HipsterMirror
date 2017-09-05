import http from './../resource'

const mockWeather = {
  'coord': {
    'lon': 13.04,
    'lat': 47.8
  },
  'weather': [
    {
      'id': 801,
      'main': 'Clouds',
      'description': 'Wolkenbedeckt',
      'icon': '02n'
    }
  ],
  'base': 'stations',
  'main': {
    'temp': 10,
    'pressure': 1022,
    'humidity': 87,
    'temp_min': 10,
    'temp_max': 10
  },
  'visibility': 10000,
  'wind': {
    'speed': 3.1,
    'deg': 160
  },
  'clouds': {
    'all': 20
  },
  'dt': 1504569000,
  'sys': {
    'type': 1,
    'id': 5933,
    'message': 0.0287,
    'country': 'AT',
    'sunrise': 1504585895,
    'sunset': 1504633227
  },
  'id': 2766824,
  'name': 'Salzburg',
  'cod': 200
}

export default {
  async getWeather (callback) {
    try {
      if (process.env.NODE_ENV === 'produciton') {
        const response = await http.get('http://api.openweathermap.org/data/2.5/weather?id=2766824&appid=6efa5050e1fef13e730a33fb2fed4b93&units=metric&lang=de')
        callback(response.data)
      } else {
        callback(mockWeather)
      }
    } catch (err) {
      console.error(err)
    }
  }
}
