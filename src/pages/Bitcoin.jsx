import BitcoinPrice from '../components/Fragments/Bitcoin'
import ContentLayout from "../components/Layouts/ContentLayout";

const BitcoinPage = () => {

    return (
        <>
            <ContentLayout />
            <div className="p-4 sm:ml-64">
                <BitcoinPrice />

            </div>
        </>

    )
}

export default BitcoinPage