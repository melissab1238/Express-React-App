const prod = {
    url: {
        API_URL: "https://api-dot-wics-racist-twee-1583386228393.appspot.com/testAPI",
      }
}
const dev = {
    url: {
        API_URL: "http://localhost:9000/testAPI",
      }
}    

export const config = process.env.DEVELOPMENT === "true" ? dev: prod;
