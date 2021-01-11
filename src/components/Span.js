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
                    <li><button className={isActive ? 'selected' : 'none'} onClick={handleAll}>All</button></li>
                    <li><button className={isActive ? 'selected' : 'none'} onClick={handleActive}>Active</button></li>
                    <li><button>Completed</button></li>
                </ul>))}
            <button className="clear-completed">
                Clear completed
		            </button>
        </footer>

    );
}
export default Span;
