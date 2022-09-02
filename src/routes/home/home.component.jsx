import './home.styles.scss'
import Directory from "../../components/directory/directory.component";


const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Crown Shoes Shop</h1>
            <p className="home-para">Welcome to the world of shoes</p>
            <span className="home-span">Good Shoes Take You To Good Places</span>
            <Directory/> 
        </div> 
    )
}
export default Home;