import { formatPrice } from '../utils'

describe('formatPrice', () => {
    it('formata preço inteiro corretamente', () => {
        const result = formatPrice(1000)
        expect(result).toContain('1.000')
        expect(result).toContain('R$')
    })

    it('formata preço com decimais corretamente', () => {
        const result = formatPrice(1234.56)
        expect(result).toContain('1.234,56')
        expect(result).toContain('R$')
    })

    it('formata preço zero corretamente', () => {
        const result = formatPrice(0)
        expect(result).toContain('0,00')
        expect(result).toContain('R$')
    })

    it('formata preço com centavos arredondados', () => {
        const result = formatPrice(9.99)
        expect(result).toContain('9,99')
        expect(result).toContain('R$')
    })

    it('formata preço grande corretamente', () => {
        const result = formatPrice(123456.78)
        expect(result).toContain('123.456,78')
        expect(result).toContain('R$')
    })
})
