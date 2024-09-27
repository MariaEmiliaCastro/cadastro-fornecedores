import { MdEdit, MdHome } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import Button from "../Button";
import { SidebarWrapper } from "./styles";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <SidebarWrapper>
      <div>
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
      </div>
      <div>
        <Button
          text="Sair"
          onClick={() => {
            auth.signOut();
            navigate("/login");
          }}
          variant="delete"
        />
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
