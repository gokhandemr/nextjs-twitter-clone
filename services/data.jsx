export const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.org/posts')
    if (!response.ok) {
        throw new Error('Posts sunucu hatası');
    }
    return response.json();
}

export const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.org/users')
    if (!response.ok) {
        throw new Error('Users sunucu hatası');
    }
    return response.json()
}