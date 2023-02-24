
const apiUrl = "https://www.dummyjson.com"
const productsEndPoint = "products"
const contentId = "productList"

function main(){
    const url = `${apiUrl}/${productsEndPoint}`

    fetch(url).then((response) => response.json())
    .then((data) => {

        for (index in data.products) {
            const product = data.products[index]
            const container = document.getElementById(contentId)
            const content = `<div><span>${product.brand}</span><span>${product.description}</span></div>`
            container.innerHTML += content
        }

    } );
 }

main()
