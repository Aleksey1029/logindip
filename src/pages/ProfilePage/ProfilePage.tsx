import { Bio } from "../../components/Bio/Bio";
import { ProfileHeader } from "../../components/ProfileHeader/Profileheader";
import { Header } from "../../components/UI/Header/Header";
import { UserPosts } from "../../components/UserPosts/UserPosts";
import { WhatsNew } from "../../components/WhatsNew/Whatsnew";
import "./ProfilePage.scss";
import { SCProfilePage } from "./ProfilePage.styled";

export const ProfilePage = () => {
  return (
<SCProfilePage>
    <Header />
      <aside className="LeftSide">
      </aside>
      <ProfileHeader />
      <main className="Main">
        <WhatsNew />
        <UserPosts />
      </main>
      <aside className="RightSide">
        <Bio />
      </aside>
      </SCProfilePage>
  );
};
