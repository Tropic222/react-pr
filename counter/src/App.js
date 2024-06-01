import "./style/styles.css";
import PostItem from "./components/PostItem";
function App() {
  return (
    <div className="App">
      <PostItem post={{ id: 1, title: "JS", body: "Description" }} />
    </div>
  );
}

export default App;
