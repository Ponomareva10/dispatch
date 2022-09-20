import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {removeUserFun} from './reducer/UserReducer';
import { addUserFun }  from './reducer/UserReducer';

function App() {
  const cash = useSelector((state) => state.cash.cash);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const addCash = (num) => {
    dispatch({ type: "addCash", payload: num });
  };

  const getCash = (num) => {
    dispatch({ type: "getCash", payload: num });
  };

  const addUser = (name) => {
    const users = {
      name,
      id: Date.now(),
    }
    dispatch(addUserFun(users))
  }

  console.log(addUser)

  const removeUser = (id) => {
    dispatch(removeUserFun(id))
  }

  return (
    <div className="App">
      <h2>{cash}</h2>
      <button onClick={() => {
          addCash(Number(prompt("введите количество денег")));
        }}
      >
        пополнить счет
      </button>
      <button onClick={() => {
          getCash(Number(prompt("введите количество денег")));
        }}
      >
        снять деньги
      </button>
      {users.length !== 0 ? 
      <div>
        {
          users.map(user => 
              <div onClick={() => removeUser(user.id) } key={user.id} >{user.name}</div>
            )}
      </div>
      :
      <div>
        <h3>
          Клиентов нет.....
        </h3>
      </div>
        }
      <button onClick={() => addUser(prompt("Введите свое имя, пожайлуста"))} >Ввести имя</button>  
    </div>
  );
}

export default App;
