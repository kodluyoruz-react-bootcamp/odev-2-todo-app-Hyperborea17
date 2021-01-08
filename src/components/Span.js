import { useState } from "react";

function Span({ itemLength, taskItems, setTaskItems }) {
    const [isActive, setActive] = useState(false);
    const handleAll = () => {
        const filtered = taskItems.filter((taskItem) => taskItem.status === false, true);
        setTaskItems(filtered);
        setActive(!isActive);

    }
    const handleActive = () => {
        const filtered = taskItems.filter((taskItem) => taskItem.status === false);
        setTaskItems(filtered);
        setActive(!isActive);
    }
    return (

        <footer className="footer">
            <span className="todo-count">
                <strong>{itemLength} </strong>
			items left
        </span>
            {taskItems.map((task, i) => (
                <ul className="filters" key={i}>
                    <li><a className={isActive ? 'selected' : 'none'} onClick={handleAll}>All</a></li>
                    <li><a className={isActive ? 'selected' : 'none'} onClick={handleActive}>Active</a></li>
                    <li><a>Completed</a></li>
                </ul>))}
            <button className="clear-completed">
                Clear completed
		            </button>
        </footer>

    );
}
export default Span;