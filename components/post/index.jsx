'use client'
import React from 'react'
import style from './style.module.css'
import Image from 'next/image'

function PostComponent({ posts, users }) {

    return (
        <>
            {posts && posts.slice(0, 5).map((post) => (
                <article key={post.id} className={style.article}>
                    <div className={style.userIMG}>
                        <Image src={users.find(user => user.id === post.id).image}
                            alt={users.find(user => user.id === post.id).firstName}
                            fill
                            placeholder='blur'
                            blurDataURL={users.find(user => user.id === post.id).image}
                            sizes="(max-width: 768px) 40px, (max-width: 1200px) 40px, 40px"
                        />
                    </div>
                    <div className={style.postBody}>
                        <h4>{users.find(user => user.id === post.id).firstName + ' ' + users.find(user => user.id === post.id).lastName}</h4>
                        <span>@{users.find(user => user.id === post.id).username} - {post.id + ' sa'}</span>
                        <svg viewBox="0 0 24 24"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
                        <p>{post.body}</p>
                    </div>
                </article>
            ))}
        </>

    )
}

export default PostComponent
