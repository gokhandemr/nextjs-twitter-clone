export const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.org/posts')
    return response.json()
}

export const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.org/users')
    return response.json()
}