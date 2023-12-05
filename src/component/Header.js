
import styles from "./Header.module.css";
//import  "./Header.module.css";
import {Link} from "react-router-dom";

const Nav = function() {
    return <h1>Hellom MoMo</h1>;
}

const Header = () => {
    console.log('Header')
    return <div className={styles.header}>
        <h1><Link to="/">토익 영단어(고급)</Link></h1>
        <div className={styles.menu}>
            <Link to="/create_word" className={styles.link}>단어추가</Link>
            <a href="/create_day"  className={styles.link} >Day 추가</a>
        </div>        
    </div>
    ;
}

export {Header,Nav}
