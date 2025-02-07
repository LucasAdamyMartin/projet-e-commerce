import { BackgroundText } from "../components/Footer/BackgoundText";
import { PosterImage } from "../components/Home/PosterImage";
import { PosterText } from "../components/Home/PosterText";
import { SelectionBar } from "../components/Home/SelectionBar";
import { SearchBar } from "../components/SearchBar";

export function Home() {
    const containerClasses = "min-h-screen";
    const containerPosterClasses = "flex bg-gray-100 overflow-hidden w-screen relative";
    const PosterClasses = "flex justify-between lg:flex-row-reverse flex-col-reverse w-full h-full";

    // Simule une liste de produits
    const products = Array(4).fill({
        name: "Vantela Republic Low Black Natural",
        price: "Rp 159.000",
        imgSrc: "/img/chaussure1.png"
    });

    return (
        <div className={containerClasses}>
            <SearchBar />
            <div className={containerPosterClasses}>
                <div className={PosterClasses}>
                    <PosterImage />
                    <PosterText />
                </div>
                <BackgroundText />
            </div>
            <div className="flex flex-col w-screen h-fit justify-center items-center mt-20 mb-20 gap-10">
                <SelectionBar />
                <div className="flex flex-wrap justify-center gap-5">
                    {products.map((product, index) => (
                        <div key={index} className="flex flex-col border-2 border-gray-100 rounded-[8px] min-w-[242px] w-[70%] max-w-[300px] p-4">
                            <div className="flex justify-center">
                                <img className="w-[242px] h-[242px] object-cover" src={product.imgSrc} alt={product.name} />
                            </div>
                            <div className="flex flex-col self-start">
                                <p className="text-[18px] font-bold">{product.name}</p>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col w-screen h-fit justify-center items-center mt-20 mb-20 gap-10">
                <SelectionBar />
                <div className="flex flex-wrap justify-center gap-5">
                    {products.map((product, index) => (
                        <div key={index} className="flex flex-col border-2 border-gray-100 rounded-[8px] min-w-[242px] w-[70%] max-w-[300px] p-4">
                            <div className="flex justify-center">
                                <img className="w-[242px] h-[242px] object-cover" src={product.imgSrc} alt={product.name} />
                            </div>
                            <div className="flex flex-col self-start">
                                <p className="text-[18px] font-bold">{product.name}</p>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
