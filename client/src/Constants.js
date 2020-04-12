const prod = {
    url: {
        API_URL: "https://api-dot-wics-racist-twee-1583386228393.appspot.com/",
      }
}
const dev = {
    url: {
        API_URL: "http://localhost:9000/testAPI",
      }
}    

export const config = process.env.NODE_ENV === "production" ? prod: dev;