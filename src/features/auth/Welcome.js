import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import useTitle from "../../hooks/useTitle";

const Welcome = () => {
    const { username, isManager, isAdmin } = useAuth();

    useTitle(`KGTech: ${username}`);

    const date = new Date();
    const today = new Intl.DateTimeFormat('en-SA', { dateStyle: 'full', timeStyle: 'long' }).format(date);

    const content = (
        <section className="welcome">
            <p>{today}</p>

            <h1>Welcome {username}!</h1>

            <Link to='notes'><button className="app__button">View techNotes</button></Link>
            <Link to='notes/new'><button className="app__button">Add New Note</button></Link>
            {(isManager || isAdmin) && <Link to='users'><button className="app__button">View User Settigs</button></Link>}
            {(isManager || isAdmin) && <Link to='users/new'><button className="app__button">Add New User</button></Link>}
        </section>
    )

  return content;
}

export default Welcome
