import Header from "../../Header";
import Search from "./Search";
import List from "./List"

const LeftPage = () => {
    return (
        <div className='col-lg-6 col-md-6'>
            <Header
                icon=''
                title='Employee Directory'
            />
            <Search/>
            <List />
        </div>
    )
}

export default LeftPage;
