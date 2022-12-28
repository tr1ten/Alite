import { useEffect } from "react";
import { autotab } from "../utils/autotab";

type Props = {
    grid: number[][];
    isDisabled: boolean;
    updateHandler: (x:number,y:number,value:number) => void;
    isSolved: boolean;
}
function Sudoku(props:Props) {
    const n = props.grid.length;
    useEffect(() => {
        const inputs = [];
        for(let i=0;i<n;i++) {
            for(let j=0;j<n;j++) {
                const input = document.getElementById(`${i}:${j}`) as HTMLInputElement;
                inputs.push(input);
            }
        }
        autotab(inputs);
                
    },[n]);
    const getChangeHandler = (i:number, j:number) => {
        return (e:React.ChangeEvent<HTMLInputElement>) => {
            const value = parseInt(e.target.value);
            if(value >= 0 && value <= n) {
                props.updateHandler(i,j,value);
            }
        }
    };
    return ( 
        <section className="p-3">
            <div className="grid grid-cols-3 grid-rows-3 w-fit">
            {props.grid.map((row, i) => (
                <div key={i} className="grid grid-cols-3">
                    {row.map((col, j) => (
                        <div key={j}>
                            <input  disabled={props.isDisabled} onChange={getChangeHandler(i,j)} id={`${i}:${j}`} maxLength={1} minLength={1} inputMode='numeric' className={`p-1 w-10 border-2 outline-none ${props.isSolved ? "text-green-600" :""}`} defaultValue={props.grid[i][j] || ""} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
        </section>
    );
}

export default Sudoku;