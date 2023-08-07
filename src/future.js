import React, { useState } from "react";

const UpdateData = () => {
  const [response, setResponse] = useState(null);

  const handleUpdate = async () => {
    try {
      const dataToSend = {
        city: " ",
        price: 100,
        img: "nuotrauka.jpg",
      };

      // nera sukurta api/update
      const response = await fetch("/api/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error("Klaida atliekant PUT užklausą:", error);
    }
  };

  return (
    <div>
      <h1>Atnaujinti duomenys</h1>
      <button onClick={handleUpdate}>Atnaujinti</button>
      {response && (
        <div>
          <h2>Atsakymas iš serverio:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UpdateData;




//Reikia iskelti 

// pages/api/update.js
// export default function handler(req, res) {
//     if (req.method === "PUT") {
//       const { city, price, img } = req.body;
//       const updatedData = {
//         city: `Atnaujintas miestas: ${city}`,
//         price: `Nauja kaina: ${price}`,
//         img: `Nauja nuotrauka: ${img}`,
//       };
  
//       res.status(200).json(updatedData);
//     } else {
//       res.status(405).end(); // neleidžiama
//     }
//   }
  
  