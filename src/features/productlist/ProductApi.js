const fetchCount = () => {
  return new Promise(async (resolve) => {
    setTimeout(async () => {
      const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        resolve({data});
    console.log("response succeeded")
    }, 500);
  }
  
  );
};
export default fetchCount;
