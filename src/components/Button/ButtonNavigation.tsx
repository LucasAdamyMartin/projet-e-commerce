type ButtonNavigationProps = {containerClasses : string, colorOnClick : string};

export function ButtonNavigation ({containerClasses, colorOnClick} : Readonly<ButtonNavigationProps>) {
    return( 
    <div className={containerClasses}>
        <button className="h-[16px] w-[16px] bg-gray-300 rounded-full"/>
        <button className= {`h-[16px] w-[16px] ${colorOnClick} rounded-full`} />
        <button className="h-[16px] w-[16px] bg-gray-300 rounded-full"/>
    </div>

    )
}