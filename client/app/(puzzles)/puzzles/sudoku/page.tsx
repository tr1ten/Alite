"use client";

import { useState } from "react";
import Sudoku from "../../../../components/Sudoku";

const initialState = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]];
function Page() {
    const [grid, setGrid] = useState(JSON.parse(JSON.stringify(initialState)));
    const [isSolving, setIsSolving] = useState(false);
    const [isSolved, setIsSolved] = useState(false);
    const clickHandler = () => {
        console.log(grid);
    }
    function updateGrid(x:number,y:number,value:number) {
        const newGrid = [...grid];
        newGrid[x][y] = value;
        setGrid(newGrid);
    }
    function resetHandler() {
        console.log("reset");
        setGrid(()=> [...initialState]);
    }
    return (
        <main>
            <h1 className="text-lg card-title">Soduku Solver</h1>
            <span className="opacity-80 break-words">
            Sudoku is a logic-based, combinatorial number-placement puzzle.
            <br/>
            In classic Sudoku, the objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 subgrids that compose the grid contain all of the digits from 1 to 9.
            </span>
            <Sudoku updateHandler={updateGrid} grid={[...grid]} isDisabled={false} isSolved={false} />
            <p>
                Enter the grid above and click solve to get the solution.
            </p>
            <button onClick={clickHandler} className="btn mt-4">
                Solve
            </button>
            <button onClick={resetHandler} className="btn mx-4 mt-4 btn-warning btn-outline">
                Reset
            </button>
            
        </main>
    );
}

export default Page;