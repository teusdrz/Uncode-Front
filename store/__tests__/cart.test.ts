import { renderHook, act } from '@testing-library/react'
import { useCartStore } from '../cart'

describe('useCartStore', () => {
    beforeEach(() => {
        const { result } = renderHook(() => useCartStore())
        act(() => {
            result.current.clearCart()
        })
    })

    it('inicia com carrinho vazio', () => {
        const { result } = renderHook(() => useCartStore())
        expect(result.current.items).toEqual([])
        expect(result.current.getTotalItems()).toBe(0)
        expect(result.current.getTotalPrice()).toBe(0)
    })

    it('adiciona produto ao carrinho', () => {
        const { result } = renderHook(() => useCartStore())
        const product = {
            id: 1,
            name: 'Produto Teste',
            price: 100,
            description: 'Descrição',
            image: 'image.jpg',
            category: 'Teste',
            stock: 10,
        }

        act(() => {
            result.current.addItem(product)
        })

        expect(result.current.items).toHaveLength(1)
        expect(result.current.items[0].quantity).toBe(1)
        expect(result.current.getTotalItems()).toBe(1)
    })

    it('incrementa quantidade ao adicionar produto existente', () => {
        const { result } = renderHook(() => useCartStore())
        const product = {
            id: 1,
            name: 'Produto Teste',
            price: 100,
            description: 'Descrição',
            image: 'image.jpg',
            category: 'Teste',
            stock: 10,
        }

        act(() => {
            result.current.addItem(product)
            result.current.addItem(product)
        })

        expect(result.current.items).toHaveLength(1)
        expect(result.current.items[0].quantity).toBe(2)
        expect(result.current.getTotalItems()).toBe(2)
    })

    it('remove produto do carrinho', () => {
        const { result } = renderHook(() => useCartStore())
        const product = {
            id: 1,
            name: 'Produto Teste',
            price: 100,
            description: 'Descrição',
            image: 'image.jpg',
            category: 'Teste',
            stock: 10,
        }

        act(() => {
            result.current.addItem(product)
            result.current.removeItem(1)
        })

        expect(result.current.items).toHaveLength(0)
    })

    it('atualiza quantidade do produto', () => {
        const { result } = renderHook(() => useCartStore())
        const product = {
            id: 1,
            name: 'Produto Teste',
            price: 100,
            description: 'Descrição',
            image: 'image.jpg',
            category: 'Teste',
            stock: 10,
        }

        act(() => {
            result.current.addItem(product)
            result.current.updateQuantity(1, 5)
        })

        expect(result.current.items[0].quantity).toBe(5)
        expect(result.current.getTotalItems()).toBe(5)
    })

    it('remove produto quando quantidade é zero', () => {
        const { result } = renderHook(() => useCartStore())
        const product = {
            id: 1,
            name: 'Produto Teste',
            price: 100,
            description: 'Descrição',
            image: 'image.jpg',
            category: 'Teste',
            stock: 10,
        }

        act(() => {
            result.current.addItem(product)
            result.current.updateQuantity(1, 0)
        })

        expect(result.current.items).toHaveLength(0)
    })

    it('calcula total de preço corretamente', () => {
        const { result } = renderHook(() => useCartStore())
        const product1 = {
            id: 1,
            name: 'Produto 1',
            price: 100,
            description: 'Descrição',
            image: 'image.jpg',
            category: 'Teste',
            stock: 10,
        }
        const product2 = {
            id: 2,
            name: 'Produto 2',
            price: 50,
            description: 'Descrição',
            image: 'image.jpg',
            category: 'Teste',
            stock: 10,
        }

        act(() => {
            result.current.addItem(product1)
            result.current.addItem(product1)
            result.current.addItem(product2)
        })

        expect(result.current.getTotalPrice()).toBe(250)
    })

    it('abre e fecha o carrinho', () => {
        const { result } = renderHook(() => useCartStore())

        expect(result.current.isOpen).toBe(false)

        act(() => {
            result.current.toggleCart()
        })

        expect(result.current.isOpen).toBe(true)

        act(() => {
            result.current.toggleCart()
        })

        expect(result.current.isOpen).toBe(false)
    })

    it('limpa carrinho completamente', () => {
        const { result } = renderHook(() => useCartStore())
        const product = {
            id: 1,
            name: 'Produto Teste',
            price: 100,
            description: 'Descrição',
            image: 'image.jpg',
            category: 'Teste',
            stock: 10,
        }

        act(() => {
            result.current.addItem(product)
            result.current.addItem(product)
            result.current.clearCart()
        })

        expect(result.current.items).toHaveLength(0)
        expect(result.current.getTotalItems()).toBe(0)
        expect(result.current.getTotalPrice()).toBe(0)
    })
})
