'use client'; // console.log가 크롬개발자도구에 출력됨
import { useState } from "react";

export default function List() {
  const product = ['토마토', '파스타', '코코넛'];
  let [qty, setQty] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품 목록</h4>
      {product.map((el, i) =>
        <div className="food" key={i}>
          <img src={`/food${i}.png`} className="food-img" />
          <h4>{el} $40</h4>
          <button onClick={() => {
            const copy = [...qty];
            if (copy[i] === 0) return;
            copy[i]--;
            setQty(copy);
          }}>-</button>
          <span> {qty[i]} </span>
          <button onClick={() => {
            const copy = [...qty];
            copy[i]++;
            setQty(copy);
          }}>+</button>
        </div>)}
    </div>
  );
}

