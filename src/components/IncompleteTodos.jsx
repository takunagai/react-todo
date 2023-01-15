const InconpleteTodos = ({ todos, onClickComplete, onClickDelete }) => {
    return (
      <div className="area incomplete-area">
        <h2 className="area__title">未完了の TODO</h2>
        <ul>
          {todos.map((todo, index) => {
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
    )
}

export default InconpleteTodos;