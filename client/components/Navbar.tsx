import {BsGithub,BsBrush,BsChevronCompactDown,BsSearch} from "react-icons/bs";
import Image from "next/image";
type Props ={
    setTheme: (theme:string)=>void;
}
function NavBar(props:Props) {
    function makeTheme(s:string){
        return ()=>props.setTheme(s);
    }
    return (
        <nav className="navbar bg-base-100 align-middle">
        <div className="flex-1">
            <Image src="/logo.png" width={30} height={30} alt={"alite"} />
            <a className="font-bold p-2 normal-case text-2xl">Alite</a>
        </div>
        <div className="flex flex-row gap-2">
            <div className="form-control">
            <input type="text"  placeholder="Search Puzzle" className="input input-bordered" />
            </div>
            <BsSearch className="text-lg ml-2 relative -inset-x-11"/>
        </div>
        <div className="mx-3">
            <div className="dropdown">
            <label tabIndex={0} className="btn m-2">
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
    );
}

export default NavBar;