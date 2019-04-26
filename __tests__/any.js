import CustomPromise from '../index.js'
import { scheduleResolve, scheduleReject } from '../__utils__'

test('CustomPromise.any handles arrays of primitives', () => {
  return CustomPromise.any([1, 'string', false])
})

test('CustomPromise.any throws for non-array inputs', () => {
  return expect(() => {
    CustomPromise.any('string')
  }).toThrow()
})

test(`CustomPromise.any resolves if one of its inputs resolves`, () => {
  const mockInput = [
    scheduleReject(110, 'reject1'),
    scheduleResolve(120, 1),
    scheduleReject(130, 'reject2'),
    scheduleResolve(140, 2)
  ]
  const firstResolvedPromiseValue = 1
  return expect(CustomPromise.any(mockInput)).resolves.toBe(
    firstResolvedPromiseValue
  )
})

test(`CustomPromise.any rejects correctly if all of its inputs reject`, () => {
  const mockInput = [
    scheduleReject(110, 'reject1'),
    scheduleReject(120, 'reject2'),
    scheduleReject(130, 'reject3')
  ]
  const mockOutput = ['reject1', 'reject2', 'reject3']
  return expect(CustomPromise.any(mockInput)).rejects.toMatchObject(mockOutput)
})

test(`CustomPromise.any saves values to output in order of their position in the input`, () => {
  const mockInput = [
    scheduleReject(130, 'reject1'),
    scheduleReject(120, 'reject2'),
    scheduleReject(110, 'reject3')
  ]
  const mockOutput = ['reject1', 'reject2', 'reject3']
  return expect(CustomPromise.any(mockInput)).rejects.toMatchObject(mockOutput)
})
