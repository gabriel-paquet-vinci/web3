import logo from "./LOGO HE VINCI.png";

const Header = (props) => {
    return (
      <><h1>{props.course}</h1><img src={logo} alt="logo vinci"></img></>
    )
}

export default Header;