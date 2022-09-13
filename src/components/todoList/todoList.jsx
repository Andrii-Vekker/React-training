import "./toDoList.css"

const ToDoList = ({ todos, onDeleteTodo, todoDone }) => (
    
<>
        <h2>Состояние компонента</h2>
        <div>
            <span>Общее кол-во выполненных:{ todos.length}</span> <br />
            <span>Общее кол-во невыполненных: {todoDone}</span>
        </div>
        <ul className="TodoList">{todos.map(({ id, text }) => <li key={id} className="TodoList__item">
            <p className="TodoList__text ">{text}</p>
            <button type="button" onClick={() => onDeleteTodo(id)}>Deleted</button>
        </li>)}
        </ul>
 </>
);

export default ToDoList