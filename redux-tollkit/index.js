import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
} from "./store/slices/counterSlice";

function Count() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <section>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </section>
  );
}

import { fetchUsers } from "./store/slices/usersSlice";
import { useEffect } from "react";

const UsersFetch = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Usuarios</h1>
      {status === "loading" && <p>Cargando...</p>}
      {status === "succeeded" &&
        users.map((user) => <p key={user.id}>{user.name}</p>)}
      {status === "failed" && <p>Error al cargar usuarios</p>}
    </div>
  );
};
