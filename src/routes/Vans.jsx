import { useEffect } from "react";

export default function Vans() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/vans");
  //       const results = await response.json();
  //       setData(results.results);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    fetch("/api/vans")
        .then(res => res.json())
        .then(data => console.log(data))
}, [])

  return (
    <main className="vans">
      <h1 className="vans__title">Explore our van options</h1>
      {/* {data && data.map((van, index) => {
        return (
          <div key={index}>
            <h1>{van}</h1>
        </div>
        )
      }
        
      )} */}
    </main>
  );
}
