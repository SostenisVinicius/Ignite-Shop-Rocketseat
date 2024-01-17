import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 4,
  border: 0,
  color: '$white',
  padding: '12px 16px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$green300'
  }
})

export default function Home() {
  return (
    <Button>Enviar</Button>
  )
}
