"use client";
import { useState, ChangeEventHandler, FormEventHandler } from "react";
import style from "./signupModal.module.css";
import { useRouter } from "next/navigation";

export default function SignupModal() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState();

  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  const onChangeId = () => {};

  const onChangePassword = () => {};

  const onChangeNickname = () => {};
  const onChangeImageFile = () => {};

  return (
    <>
    
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <button className={style.closeButton} onClick={onClickClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div>계정을 생성하세요.</div>
          </div>
          <form>
            <div className={style.modalBody}>
                <div className={style.inputDiv}>
                    <label htmlFor="id" className={style.inputLabel}>아이디</label>
                    <input value={id} id="id" className={style.input} type="text" value={id} onChange={onChangeId} />
                </div>
                <div className={style.inputDiv}>
                    <label htmlFor="nickname" className={style.inputLabel}>닉네임</label>
                    <input value={nickname} id="nickname" className={style.input} type="text" value={nickname} onChange={onChangeNickname} />
                </div>
                <div className={style.inputDiv}>
                    <label htmlFor="password" className={style.inputLabel}>비밀번호</label>
                    <input id="password" className={style.input} type="password" value={password} onChange={onChangePassword} />
                </div>
                <div className={style.inputDiv}>
                    <label htmlFor="image" className={style.inputLabel}>프로필</label>
                    <input value={image} id="image" className={style.input} type="file" onChange={onChangeImageFile} />
                </div>
            </div>
            <div className={style.modalFooter}>
                <button className={style.actionButton} type="submit">가입하기</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
