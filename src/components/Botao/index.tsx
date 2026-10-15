import * as S from './styles'

type Props = {
  children: string
  title: string
  to?: string
  variante?: 'primario' | 'secundario'
  onClick?: () => void
}

const Botao = ({
  children,
  title,
  to,
  variante = 'primario',
  onClick,
}: Props) => {
  if (to) {
    return (
      <S.BotaoLink to={to} title={title} $variante={variante}>
        {children}
      </S.BotaoLink>
    )
  }

  return (
    <S.BotaoContainer
      type="button"
      title={title}
      $variante={variante}
      onClick={onClick}
    >
      {children}
    </S.BotaoContainer>
  )
}

export default Botao
