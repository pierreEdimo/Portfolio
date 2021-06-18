import AppHeader from "./appheader";
import AppFooter from "./appfooter";

export default function Layout({ children }) {
  return (
    <div className="container-fluid">
      <AppHeader />
      <div className="container">{children}</div>
      <div className="container">
        <AppFooter />
      </div>
    </div>
  );
}
