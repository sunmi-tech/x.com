"use client";

import { useSelectedLayoutSegment, usePathname } from "next/navigation";
import Link from "next/link";
import style from "./navMenu.module.css";

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const me = {
    id: "elonmusk",
  };

  return (
    <>
      <li>
        <Link href="/home">
          <div className={style.navPill}>
            {segment === "home" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#000000"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 10.5L12 3l9 7.5v10a1 1 0 0 1-1 1h-6v-6H10v6H4a1 1 0 0 1-1-1v-10z" />
                </svg>

                <div style={{ fontWeight: "bold" }}>홈</div>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
                </svg>

                <div>홈</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href="/explore">
          <div className={style.navPill}>
            {segment === "explore" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <div style={{ fontWeight: "bold" }}>탐색하기</div>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <div>탐색하기</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href="/messages">
          <div className={style.navPill}>
            {segment === "messages" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#000000"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5l-10 6L2 5.5V4zm0 4.3v11.7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.3l-10 6-10-6z" />
                </svg>

                <div style={{ fontWeight: "bold" }}>쪽지</div>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>

                <div>쪽지</div>
              </>
            )}
          </div>
        </Link>
      </li>
      {me?.id && (
        <li>
          <Link
            href={`/${me.id}`}
            className={pathname === `/${me.id}` ? style.active : ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <div className={style.navPill}>프로필</div>
          </Link>
        </li>
      )}
    </>
  );
}
