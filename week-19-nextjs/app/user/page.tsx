import axios from "axios";
import { setTimeout } from "timers/promises";

export default async function User() {
  const response = await axios.get(
    "http://localhost:3000/api/v1/user/details"
  );

   //await setTimeout(5000); // Simulate a delay of 5 seconds

  const data = response.data;

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {data.name}</div>
          <div>Email: {data.email}</div>
        </div>
      </div>
    </div>
  );
}

////not ssr because google see loading first also its clientside due to  useeffect
// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function User() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState({});

//   useEffect(() => {
//     axios
//       .get(
//         "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
//       )
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex flex-col justify-center h-screen">
//       <div className="flex justify-center">
//         <div className="border p-8 rounded">
//           <div>
//             Name: {data.name}
//           </div>

//           <div>
//             Email: {data.email}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }