const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h1>Detalhes Pessoais</h1>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
        </ul>
        {(idade >=18) ? <p>Está pessoa pode tirar carteira de motorista</p> :
        <p>Está pessoa não pode tirar carteira de motorista</p>}
    </div>
  )
}

export default UserDetails