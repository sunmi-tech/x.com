import style from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./_component/NavMenu";
import LogOutButton from "./_component/LogOutButton";

export default function AfterLoginLayout({children}:{children:React.ReactNode}){
    return (
        <div className={style.container}>
            <header className={style.leftSectionWrapper}>
                <section className={style.leftSection}>
                    <div className={style.leftSectionFixed}>
                        <Link className={style.logo} href="/home">
                        <div className={style.logoPill}>
                            <Image src={"/Logo.svg"} alt="logo" width={20} height={20} />
                        </div>
                        </Link>
                        <nav>
                            <ul>
                                <NavMenu />
                            </ul>
                            <Link href="/compose/tweet" className={style.postButton}>게시하기</Link>
                        </nav>
                        <LogOutButton />
                    </div>
                </section>
            </header>
            <div className={style.rightSectionWrapper}>
                <div className={style.rightSectionInner}>
                    <main className={style.main}>{children}</main>
                    <section className={style.rightSection}>
                        <form className={style.search}>
                            <input type="search" />
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}