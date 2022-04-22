import CreatePost from "../components/posts/CreatePost";
import Sidebar from "../components/nav/Sidebar";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>LOGO</h1>
      </div>
      <div className="header-actions">
        <CreatePost />
        <Sidebar />
      </div>
    </header>
  );
}
