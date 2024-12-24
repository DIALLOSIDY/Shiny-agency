
import { Link } from 'react-router-dom';

function Header(){

    return(<nav>
        <Link to="/">Acceuil</Link>
        <Link to="/survey/">Questionnaire </Link>
        <Link to="/freelance">freelance </Link>


    </nav>)
}

export default Header