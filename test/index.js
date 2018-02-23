const access = require('../dist/deep-access.js')
const expect = require('chai').expect

const TEST = {
  a: {
    b: {
      c: {
        d: 1
      }
    }
  },
  e: 1
}

/* eslint-env mocha */

describe('deep-access', () => {
  it('should get the value of a child key', () => {
    expect(access.get(TEST, 'a.b')).to.deep.equal({ c: { d: 1 } })
    expect(access.get(TEST, 'a.b.c')).to.deep.equal({ d: 1 })
    expect(access.get(TEST, 'a.b.c.d')).to.deep.equal(1)
  })

  it('should return undefined if a child key does not exist', () => {
    expect(access.get(TEST, 'a.c')).to.deep.equal(undefined)
    expect(access.get(TEST, 'a.b.d')).to.deep.equal(undefined)
    expect(access.get(TEST, 'a.b.c.e')).to.deep.equal(undefined)
  })

  it('should mutate child keys', () => {
    access.set(TEST, 'a.c', 1)
    expect(access.get(TEST, 'a.c')).to.deep.equal(1)
  })
})
