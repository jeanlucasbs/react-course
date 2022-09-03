import './App.css';
import MyComponents from './components/MyComponents';
import Title from './components/Title';
import Car from './components/Car.js'

function App() {
  let n = 15;
  
  const myCars = [
    {id: 1, brand: "Ferrari", km: 15, color: "Amarelo", newCar: true},
    {id: 2, brand: "KIA", km: 1575, color: "Amarelo", newCar: false},
    {id: 3, brand: "Renault", km: 879, color: "Amarelo", newCar: true}
  ]

  return (
    <div className="App">
      {/*CSS Global */}
      <h1>React com CSS</h1>
      {/*CSS de Componente*/}
      <MyComponents/>
      <p>Este paragrafo é do App.js</p>
      <h2 style={{color: "blue", padding: "25px", borderTop: "22px solid red"}}>
        Este é um paragrafo usando CSS inline
      </h2>
      {/*CSS Dinamico */}
      <h2 style={n < 10 ? {color: "purple"} : {color: "orange"}}>CSS Dinâmico</h2>
      <h2 style={n > 10 ? {color: "purple"} : {color: "orange"}}>CSS Dinâmico</h2>

      <Title/>
      <h2 className="my_title">Testando</h2>

      <h1>Showroom de Carros</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
