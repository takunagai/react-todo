const InputTodo = ({
  todoText,
  setTodoText,
  onClickAdd,
  disabled
}) => {

    const style = {
      padding: "8px",
      width: "calc(100% - 5rem)",
      outline: "none"
    }
    return (
      <div className="area">
        <input
          disabled={disabled}
          type="text"
          placeholder="TODO を入力"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          style={style}
        />
        <button
          disabled={disabled}
          onClick={onClickAdd}
        >
          追加
        </button>
      </div>
    )
}

export default InputTodo;