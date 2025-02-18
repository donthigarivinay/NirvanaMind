import { fetchTherapists } from "../services/api";
import { useEffect, useState } from "react";

const TherapySessions = () => {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    const loadTherapists = async () => {
      const data = await fetchTherapists();
      setTherapists(data);
    };
    loadTherapists();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-blue-700">Therapists</h2>
      <ul className="mt-4">
        {therapists.map((therapist) => (
          <li key={therapist.id} className="p-4 bg-gray-100 rounded-lg mb-2">{therapist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TherapySessions;
