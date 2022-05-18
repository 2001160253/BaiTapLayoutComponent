import logo from "./logo.svg";
import "./App.css";
import Header from "./LayoutComponent/header";
import Banner from "./LayoutComponent/banner";
import Content from "./LayoutComponent/content";
import Footer from "./LayoutComponent/footer";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <div className="app-banner">
          <Banner></Banner>
        </div>
        <div className="app-content">
          <Content></Content>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
