type Props = {
    grid: number[][];
}
function Sudoku(props:Props) {
    const n = props.grid.length;
    return ( 
        <section className="p-3">
            <div className="grid grid-cols-3 grid-rows-3 w-fit">
            {props.grid.map((row, i) => (
                <div key={i} className="grid grid-cols-3">
                    {row.map((col, j) => (
                        <div key={j}>
                            <input maxLength={1} minLength={1} inputMode='numeric' className="p-1 w-10 border-2 outline-none" defaultValue={col>0 ? col : ""} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
        </section>
    );
}

export default Sudoku;