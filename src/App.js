import { useState } from 'react';
import './App.css';

function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [selectedHorse, setSelectedHorse] = useState('');
  const [remainingLessons, setRemainingLessons] = useState(0);

  const packages = [
    { name: '5 Lessons', value: 5, price: 250 },
    { name: '10 Lessons', value: 10, price: 450 },
    { name: '20 Lessons', value: 20, price: 850 },
  ];

  const instructors = ['Alice', 'Bob', 'Charlie'];
  const horses = ['Star', 'Lightning', 'Shadow'];

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setRemainingLessons(pkg.value);
  };

  const handleBooking = () => {
    if (remainingLessons > 0 && selectedInstructor && selectedHorse) {
      setRemainingLessons(prev => prev - 1);
      alert(`Lesson booked with ${selectedInstructor} on ${selectedHorse}. Remaining: ${remainingLessons - 1}`);
    } else {
      alert('Please select an instructor and a horse.');
    }
  };

  return (
    <div className="App" style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
      <h1>Book Your Riding Lessons</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {packages.map((pkg) => (
          <button
            key={pkg.name}
            onClick={() => handlePackageSelect(pkg)}
            style={{
              padding: 10,
              backgroundColor: selectedPackage?.name === pkg.name ? '#4CAF50' : '#eee',
              color: selectedPackage?.name === pkg.name ? 'white' : 'black',
              border: '1px solid #ccc',
              borderRadius: 5,
              cursor: 'pointer'
            }}
          >
            {pkg.name} - ${pkg.price}
          </button>
        ))}
      </div>

      {selectedPackage && (
        <div style={{ marginTop: 30 }}>
          <h2>Book a Lesson</h2>

          <div style={{ marginBottom: 10 }}>
            <label>Instructor:</label>
            <select value={selectedInstructor} onChange={(e) => setSelectedInstructor(e.target.value)}>
              <option value="">-- Select Instructor --</option>
              {instructors.map((inst) => (
                <option key={inst} value={inst}>{inst}</option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: 10 }}>
            <label>Horse:</label>
            <select value={selectedHorse} onChange={(e) => setSelectedHorse(e.target.value)}>
              <option value="">-- Select Horse --</option>
              {horses.map((horse) => (
                <option key={horse} value={horse}>{horse}</option>
              ))}
            </select>
          </div>

          <button onClick={handleBooking} style={{ padding: 10, backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: 5 }}>
            Book Lesson
          </button>

          <p style={{ marginTop: 10 }}>Remaining Lessons: {remainingLessons}</p>
        </div>
      )}
    </div>
  );
}

export default App;
