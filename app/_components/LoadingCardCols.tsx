import LoadingCard from './LoadingCard'
const LoadingCardCols = () => {

    const renderCards = () => 
        [...Array(12)].map((item, index) => {
            return <LoadingCard key={index} index={index}/>
        }
        )

    return (
    <section className="cards__section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8">
        {renderCards()}
    </section>
    )
}

export default LoadingCardCols