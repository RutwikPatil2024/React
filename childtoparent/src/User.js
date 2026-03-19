function User(props) {
    const name = "Siddhu";
    return (
        <div>
            <h1>User Name</h1>
            <button onClick={()=>props.alert(name)}>Click Me</button>
        </div>
    );
}
export default User;