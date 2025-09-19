import './App.css'
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import Exercise3 from './components/Exercise3';
import Exercise4 from './components/Exercise4';
import Exercise5 from './components/Exercise5';
import Exercise6 from './components/Exercise6';
import Exercise7 from './components/Exercise7';

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
          <Exercise1 />
        </div>
      </section>
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Exercise 2: Counter</h2>
        <div style={{ padding: '16px 0' }}>
          <Exercise2 />
        </div>
      </section>
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Exercise 3: Todo List</h2>
        <div style={{ padding: '16px 0' }}>
          <Exercise3 />
        </div>
      </section>
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Exercise 4: User Profile</h2>
        <div style={{ padding: '16px 0' }}>
          <Exercise4 />
        </div>
      </section>
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Exercise 5: Weather Widget</h2>
        <div style={{ padding: '16px 0' }}>
          <Exercise5 />
        </div>
      </section>
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Exercise 6: Calculator</h2>
        <div style={{ padding: '16px 0' }}>
          <Exercise6 />
        </div>
      </section>
      <section>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '8px' }}>Exercise 7: Contact Form</h2>
        <div style={{ padding: '16px 0' }}>
          <Exercise7 />
        </div>
      </section>
    </div>
  )
}

export default App
