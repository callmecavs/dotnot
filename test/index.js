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
  it('should read child objects', () => {
    const expect1 = {
      c: {
        d: 1
      }
    }

    const expect2 = {
      d: 1
    }

    const expect3 = 1

    expect(access.get(TEST, 'a.b')).to.deep.equal(expect1)
    expect(access.get(TEST, 'a.b.c')).to.deep.equal(expect2)
    expect(access.get(TEST, 'a.b.c.d')).to.deep.equal(expect3)
  })
})
