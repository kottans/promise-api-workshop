import CustomPromise from '../index.js'
import { scheduleResolve, scheduleReject } from '../__utils__'

test('CustomPromise.race handles arrays of primitives', () => {
  return CustomPromise.race([1, 'string', false])
})

test('CustomPromise.race throws for non-array inputs', () => {
  return expect(() => {
    CustomPromise.race('string')
  }).toThrow()
})

test(`CustomPromise.race resolves if the first promise to finish is resolved`, () => {
  const mockInput = [
    scheduleResolve(110, 1),
    scheduleReject(120, 'reject1'),
    scheduleReject(130, 'reject2'),
    scheduleResolve(140, 2)
  ]
  const firstResolvedPromiseValue = 1
  return expect(CustomPromise.race(mockInput)).resolves.toBe(
    firstResolvedPromiseValue
  )
})

test(`CustomPromise.race rejects if the first promise to finish is rejected`, () => {
  const mockInput = [
    scheduleReject(110, 'reject1'),
    scheduleResolve(120, 1),
    scheduleReject(130, 'reject2'),
    scheduleResolve(140, 2)
  ]
  const firstRejectedPromiseValue = 'reject1'
  return expect(CustomPromise.race(mockInput)).rejects.toBe(
    firstRejectedPromiseValue
  )
})
