import { useSelector } from 'react-redux'
function Home() {
  const { name, age } = useSelector(state => state)
  return (
    <div>
      子应用 Home
      <hr />
      <p>共享父应用的数据 currentUser</p>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <hr />
      {/* <p>微应用自己的数据 creator apply状态</p> */}
      
    </div>
  );
}

export default Home;
