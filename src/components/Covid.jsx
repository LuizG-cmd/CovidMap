import { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card";

function Covid() {

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

            <ul>
                {covidinho.map((newcovid) =>
                    <div key={newcovid.uid} className='tablestates'>
                        <table>
                            <thead>
                                <th>
                                    Sigla
                                </th> 
                                <th>
                                    Estado
                                </th> 
                                <th>
                                    Casos
                                </th>                                
                            </thead>
                            <tbody>
                                <tr>
                                    {newcovid.uf}
                                </tr>
                                <tr>
                                    {newcovid.state}
                                </tr>
                                <tr>
                                    {newcovid.cases}
                                </tr>
                            </tbody>
                        </table>


                    </div>
                )}
            </ul>
        </>

    );
}



export default Covid;