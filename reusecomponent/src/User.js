function User(props) {
    return (
        <div>
            <h1>{props.data.name},{props.data.address}</h1>
        </div>
    );
}

export default User;