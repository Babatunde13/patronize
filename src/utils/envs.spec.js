import { expect } from 'chai'
import getEnvs from './envs'

// eslint-disable-next-line no-undef
describe('envs', () => {
    // eslint-disable-next-line no-undef
    it('should contain "port"', () => {
        const { envs } = getEnvs
        expect(envs).to.have.property('PORT')
    })
    
    // eslint-disable-next-line no-undef
    it('should contain "databaseURL"', () => {
        const { envs } = getEnvs
        expect(envs).to.have.property('databaseURL')
    })
})
