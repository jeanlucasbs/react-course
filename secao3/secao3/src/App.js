import './App.css';
import Mar from './assets/Mar.jpg'
import ManageData from './components/ManageData.js'
import ListRender from './components/ListRender.js'
import ConditionalRender from './components/ConditionalRender.js'
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';


function App() {
  
  const cars = [
    {id: 1, brand: "Ferrari", km: 15, color: "Amarelo", newCar: true},
    {id: 2, brand: "KIA", km: 1575, color: "Amarelo", newCar: false},
    {id: 3, brand: "Renault", km: 879, color: "Amarelo", newCar: true}
  ]
  
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
          brand= {car.brand}
          km= {car.km}
          color= {car.color}
          newCar= {car.newCar}
        />
      ))}

    </div>
  );
}

export default App;
