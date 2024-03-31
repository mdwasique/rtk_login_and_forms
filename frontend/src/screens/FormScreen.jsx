import React, { useEffect, useState } from "react";
import Axios from "axios";

const FormScreen = () => {
  const [industries, setIndustries] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const response = await Axios.get(
          "https://localhost:8000/api/industries"
        );
        setIndustries(response.data.industries);
      } catch (error) {
        console.error("Error fetching industries:", error);
      }
    };

    fetchIndustries();
  }, []);

  const handleIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
  };

  return (
    <div>
      <label htmlFor="industry">Industry</label>
      <select
        id="industry"
        value={selectedIndustry}
        onChange={handleIndustryChange}
      >
        <option value="">Select an industry</option>
        {industries.map((industry, index) => (
          <option key={index} value={industry}>
            {industry}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormScreen;
