"use client"

import { useRouter } from "next/navigation";

export default function Login(): void {
    const router = useRouter();
    router.replace("/i/flow/login");
}

// router.push
// localhost:// 3000/login