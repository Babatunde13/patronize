import { expect } from 'chai'

describe('envs', () => {
    it('should test for equalness', () => {
        expect(1).to.be.eq(1)
    })

    it('should test for unequalness', () => {
        expect(1).to.not.be.eq(2)
    })
})
