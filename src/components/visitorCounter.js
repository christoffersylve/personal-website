import '../App.css';
import { useEffect, useState } from "react";

export const VisitorCounter = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [visitorCount,setVisitorCount] = useState(0);

  const URL = "https://api.api-ninjas.com/v1/counter?id=counter&hit=true";

  useEffect(() => {
    if(!isLoaded) {
      setIsLoaded(true);
      fetch(URL, {
        method: "GET", 
        headers: { 'X-Api-Key': 'z2mDhJso2VClEhvrv0LqJg==TK2yhSuGYrLyve0d'},
        contentType: 'application/json',
      }).then((response) => response.json())
      .then((json) => setVisitorCount(json.value));
    }
    console.log(visitorCount);
  });

  return (
    <div className='visitor-counter'>
        <h2>{visitorCount} visitors to this website so far!</h2>
    </div>
  )
}