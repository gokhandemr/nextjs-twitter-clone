import MessagesComponent from '@/components/messages'

export const metadata = {
    title: 'Mesajlar / X | Next.js Twitter Clone',
    description: 'Next.js kullanarak hazırladığım twitter clone uygulaması',
}

function MessagesPage() {
    return (
        <>
            <main style={{ width: '980px', marginRight: '0px' }}>
                <MessagesComponent />
            </main>
        </>

    )
}

export default MessagesPage