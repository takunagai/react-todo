import { useState } from "react";
import "./styles.css";

const App = (param) => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onClickAdd = () => {
    if (todoText === "") return; // 未入力時は何もしない
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); // n 番目から m 個を削除
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1); // n 番目から m 個を削除

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタン
  const onClickRestore = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <div className="container">
      <div className="area input-area">
        <input
          type="text"
          placeholder="TODO を入力"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="area incomplete-area">
        <h2 className="area__title">未完了の TODO</h2>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={index} className="todo">
                <span>{todo}</span>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="area complete-area">
        <h2 className="area__title">完了した TODO</h2>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={index} className="todo">
                <span>{todo}</span>
                <button onClick={() => onClickRestore(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
