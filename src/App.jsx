import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import Covid from './components/Covid'
import Card from './components/Card'

function App() {

  const [covidinho, setCovidinho] = useState([]);


  const getData = async () => {
    try {
      const response = await axios.get("https://covid19-brazil-api.now.sh/api/report/v1");

      const data = response.data;

      setCovidinho(data.data);

    }



    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <header>
        <h1>Casos de <span> Covid-19 </span> nos estados brasileiros</h1>
      </header>

      <main>
        <section className='card-section'> 
          <div className='container'>
            {covidinho.map((newcovid) =>
              <div key={newcovid.uid} className='tablestates'>
                <Card
                  state={newcovid.state}
                  uf={newcovid.uf}
                  cases={newcovid.cases}
                  deaths={newcovid.deaths}
                  suspects={newcovid.suspects}
                  refuses={newcovid.refuses}
                />
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
