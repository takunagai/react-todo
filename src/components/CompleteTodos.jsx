const CompleteTodos = ({ todos, onClickRestore }) => {
  return (
    <div className="area complete-area">
      <h2 className="area__title">完了した TODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index} className="todo">
              <span>{todo}</span>
              <button onClick={() => onClickRestore(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default CompleteTodos;