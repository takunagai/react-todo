const InputTodo = ({todoText, setTodoText, onClickAdd}) => {
    return (
      <div className="area input-area">
        <input
          type="text"
          placeholder="TODO を入力"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
    )
}

export default InputTodo;