export default function Home() {
  let name = 'NAME';
  const link = 'http://google.com';
  return (
    <div>
      <h4 className='title'>애플 Fresh</h4>
      <p className='title-sub'>by dev {name}</p>
      <a href={link}>구글 링크</a>
      <h4 style={{ color: 'red', fontSize: '30px' }}>style속성으로 스타일 적용함</h4>
    </div>
  );
}
