import { useState } from 'react';
import styles from './app.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './features/reducer/Users';

function App() {
  const [name, setName] = useState("");
  const [username, setUserame] = useState("");
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  return (
    <div className={styles.app}>
      {" "}
      <div className={styles.addUser}>
        <input type="text" placehpler= "Enter Name ...." onChange={(e) => {setName(e.target.value)}}/>
        <input type="text" placehpler="Enter Username ...." onChange={(e) => {setUserame(e.target.value)}}/>
        <button onClick={() => {dispatch(addUser({id: 0, name, username}))}}>Add User</button>
      </div>
      <div className={styles.displayUser}>
        {userList.map((users) => {
          return (
            <>
              <div key={users.id}>
                <h1>{users.name}</h1>
                <h1>{users.username}</h1>
              </div>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default App;
