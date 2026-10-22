import * as S from './styles'

type Props = {
  children: string
  title: string
  to?: string
  tipo?: 'button' | 'submit'
  variante?: 'primario' | 'secundario'
  desabilitado?: boolean
  onClick?: () => void
}

const Botao = ({
  children,
  title,
  to,
  tipo = 'button',
  variante = 'primario',
  desabilitado = false,
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
      type={tipo}
      title={title}
      $variante={variante}
      disabled={desabilitado}
      onClick={onClick}
    >
      {children}
    </S.BotaoContainer>
  )
}

export default Botao
