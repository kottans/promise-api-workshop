import CustomPromise from '../index.js'

test('CustomPromise.resolve(3) resolves to 3', () => {
  return expect(CustomPromise.resolve(3)).resolves.toBe(3)
})

test('CustomPromise.resolve successfully unwraps pseudo-thenable', () => {
  const pseudoThenable = {
    then: (cb, errcb) => {
      cb('Success!')
      errcb('Error!')
    }
  }
  return CustomPromise.resolve(pseudoThenable).then(v => v)
})
