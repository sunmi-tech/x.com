import styles from "@/app/page.module.css";

export default function Layout({children, modal}:{children:React.ReactNode, modal:React.ReactNode}){
    return (
        <div className={styles.container}>
            비포 로그인 레이아웃
            {children}
            {modal}
        </div>
    )
}

// 주소가 localhost:3000 일 때는 children -> page.tsx, modal -> @modal/default.tsx

