import Link from 'next/link'

export default function NotFound() {
    return (
        <main style={{ width: '950px', textAlign: 'center', padding: '100px 0 0 0' }}>
            <p style={{ marginBottom: '30px', color: '#777', fontSize: '14px' }}>Hmm... böyle bir sayfa yok. Başka bir şey aramayı dene.</p>
            <Link href="/explore" style={{ padding: '8px 20px', fontWeight: '800', display: 'inline-block', borderRadius: '20px', background: 'rgb(29, 155, 240)' }}>Ara</Link>
        </main>
    )
}