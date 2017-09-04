/**
 * Mocking client-server processing
 */
const _mates = [
  {
    id: '550e8400-e29b-11d4-a716-446655440000',
    image: 'https://lh3.googleusercontent.com/-HZ-Npth1HJ0/AAAAAAAAAAI/AAAAAAAABCc/80D_-U8XieQ/s120-p-rw-no/photo.jpg',
    firstName: 'Sebastian',
    lastName: 'Huber',
    nickName: 'Seb',
    isAway: true
  },
  {
    id: '550e8400-e29b-11d4-a716-446655440001',
    image: 'https://lh3.googleusercontent.com/-BWpKx4vfZvA/AAAAAAAAAAI/AAAAAAAAGB0/IArwNNQhpec/s120-p-rw-no/photo.jpg',
    firstName: 'Daniel',
    lastName: 'Trojer',
    nickName: 'Danilo',
    isAway: false
  },
  {
    id: '550e8400-e29b-11d4-a716-446655440002',
    image: 'https://lh3.googleusercontent.com/-QsOaqulZNh8/AAAAAAAAAAI/AAAAAAAAAAA/APJypA3aaIVGNTeYPd5dMP2TFYG-7HmrEQ/s120-p-rw-no-mo/photo.jpg',
    firstName: 'Alexander',
    lastName: 'Moser',
    nickName: 'Alex',
    isAway: false
  },
  {
    id: '550e8400-e29b-11d4-a716-446655440003',
    image: 'https://lh3.googleusercontent.com/-ApByI-bY9gc/AAAAAAAAAAI/AAAAAAAACws/qzjbwODH8Zs/s120-p-rw-no/photo.jpg',
    firstName: 'Josef',
    lastName: 'Krabath',
    nickName: 'Sepp',
    isAway: true
  }
]

export default {
  getMates (cb) {
    setTimeout(() => cb(_mates), 100)
  }
}
