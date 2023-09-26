export const getPosts = async () => {
    const response = await fetch('https://dummyjson.com/posts')
    return response.json()
}

export const getUsers = async () => {
    const response = await fetch('https://dummyjson.com/users')
    return response.json()
}