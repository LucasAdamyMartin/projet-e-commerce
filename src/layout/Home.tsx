import { ButtonClick } from "../components/Button/ButtonClick";
import { SearchBar } from "../components/SearchBar";

export function Home() {
    const containerClasses: string = "min-h-screen";
    return(
        <div className={containerClasses}>
            <SearchBar/>
            <div className="relative bg-gray-100 overflow-hidden w-screen h-[60vh]">
                <img src="/img/chaussure_home.png" alt="chaussure home" className="absolute left-[50vw] z-10"/>
                <p className="absolute text-[125px] left-[10vw] top-[8vh] font-pacifico text-primary z-10">vantela</p>
                <p className="absolute text-[45px] left-[11vw] top-[25vh] text-secondary"><strong>PUBLIC HIGH</strong> GUM NATURAL</p>
                <p className="absolute text-[18px] left-[11vw] top-[33vh] text-gray-400">It was popularised in the 1960s with the release of Letraset sheets containing Lorem <br /> Ipsum passages, and more recently with desktop publishing</p>
                <ButtonClick text="Shop Now" variant="outline" height="h-[60px]" width="w-[160px]" position="absolute" additionalClassName="font-semibold text-[20px] rounded-full left-[11vw] top-[42vh]"/>
                <p className="absolute -top-[350px] m-15 text-[32vh] font-bold text-black/2 pointer-events-none select-none -z-0 whitespace-nowrap">New Arrival</p>
                <p className="absolute -top-[50px] m-15 text-[32vh] font-bold text-black/2 pointer-events-none select-none -z-0 whitespace-nowrap">New Arrival</p>
                <p className="absolute top-[250px] m-15 text-[32vh] font-bold text-black/2 pointer-events-none select-none -z-0 whitespace-nowrap">New Arrival</p>
            </div>
        </div>
    )
}