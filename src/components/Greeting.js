import useFetch from "./useFetch";
const Greeting = () => {
    const user = useFetch('http://localhost:8080/username')

    return (<>
    { user && <h1 className="Greeting">Ahoj {user.name} </h1>}
    </>
      
    );
}

export default Greeting;