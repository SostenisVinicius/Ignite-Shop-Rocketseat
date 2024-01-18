import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente voluptatum explicabo omnis? Deleniti quia molestiae magnam maxime repellendus reiciendis non dolorum, neque voluptates, temporibus facere sequi assumenda, enim repellat veniam.</p>
      
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}