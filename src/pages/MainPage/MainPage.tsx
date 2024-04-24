import { Header } from "../../components/UI/Header/Header";
import "./MainPage.scss";
import { SCMainPage } from "./MainPage.styled";

export const MainPage = () => {
  return (
    <SCMainPage>
      <Header/>
      <aside className="LeftSide">
      </aside>
      <main className="Main">
      </main>
      <aside className="RightSide">    
      </aside>
    </SCMainPage>
  );
};
