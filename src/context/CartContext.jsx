"use client"

import { createContext, useState, useContext } from "react"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {

        setCart(
            cart.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem,
            ),
        )
        } else {

        setCart([...cart, { ...item, quantity }])
        }
    }


    const removeItem = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId))
    }


    const clear = () => {
        setCart([])
    }


    const isInCart = (itemId) => {
        return cart.some((item) => item.id === itemId)
    }


    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }


    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    return (
        <CartContext.Provider
        value={{
            cart,
            addItem,
            removeItem,
            clear,
            isInCart,
            getTotalQuantity,
            getTotalPrice,
        }}
        >
        {children}
        </CartContext.Provider>
    )
}