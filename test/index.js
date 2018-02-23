const dotnot = require('../dist/dotnot.js')
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

describe('dotnot', () => {
  it('should get the value of a child key', () => {
    expect(dotnot.get(TEST, 'a.b')).to.deep.equal({ c: { d: 1 } })
    expect(dotnot.get(TEST, 'a.b.c')).to.deep.equal({ d: 1 })
    expect(dotnot.get(TEST, 'a.b.c.d')).to.deep.equal(1)
  })

  it('should return undefined if a child key does not exist', () => {
    expect(dotnot.get(TEST, 'a.c')).to.deep.equal(undefined)
    expect(dotnot.get(TEST, 'a.b.d')).to.deep.equal(undefined)
    expect(dotnot.get(TEST, 'a.b.c.e')).to.deep.equal(undefined)
  })

  it('should mutate child keys', () => {
    dotnot.set(TEST, 'a.c', 1)
    dotnot.set(TEST, 'a.b.d', 1)
    dotnot.set(TEST, 'a.b.c.e', 1)

    expect(dotnot.get(TEST, 'a.c')).to.deep.equal(1)
    expect(dotnot.get(TEST, 'a.b.d')).to.deep.equal(1)
    expect(dotnot.get(TEST, 'a.b.c.e')).to.deep.equal(1)
  })
})
