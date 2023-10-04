import { create } from 'zustand'

export const premiumBoxStore = create(
    (set) => ({
        premiumBoxIsActive: false,
        premiumBoxActive: () => set({ premiumBoxIsActive: true }),
        premiumBoxInActive: () => set({ premiumBoxIsActive: false })
    }),
)

export const showMoreStore = create(
    (set) => ({
        showMoreIsActive: false,
        showMoreActive: () => set({ showMoreIsActive: true }),
        showMoreInActive: () => set({ showMoreIsActive: false })
    }),
)

export const userButtonStore = create(
    (set) => ({
        userButtonIsActive: false,
        userButtonActive: () => set({ userButtonIsActive: true }),
        userButtonInActive: () => set({ userButtonIsActive: false })
    }),
)