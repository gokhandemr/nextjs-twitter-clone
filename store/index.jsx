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

export const loginPageButtonStore = create(
    (set) => ({
        loginButtonIsActive: false,
        loginButtonActive: () => set({ loginButtonIsActive: true }),
        loginButtonInActive: () => set({ loginButtonIsActive: false })
    }),
)

export const postStore = create(
    (set, get) => ({
        postCount: 10,
        postCountAdd: () => set({ postCount: get().postCount < 30 ? get().postCount + 5 : get().postCount + 0 }),
    }),
)