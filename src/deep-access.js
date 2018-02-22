const deep = (obj, keys, value) => {
  const pieces = Array.isArray(keys)
    ? keys
    : keys.split('.')

}

export default deep
