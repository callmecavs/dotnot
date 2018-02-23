const get = (obj, str, val) => {
  // dot notation string -> array of keys
  const keys = Array.isArray(str)
    ? str
    : str.split('.')

  // length of keys array
  const len = keys.length

  // run through keys
  // store reference to object
  let current = obj

  // loop vars
  let index
  let key

  for (index = 0; index < len; index++) {
    // current key name
    key = keys[index]

    // exit early, if the key doesnt exist
    if (!current[key]) {
      return
    }

    // update reference
    current = current[key]
  }

  return current
}

export { get }

// FIXME: fill set out, backspace deep

const set = (obj, str, val) => {
  // dot notation string -> array of keys
  const keys = str.split('.')

  // length of keys array
  const len = keys.length

  // loop through keys, updating the object reference to child objects
  let current = obj
  let key

  for (let index = 0; index < len; index++) {
    // current key name
    key = keys[index]

    // set value on last key
    index === len - 1
      ? current[key] = val
      : current = current[key] || {}
  }

  return current
}

export { set }
