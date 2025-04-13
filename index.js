import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
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
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Book Your Riding Lessons</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {packages.map((pkg) => (
          <Card key={pkg.name} onClick={() => handlePackageSelect(pkg)} className="cursor-pointer hover:shadow-xl">
            <CardContent>
              <h2 className="text-xl font-semibold">{pkg.name}</h2>
              <p>${pkg.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedPackage && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Book a Lesson</h2>

          <div>
            <label className="block font-medium">Choose Instructor:</label>
            <select value={selectedInstructor} onChange={(e) => setSelectedInstructor(e.target.value)} className="w-full p-2 border rounded">
              <option value="">-- Select Instructor --</option>
              {instructors.map((inst) => (
                <option key={inst} value={inst}>{inst}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium">Choose Horse:</label>
            <select value={selectedHorse} onChange={(e) => setSelectedHorse(e.target.value)} className="w-full p-2 border rounded">
              <option value="">-- Select Horse --</option>
              {horses.map((horse) => (
                <option key={horse} value={horse}>{horse}</option>
              ))}
            </select>
          </div>

          <Button onClick={handleBooking}>Book Lesson</Button>
          <p className="text-sm text-gray-600">Remaining Lessons: {remainingLessons}</p>
        </div>
      )}
    </div>
  );
}
