import { useEffect, useRef, useState } from "react";

//custom hook for  give  api url
export function usePostTitle() {
  const [post, setPost] = useState({});

  async function getPost() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setPost(json);
  }
  useEffect(() => {
    getPost();
  }, []);

  return post.title;
}

//dynamic give data of any url
export function useFetch(url) {
  const [finalData, setFinalData] = useState({});
  const [Loading, setLoading] = useState(true);

  async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
    setLoading(false);
  }
  useEffect(() => {
    getDetails();
  }, [url]); //if we stay empaty  then  it will not work  for dynamic it will onlu work for  simple 1 fetch

  //refetching the  data for seeing is there is any changes
  useEffect(() => {
    setInterval(getDetails, 10 * 1000);
  });
  return { finalData, Loading };
}


////------------------------usePrev(ex- previous song)------------------------------------------
export const usePrev = (value)=>{
  const ref = useRef();

  useEffect(()=>{
    ref.current = value;
  },[value])

  return ref.current; //it  return first then useEffect  is called
}
  

