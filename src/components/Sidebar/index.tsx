import { MdEdit, MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../Button";
import { SidebarWrapper } from "./styles";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Link to="/">
        <Button
          icon={<MdHome />}
          text="Home"
          onClick={() => {}}
          variant="secondary"
        />
      </Link>
      <Link to="/supplier">
        <Button
          icon={<MdEdit />}
          text="Cadastrar fornecedores"
          onClick={() => {}}
          variant="secondary"
        />
      </Link>
    </SidebarWrapper>
  );
};

export default Sidebar;
