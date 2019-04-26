export function scheduleResolve(ms, value) {
  return new Promise(resolve => {
    setTimeout(resolve, ms, value)
  })
}

export function scheduleReject(ms, value) {
  return new Promise((resolve, reject) => {
    setTimeout(reject, ms, value)
  })
}
