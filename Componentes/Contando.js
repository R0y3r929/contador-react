/*ReactDOM.render(<h4>Pie de pagina generado desde archivo externo...</h4>, document.querySelector("#root3"));*/
const Contando = () => {
    const [contador, setContador] = React.useState(0);
    const sumar=()=>setContador(contador+1);
    const restar=()=>setContador(contador-1);
    const reiniciar=()=>setContador(contador-contador);

    return (
        <div>
            <h4 className={contador < 0 ? "menor" : "mayor"}>
                Contador de carpeta Components: {contador}{" "}
            </h4>
            <hr />
            <button id="sumar" onClick={sumar}>Aumentar</button>
            <button id="restar" onClick={restar}>Dismunuir</button>
            <button id="resetear" onClick={reiniciar}>RESET</button>
        </div>
    );
};