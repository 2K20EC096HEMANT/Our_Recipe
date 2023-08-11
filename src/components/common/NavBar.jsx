import { Menu } from "semantic-ui-react";
import { logo } from "../../constants/constant";
import { Link } from "react-router-dom";



const NavBar = () => {

    return (
        <Menu borderless fixed="top">
            <Menu.Item>
                <h2 style={{color: '#2784f0', fontStyle: "italic"}}>Our_RECIPES</h2>
            </Menu.Item>
            <Menu.Item name="Home" as={Link} to="/"/>
            <Menu.Item name="Recipes" as={Link} to="/recipes"/>
        </Menu>
    )
}

export default NavBar;