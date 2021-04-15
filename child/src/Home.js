import { useContext } from 'react'
import { useSelector } from 'react-redux'
import GlobalStateContext from './GlobalStateContext'
function Home() {
  const microAppName = useSelector(state => state.creator.name)
  const { name, age } = useContext(GlobalStateContext)
  return (
    <div>
      子应用 Home
      <hr />
      <p>共享父应用的数据 currentUser</p>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <hr />
      {/* <p>微应用自己的数据 creator apply状态</p> */}
      <p>微应用数据 microAppName</p>
      <p>name: {microAppName}</p>
    </div>
  );
}

export default Home;
