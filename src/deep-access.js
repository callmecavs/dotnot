const get = (obj, str) => {
  // dot notation string -> array of keys
  const keys = str.split('.')

  // length of keys array
  const len = keys.length

  // loop through keys updating the reference to child objects
  let current = obj
  let name

  for (let index = 0; index < len; index++) {
    // current key name
    name = keys[index]

    // stop searching if a child object is missing
    if (!current[name]) {
      return
    }

    current = current[name]
  }

  return current
}

export { get }

const set = (obj, str, val) => {
  // dot notation string -> array of keys
  const keys = str.split('.')

  // length of keys array
  const len = keys.length

  // loop through keys updating the reference to child objects
  let current = obj
  let name

  for (let index = 0; index < len; index++) {
    // current key name
    name = keys[index]

    // set value on last key
    index === len - 1
      ? current[name] = val
      : current = current[name] || {}
  }

  return current
}

export { set }
