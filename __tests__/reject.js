import CustomPromise from '../index.js'

test('CustomPromise.reject("error reason") rejects to "error reason"', () => {
  return expect(CustomPromise.reject('error reason')).rejects.toMatch(
    'error reason'
  )
})
