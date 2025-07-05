import style from "./logOutButton.module.css";

export default function LogOutButton() {
    const me = {
        nickName: "테스트",
        id: "tjsal",
    }

  return (
    <button className={style.logOutButton}>
      <div className={style.logOutUserImage}>
        <img src="./logo.svg" alt="logo" width={20} height={20} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickName}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
