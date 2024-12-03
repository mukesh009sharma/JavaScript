//2.Write a function fetchData(callback) that simulates fetching data from a server. After 2 seconds, call the callback with a message, e.g., "Data fetched".
function fetchData(callback){
    setTimeout(() => {

        console.log("Data fetched");
    }, 2000);
}
fetchData((message)=>{
    console,log(message);
})