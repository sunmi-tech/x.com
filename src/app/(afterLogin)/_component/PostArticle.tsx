'use client';

import style from "./post.module.css";
import { useRouter } from "next/navigation";

type Props = {
    children: React.ReactNode;
    post : {
        postId: number;
        content: string;
        User : {
            id: string;
            nickname: string;
            image: string;
        },
        createdAt: Date;
        Images: any[];
    }
}

export default function PostArticle({children, post}: Props) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/${post.User.id}/status/${post.User.postId}`)
    }
    return (
        <article onClickCapture={onClick} className={style.post}>
            {children}
        </article>
    )
}