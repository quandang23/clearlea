import '../../css/careers.css';
import Handshake from '../../images/handshake.jpeg';
import React, { useEffect } from 'react';
import { useAuth } from '../Api/AuthContext';

const Careers = () => {

    const {name, set, end} = useAuth();

    useEffect(() => {
        const temp = localStorage.getItem('name'); 
        if (temp) {
            set(); 
        }
    }, []);

    return (
        <div>
            <div className='careers'>
                <section className='section'>
                    <div className='container'>
                        <div className='textbox'>
                            <p className='text'>Career Opportunity</p>
                            <p className='text2'>Empowering others to learn and contribute</p>
                            <p className="text3"> 
                                Our company values driven individuals with ability to learn quickly and execute tasks on time with business or engineering background. 
                                <br></br>
                                Please send your resume to 
                                <a href="mailto:dangintech@gmail.com"> dangintech@gmail.com</a>
                            </p>
                        </div>
                        <img className="pic" alt="Handshake" src={Handshake} />
                    </div> 
                </section>
            </div>
        </div>
    );
}; 

export default Careers; 