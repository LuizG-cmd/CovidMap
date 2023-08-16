import Covid from "./Covid";

function Card({ state, uf, cases, deaths, suspects, refuses }) {
    return (
                <div>
                    <h3>
                        Estado:
                    </h3>
                    <p>
                        {state}
                    </p>
                    <h3>
                        Unidade Federativa:
                    </h3>
                    <p>
                        {uf}
                    </p>
                    <h3>
                        Casos:
                    </h3>
                    <p>
                        {cases}
                    </p>
                    <h3>
                        Mortes:
                    </h3>
                    <p>
                        {deaths}
                    </p>
                    <h3>
                        Suspeitos:
                    </h3>
                    <p>
                        {suspects}
                    </p>
                    <h3>
                        Descartados:
                    </h3>
                    <p>
                        {refuses}
                    </p>
                </div>
    );
}

export default Card;