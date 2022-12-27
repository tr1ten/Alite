import { BsSearch, BsBrush, BsChevronCompactDown, BsGithub} from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
type DrawerProps = {
    children: React.ReactNode;
    setTheme: (theme: string) => void;
}
function Drawer(props: DrawerProps) {
    function makeTheme(s:string){
        return ()=>props.setTheme(s);
    }
    return (<div className="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content overflow-x-hidden">
        <nav className="p-3 navbar bg-base-100 align-middle justify-between">
            <label htmlFor="my-drawer-2" className="btn btn-outline mx-3 drawer-button lg:hidden">
        <AiOutlineMenu className="text-2xl"/>
        </label>
            <div className="flex flex-row gap-2">
                    <div className="form-control">
                    <input type="text"  placeholder="Search Puzzle" className="input input-bordered" />
                    </div>
                    <BsSearch className="text-lg ml-2 relative -inset-x-11"/>
                </div>
                <div className="mx-3">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-outline m-2">
                        <BsBrush className="text-lg mr-2"/>
                        Themes
                        <BsChevronCompactDown className="text-lg ml-2"/>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a onClick={makeTheme("light")}>Light</a></li>
                    <li><a onClick={makeTheme("dark")}>Dark</a></li>
                    </ul>
                    </div>
                    <BsGithub className="text-2xl" />
                </div>
            </nav>
        <div className="p-3">
        {props.children}
        </div>
    </div> 
    <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-200 text-base-content">
      <div className="flex flex-row align-middle p-2 justify-center m-3">
            <Image src="/logo.png" width={40} height={20} alt={"alite"} />
            <a className="font-bold p-2 normal-case text-2xl">Alite</a>
            <span className="self-center relative top-3 text-xs font-medium tooltip tooltip-bottom">0.0.1</span>
        </div>
        <li></li>
        <li className="menu-title">
        <span>Featured Puzzles</span>
        </li>

        <li><Link href={"puzzles/sudoku"}>Sudoku</Link></li>
        <li><Link href={"/boggle"}>Boggle Solver</Link></li>
      </ul>
    
    </div>
  </div>);
}

export default Drawer;