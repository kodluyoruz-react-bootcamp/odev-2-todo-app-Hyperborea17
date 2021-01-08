

function Header({ name, event, handleKey }) {

    return (
        <header className="header">
            <h1>todos</h1>
            <form>
                <input className="new-todo" onKeyPress={handleKey} onChange={event} placeholder="Put Your Tasks Here,my dear :)" value={name} autoFocus></input>
            </form>
        </header>
    );
}
export default Header;