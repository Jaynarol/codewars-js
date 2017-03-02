/* eslint-disable prefer-arrow-callback */

import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import {dim} from '../src/xDArraysForDimmies'

describe('xDArraysForDimmies', function () {

  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    this.sinon = sandbox
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('dim()', function () {
    it('1', function () {
      return expect(dim(3,2,"x"))
        .to.be.eqls([
          ['x','x'],['x','x'],['x','x']
        ])
    })
    it('2', function () {
      return expect(dim(3,2,3,0))
        .to.be.eqls([
          [ [ 0, 0, 0 ], [ 0, 0, 0 ] ],
          [ [ 0, 0, 0 ], [ 0, 0, 0 ] ],
          [ [ 0, 0, 0 ], [ 0, 0, 0 ] ]
        ])
    })
    it('3', function () {
      const d = dim(3,2,3,0)
      d[0][0][0] = 'A'

      return expect(d[0].toString()).not.equal(d[1].toString())
    })
  })
})
