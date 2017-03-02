/* eslint-disable prefer-arrow-callback */

import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import { solution1, solution2 } from '../src/SplitStringsSolution'

describe('SplitStringsSolution', function () {

  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    this.sinon = sandbox
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('solution1()', function () {
    it('1', function () {
      return expect(solution1('abc'))
        .to.be.eqls(
          ['ab', 'c_']
        )
    })
    it('2', function () {
      return expect(solution1('abcdef'))
        .to.be.eqls(
          ['ab', 'cd', 'ef']
        )
    })
  })

  describe('solution2()', function () {
    it('1', function () {
      return expect(solution2('abc'))
        .to.be.eqls(
          ['ab', 'c_']
        )
    })
    it('2', function () {
      return expect(solution2('abcdef'))
        .to.be.eqls(
          ['ab', 'cd', 'ef']
        )
    })
  })
})
