import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AnimalFilter from "./components/AnimalFilter";
import MenuCategories from "./components/MenuCategories";
import ShoppingList from "./components/ShoppingList";
import MessageList from "./components/MessageList";
import ProductList from "./components/ProductList";
import StudentGroups from "./components/StudentGroups";
import BookList from "./components/BookList";

// Home component to display the exercises list
function Home() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "32px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      }}
    >
      <h1 style={{ marginBottom: "32px", color: "#333" }}>React Exercises</h1>
      <nav style={{ marginBottom: "40px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "8px" }}>
            <Link
              to="/animals"
              style={{ color: "#007acc", textDecoration: "none" }}
            >
              Exercise 1: Animal Filter
            </Link>
          </li>
          <li style={{ marginBottom: "8px" }}>
            <Link
              to="/menu"
              style={{ color: "#007acc", textDecoration: "none" }}
            >
              Exercise 2: Menu Categories
            </Link>
          </li>
          <li style={{ marginBottom: "8px" }}>
            <Link
              to="/messages"
              style={{ color: "#007acc", textDecoration: "none" }}
            >
              Exercise 3: Message List
            </Link>
          </li>
          <li style={{ marginBottom: "8px" }}>
            <Link
              to="/shopping"
              style={{ color: "#007acc", textDecoration: "none" }}
            >
              Exercise 4: Shopping List
            </Link>
          </li>
          <li style={{ marginBottom: "8px" }}>
            <Link
              to="/students"
              style={{ color: "#007acc", textDecoration: "none" }}
            >
              Exercise 5: Student Groups
            </Link>
          </li>
          <li style={{ marginBottom: "8px" }}>
            <Link
              to="/products"
              style={{ color: "#007acc", textDecoration: "none" }}
            >
              Exercise 6: Product List
            </Link>
          </li>
          <li style={{ marginBottom: "8px" }}>
            <Link
              to="/books"
              style={{ color: "#007acc", textDecoration: "none" }}
            >
              Exercise 7: Book List
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Regular routes */}
        <Route
          path="/animals"
          element={
            <div
              style={{
                maxWidth: "800px",
                margin: "40px auto",
                padding: "32px",
              }}
            >
              <Link
                to="/"
                style={{ marginBottom: "10px", display: "inline-block" }}
              >
                ← Back to Home
              </Link>
              <h2>Animal Filter</h2>
              <AnimalFilter />
            </div>
          }
        />

        <Route
          path="/menu"
          element={
            <div
              style={{
                maxWidth: "800px",
                margin: "40px auto",
                padding: "32px",
              }}
            >
              <Link
                to="/"
                style={{ marginBottom: "20px", display: "inline-block" }}
              >
                ← Back to Home
              </Link>
              <h2>Menu Categories</h2>
              <MenuCategories />
            </div>
          }
        />

        <Route
          path="/messages"
          element={
            <div
              style={{
                maxWidth: "800px",
                margin: "40px auto",
                padding: "32px",
              }}
            >
              <Link
                to="/"
                style={{ marginBottom: "20px", display: "inline-block" }}
              >
                ← Back to Home
              </Link>
              <h2>Message List</h2>
              <MessageList />
            </div>
          }
        />

        <Route
          path="/shopping"
          element={
            <div
              style={{
                maxWidth: "800px",
                margin: "40px auto",
                padding: "32px",
              }}
            >
              <Link
                to="/"
                style={{ marginBottom: "20px", display: "inline-block" }}
              >
                ← Back to Home
              </Link>
              <h2>Shopping List</h2>
              <ShoppingList />
            </div>
          }
        />

        <Route
          path="/students"
          element={
            <div
              style={{
                maxWidth: "800px",
                margin: "40px auto",
                padding: "32px",
              }}
            >
              <Link
                to="/"
                style={{ marginBottom: "20px", display: "inline-block" }}
              >
                ← Back to Home
              </Link>
              <h2>Student Groups</h2>
              <StudentGroups />
            </div>
          }
        />

        <Route
          path="/products"
          element={
              <div
                style={{
                  maxWidth: "800px",
                  margin: "40px auto",
                  padding: "32px",
                }}
              >
                <Link
                  to="/"
                  style={{ marginBottom: "20px", display: "inline-block" }}
                >
                  ← Back to Home
                </Link>
                <h2>Product List</h2>
                <ProductList />
              </div>
          }
        />

        <Route
          path="/books"
          element={
              <div
                style={{
                  maxWidth: "800px",
                  margin: "40px auto",
                  padding: "32px",
                }}
              >
                <Link
                  to="/"
                  style={{ marginBottom: "20px", display: "inline-block" }}
                >
                  ← Back to Home
                </Link>
                <h2>Book List</h2>
                <BookList />
              </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
