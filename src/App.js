import { useRef, useState } from "react";
import "./App.css";
import "./otherStyle.css";

/*function GridTable(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li>);
  let filas = for (let filas = 1; filas < props.filas; filas++) {
    return(
    <tr>
    
    </tr>)
  }
  return (
    {[Array(10)].map((x, i) =>
    <ObjectRow key={i} />
  )}
  );
}
*/
function App() {
  const idColorBlack = useRef(null);
  const idColorBlue = useRef(null);
  const idColorGreen = useRef(null);

  const [filasGridTable, setFilasGridTable] = useState(5);
  const [columnasGridTable, setColumnasGridTable] = useState(5);

  const [selectColor, setSelectColor] = useState("black");

  const changeColorSelected = (e, colorSelected) => {
    idColorBlack.current.classList.remove("bg-color-active");
    idColorBlue.current.classList.remove("bg-color-active");
    idColorGreen.current.classList.remove("bg-color-active");
    e.target.classList.add("bg-color-active");
    setSelectColor(colorSelected);
  };

  const printColorSelectedInGridTable = (e) => {
    const colors = ["bg-color-black", "bg-color-blue", "bg-color-green"];
    e.target.classList.remove(...colors);
    e.target.classList.add(`bg-color-${selectColor}`);
  };

  return (
    <div className="App">
      <section className="ejercicio">
        <div className="section__sizeGridTable">
          <span>Filas:</span>
          <input
            type={"number"}
            value={filasGridTable}
            onChange={(e) => {
              setFilasGridTable(Number(e.target?.value));
            }}
          ></input>
          <span>Columnas:</span>
          <input
            type={"number"}
            value={columnasGridTable}
            onChange={(e) => {
              setColumnasGridTable(Number(e.target?.value));
            }}
          ></input>
        </div>

        <div className="section__gridTable">
          {[...Array(filasGridTable)].map((row, iRow) => (
            <tr key={iRow}>
              {[...Array(columnasGridTable)].map((column, iColumn) => (
                <td
                  id={`${iRow},${iColumn}`}
                  key={iColumn}
                  className="bg-td"
                  onClick={(e) => printColorSelectedInGridTable(e)}
                ></td>
              ))}
            </tr>
          ))}
        </div>

        <div className="section__textInfo">
          <p>Select a color and click on any cell of grid</p>
        </div>

        <div className="section__selectColor">
          <tr>
            <td
              ref={idColorBlack}
              className="bg-td bg-color-active"
              onClick={(e) => changeColorSelected(e, "black")}
            ></td>
            <td
              ref={idColorBlue}
              className="bg-td bg-color-blue"
              onClick={(e) => changeColorSelected(e, "blue")}
            ></td>
            <td
              ref={idColorGreen}
              className="bg-td bg-color-green"
              onClick={(e) => changeColorSelected(e, "green")}
            ></td>
          </tr>
        </div>
      </section>
    </div>
  );
}

export default App;
