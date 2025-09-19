import './App.css'
import AnimalFilter from './components/AnimalFilter';
import MenuCategories from './components/MenuCategories';
import ShoppingList from './components/ShoppingList';
import MessageList from './components/MessageList';
import ProductList from './components/ProductList';
import StudentGroups from './components/StudentGroups';
import BookList from './components/BookList';

function App() {
  
  return (
    <div style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '32px',
      background: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
    }}>
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Exercise 1: Shopping List</h2>
        <div style={{ padding: '16px 0' }}>
          <AnimalFilter />
        </div>
      </section>
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Exercise 2: Counter</h2>
        <div style={{ padding: '16px 0' }}>
          <MenuCategories />
        </div>
      </section>
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Exercise 3: Todo List</h2>
        <div style={{ padding: '16px 0' }}>
          <MessageList />
        </div>
      </section>
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Exercise 4: User Profile</h2>
        <div style={{ padding: '16px 0' }}>
          <ShoppingList />
        </div>
      </section>
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Exercise 5: Weather Widget</h2>
        <div style={{ padding: '16px 0' }}>
          <StudentGroups />
        </div>
      </section>
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Exercise 6: Calculator</h2>
        <div style={{ padding: '16px 0' }}>
          <ProductList />
        </div>
      </section>
      <section>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Exercise 7: Contact Form</h2>
        <div style={{ padding: '16px 0' }}>
          <BookList />
        </div>
      </section>
    </div>
  )
}

export default App
