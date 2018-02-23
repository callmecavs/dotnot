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
  it('should read 1 level deep', () => {
    const expected = {
      c: {
        d: 1
      }
    }

    expect(access.get(TEST, 'a.b')).to.deep.equal(expected)
  })

  it('should read 2 levels deep', () => {
    const expected = {
      d: 1
    }

    expect(access.get(TEST, 'a.b.c')).to.deep.equal(expected)
  })

  it('should read 3 levels deep', () => {
    const expected = 1

    expect(access.get(TEST, 'a.b.c.d')).to.deep.equal(expected)
  })
})
