import style from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./_component/NavMenu";
import LogOutButton from "./_component/LogOutButton";
import TrendSection from "./_component/TrendSection";
import FollowRecommend from "./_component/FollowRecommend";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function AfterLoginLayout({ children, modal }: Props) {
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
              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
              </Link>
            </nav>
            <LogOutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          
          <section className={style.rightSection}>
            <div style={{ marginBottom: "60px", width: "inherit" }}>
              <form className={style.search}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input type="search" placeholder="검색" />
              </form>
            </div>
            <TrendSection />
            <div className={style.followRecommend}>
              <h3>팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
