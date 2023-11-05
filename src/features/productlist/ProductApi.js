const fetchCount= ()=>{
    return new Promise(async (resolve,reject)=>{
        setTimeout(async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const data = await response.json()
            resolve({data})

        },500)
    })
}
export default fetchCount;