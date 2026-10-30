import { useState } from "react";
import "./ListaPacotes.css"
import Pacote from "./Pacote";
import type { PacoteType } from "./types";

type ListaPacotesProps = {
    pacotes: Array<PacoteType>;
    acaoExcluir: (id: string)=>void;

}

export default function ListaPacotes({pacotes, acaoExcluir}: ListaPacotesProps) {
    const [ordenacao, setOrdenacao] = useState("peso");

    function mudaOrdenacao(e) {
        setOrdenacao(e.target.value);
    }

    return (
        <div>
            <div>Ordenar por:
                <select onChange={mudaOrdenacao}>
                    <option value="peso">Peso</option>
                    <option value="altura">Altura</option>
                    <option value="largura">Largura</option>
                    <option value="profundidade">Profundidade</option>
                </select>
            </div>
            <dl>{pacotes
                .sort((x,y) => x[ordenacao] - y[ordenacao])
                .map(p => (
                <Pacote pacote={p} key={p.id} acaoExcluir={acaoExcluir}></Pacote>
                ))}
            </dl>
        </div>
    );  
}