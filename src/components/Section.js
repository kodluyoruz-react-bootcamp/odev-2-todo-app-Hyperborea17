
function Section({ taskItems, setTaskItems }) {

    const handleRemove = (taskId) => {

        const filtered = taskItems.filter((taskItem) => taskItem.id !== taskId);
        setTaskItems(filtered);
    }
    const newStat = (taskId) => {
        const newList = taskItems.map((item) => {
            if (item.id === taskId) {
                const updatedItem = {
                    ...item,
                    status: !item.status,
                };

                return updatedItem;
            }

            return item;
        });

        setTaskItems(newList);
    }

    return (
        <section className="main">
            <input className="toggle-all" type="checkbox"></input>
            <label htmlFor="toggle-all">
                Mark all as complete
		</label>
            <ul className="todo-list">

                {taskItems.map((task, i) => (
                    <li key={i} className={task.status ? 'completed' : 'none'}>
                        <div className="view">
                            <input className="toggle" onClick={() => newStat(task.id)} type="checkbox" />
                            <label>{task.name}</label>
                            <button className="destroy" onClick={() => handleRemove(task.id)}></button>
                        </div></li>))}


            </ul>

        </section>

    );
}
export default Section;