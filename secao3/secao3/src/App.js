import './App.css';
import Mar from './assets/Mar.jpg'
import ManageData from './components/ManageData.js'
import ListRender from './components/ListRender.js'
import ConditionalRender from './components/ConditionalRender.js'
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import UserDetails from './components/UserDetails';

function App() {
  
  const pessoas = [
    {id: 1, nome: "Jean", idade: 23, profissao: "Front-Developer"},
    {id: 2, nome: "Mateus", idade: 35, profissao: "Médico"},
    {id: 3, nome: "Felipe", idade: 17, profissao: "Estudante"}
  ]


  const cars = [
    {id: 1, brand: "Ferrari", km: 15, color: "Amarelo", newCar: true},
    {id: 2, brand: "KIA", km: 1575, color: "Amarelo", newCar: false},
    {id: 3, brand: "Renault", km: 879, color: "Amarelo", newCar: true}
  ]
  

  function showMessage(){
    console.log("Evento do componente pai")
  }
  
  return (
    <div className="App">
      <h1>Avançando com React</h1>
      {/*Utilizando imagem na pasta publica */}
      <div>
        <img src="./logo192.png" alt="Logo do React"></img>
      </div>

      {/*Utilizando imagem na pasta src */}
      <div>
        <img src={Mar} alt="Imagem do Mar"></img>
      </div>

      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/*Props*/}
      <ShowUserName name="Matheus"/>
      {/*Destructuring*/}
      <CarDetails brand="VW" km={300} color="red" newCar={true}/>
      
      {/*Reaproveitando*/}
      <CarDetails brand="Fiat" km={200} color="blue" newCar={false}/>
      <CarDetails brand="Ford" km={150} color="black" newCar={true}/>

      {/*Renderização em Loop*/}
      {cars.map((car) => (
        <CarDetails 
          key= {car.id}
          brand= {car.brand}
          km= {car.km}
          color= {car.color}
          newCar= {car.newCar}
        />
      ))}

      <Container>
        <p>Este é o conteúdo</p>
      </Container>

       {/*Executar função */} 
      <ExecuteFunction myFunction={showMessage}/>

      {/*Desafio da seção*/}
      {pessoas.map((pessoa) => (
        <UserDetails
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      ))}
    </div>
  );
}

export default App;
