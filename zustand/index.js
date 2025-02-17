import {
  useHandleCount,
  useHandleList,
  useHandleStore,
  useHandleUser,
} from "./states";

function Count() {
  const { count, increase, decrease } = useHandleCount();

  return (
    <section>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <p>{count}</p>
    </section>
  );
}

function User() {
  const { name, age, changeName, changeAge } = useHandleUser();

  return (
    <section>
      <h1>{name}</h1>
      <strong>{age}</strong>
      <button onClick={() => changeAge(34)}>Change age</button>
      <button onClick={() => changeName("George")}>Change name</button>
    </section>
  );
}

function List() {
  const { list, getList } = useHandleList();

  return (
    <section>
      <button onClick={getList}>Get list</button>
      {list.length > 0 &&
        list.map((item) => (
          <article key={item.id}>
            <p>{item.title}</p>
            <p>
              <b>{item.email}</b>
            </p>
          </article>
        ))}
    </section>
  );
}

function UserPersist() {
  const { name, age, changeName } = useHandleStore();
  return (
    <section>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <button onClick={() => changeName("Carlos")}>Change this name</button>
    </section>
  );
}
