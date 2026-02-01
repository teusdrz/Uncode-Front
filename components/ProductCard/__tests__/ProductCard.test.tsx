import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ProductCard from '../ProductCard'

const mockProduct = {
    id: 1,
    name: 'Notebook Gamer',
    price: 4999.99,
    description: 'Notebook gamer de alta performance',
    image: 'https://example.com/image.jpg',
    category: 'Eletrônicos',
    stock: 10,
}

jest.mock('@/store/cart', () => ({
    useCartStore: () => ({
        addItem: jest.fn(),
    }),
}))

describe('ProductCard', () => {
    it('renderiza informações do produto corretamente', () => {
        render(<ProductCard product={mockProduct} />)

        expect(screen.getByText('Notebook Gamer')).toBeInTheDocument()
        expect(screen.getByText('Eletrônicos')).toBeInTheDocument()
        expect(screen.getByText('R$ 4.999,99')).toBeInTheDocument()
    })

    it('exibe imagem do produto com alt text correto', () => {
        render(<ProductCard product={mockProduct} />)

        const image = screen.getByAltText('Notebook Gamer')
        expect(image).toBeInTheDocument()
    })

    it('renderiza botão de adicionar ao carrinho', () => {
        render(<ProductCard product={mockProduct} />)

        const button = screen.getByRole('button', { name: /adicionar ao carrinho/i })
        expect(button).toBeInTheDocument()
    })

    it('renderiza link para página de detalhes', () => {
        render(<ProductCard product={mockProduct} />)

        const links = screen.getAllByRole('link')
        expect(links.length).toBeGreaterThan(0)
    })
})
