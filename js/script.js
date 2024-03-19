let divProducts = document.querySelector("#produtos");

fetch('https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/cart').then((response) => {
    response.json().then((dados) =>{
            dados.map((produto) => {
                divProducts.innerHTML += `
                <div class="product" id="${produto.id}">
                   <img src="${produto.photo}" alt="">
                   
                    <div class = "info">
                        <p class="discription">${produto.description}</p>
                    </div>
                    <div class="preco-desc">
                        <p class="desconto">${produto.discont}</p>
                        <p class="preco">${produto.price}</p>
                    </div>
              </div>
                ` 
          })
        })
    })

