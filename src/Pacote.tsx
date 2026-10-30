import "./Pacote.css"
import type { PacoteType } from "./types"

type PacoteProps = {
    pacote: PacoteType;
}
export default function Pacote({pacote}: PacoteProps) {
    return (
        <div className="pacote">
            <dt>id</dt>
            <dd title={pacote.id}>{pacote.id.substring(0,8)}</dd>
            <dt>Largura (cm)</dt>
            <dd>{pacote.largura}</dd>
            <dt>Altura (cm)</dt>
            <dd>{pacote.altura}</dd>
            <dt>Profundidade (cm)</dt>
            <dd>{pacote.profundidade}</dd>
            <dt>Peso (kg)</dt>
            <dd>{pacote.peso}</dd>
        </div>)
}