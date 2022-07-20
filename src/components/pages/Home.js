import './Home.css'
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

export default function Home() {
    return (
        <section className='home_container'>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Start to manage your projects right now!</p>
            <LinkButton to="/newproject" text="Create new Project" />
            <img src={savings} alt="costs" />
        </section>
    )
}