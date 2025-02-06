import { BackgroundText } from "../components/BackgoundText";
import { ButtonClick } from "../components/Button/ButtonClick";
import { SearchBar } from "../components/SearchBar";

export function Home() {
    const containerClasses: string = "min-h-screen";
    return(
        <div className={containerClasses}>
            <SearchBar/>
            <div className="flex bg-gray-100 overflow-hidden w-screen relative">
                <div className="flex justify-between lg:flex-row-reverse flex-col-reverse w-full h-full">
                    <div className="flex w-full lg:h-full">
                        <img src="/img/chaussure_home.png" alt="chaussure home" className="flex justify-center items-center z-10"/>
                    </div>
                    <div className="flex flex-col w-full lg:h-full">
                        <p className="flex -mb-8 mt-15 lg:ml-28 ml-10 text-[125px] font-pacifico text-primary z-10">vantela</p>
                        <p className="flex text-[45px] lg:ml-28 ml-10 text-secondary"><strong>PUBLIC HIGH</strong> GUM NATURAL</p>
                        <p className="flex text-[18px] lg:ml-28 ml-10 text-gray-400">It was popularised in the 1960s with the release of Letraset sheets containing Lorem <br /> Ipsum passages, and more recently with desktop publishing</p>
                        <ButtonClick text="Shop Now" variant="outline" height="h-[60px]" width="w-[160px]" position="flex" additionalClassName="justify-center items-center font-semibold text-[20px] rounded-full mt-5 ml-28"/>
                    </div>
                </div>
            <BackgroundText/>
            </div>
        </div>
    )
}