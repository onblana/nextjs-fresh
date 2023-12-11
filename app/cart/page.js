export default function Cart() {
  const 장바구니 = ['Tomatoes', 'Pasta'];

  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]}/>
      <CartItem item={장바구니[1]}/>
      <Banner content="현대카드"/>
      <Banner content="국민카드"/>
      <Button color="red"/>
      <Button color="blue"/>
    </div>
  )
}

// function(component)를 만들 때는 다른 function 바깥에 만드는 게 좋다
function Banner({content}) {
  return <h5>{content} 결제 행사 중</h5>
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
  </div>
  );
}

function Button({color}) {
  return <button style={{ background: color}}>Click</button>
}