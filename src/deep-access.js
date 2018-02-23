const deep = (obj, dots, value) => {
  // dot notation string -> array of keys
  const keys = Array.isArray(dots)
    ? dots
    : dots.split('.')

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

    // make key an empty object if it doesnt exist
    if (!current[key]) {
      current[key] = {}
    }

    // update reference
    current = current[key]
  }

  // write & return or read & return
  if (value) {
    current = value
    return value
  } else {
    return current
  }
}

export default deep
