"use client";

import style from "./postForm.module.css";
import { useRef, useState } from "react";
import Link from "next/link";

export default function PostForm() {
  const imageRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");

  const me = {
    id: "me",
    image: "/logo.svg",
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(content);
  };

  const onClickButton = () => {
    imageRef.current?.click();
  };

  return (
    <form className={style.postForm} onSubmit={onSubmit}>
      <div className={style.postUserSection}>
        <div className={style.postUserImage}>
          <img src={me.image} alt="me.id" />
        </div>
      </div>
      <div className={style.postInputSection}>
        <textarea value={content} onChange={onChange} placeholder="무슨 생각을 하고 있나요?" />
        <div className={style.postButtonSection}>
          <div className={style.footerButtons}>
            <div className={style.footerButtonLeft}>
              <input
                type="file"
                name="imageFiles"
                multiple
                hidden
                ref={imageRef}
              />
              <button
                className={style.uploadButton}
                type="button"
                onClick={onClickButton}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </button>
            </div>
            <button className={style.actionButton}>게시하기</button>
          </div>
        </div>
      </div>
    </form>
  );
}
