import Header from '../components/header/Header';
import Nabvar from '../components/navbar/Nabvar';
import Slider from '../components/slider/Slider';
import SectionOne from '../components/section-one/Section_one';
function Home(){
    return(
        <div>
            <Header/>
            <Nabvar/>
            <Slider/>
            <SectionOne/>
        </div>
        
    );
}

export default Home;