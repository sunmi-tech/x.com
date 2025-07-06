import Link from "next/link";
import style from "./trend.module.css";

export default function Trend(){
    return (
        <Link className={style.container} href={`/search?q=트렌드`}>
            <div className={style.count}>실시간 트랜드</div>
            <div className={style.title}>제로초</div>
            <div className={style.count}>1,234 posts</div>
        </Link>
    )
}