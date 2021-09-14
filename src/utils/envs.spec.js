import { expect } from 'chai'
import getEnvs from './envs'

describe('envs', () => {
    it('should contain "port"', () => {
        const { envs } = getEnvs
        expect(envs).to.have.property('PORT')
    })

    it('should contain "databaseURL"', () => {
        const { envs } = getEnvs
        expect(envs).to.have.property('databaseURL')
    })
})
