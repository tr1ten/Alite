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
    const [grid, setGrid] = useState(initialState);
    function updateGrid(x:number,y:number,value:number) {
        const newGrid = [...grid];
        newGrid[x][y] = value;
        setGrid(newGrid);
    }

    return (
        <main>
            <h1 className="text-lg card-title">Soduku Solver</h1>
            <span className="opacity-80 break-words">
            Sudoku is a logic-based, combinatorial number-placement puzzle.
            <br/>
            In classic Sudoku, the objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 subgrids that compose the grid contain all of the digits from 1 to 9.
            </span>
            <Sudoku grid={grid} />
            <p>
                Enter the grid above and click solve to get the solution.
            </p>
            <button className="btn mt-4">
                Solve
            </button>
        </main>
    );
}

export default Page;