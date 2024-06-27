import '../../css/provider.css';
import React, { useEffect } from 'react';
import Mower from '../../images/lawn2.jpeg';
import { useAuth } from '../Api/AuthContext';

const Provider = () => {

    const { name, set, end } = useAuth();

    useEffect(() => {
        const temp = localStorage.getItem('name'); 
        if (temp) {
            set(); 
        }
    }, []);

    return (
        <div>
            <div className='provider'>
                <section className='section'>
                    <div className='container'>
                        <div className='textbox'>
                            <p className='text'>Excellent Providers</p>
                            <p className='text2'>Maintain quality and great customer service</p>
                            <p className="text3"> 
                                The providers are carefully selected to ensure that they are able to provide the best service to our customers.
                                The application to become a provider is currently closed.
                            </p>
                        </div>
                        <img className="pic" alt="Mower" src={Mower} />
                    </div> 
                </section>
            </div>
        </div>
    );
}; 

export default Provider; 