import React from 'react';
import '../index.css';

export default function Favorites({ featuredCars, user }) {
    const [car1, car2, car3, car4, car5] = featuredCars;
    
    if (!user) {
        return <Navigate to="/login" />;
      }

    return (
        <div className='body'>
            <header>
                <h2>Favorites List</h2><br />
                <a href="/">Home</a>
            </header>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th></th>
                            <th>Make & Model</th>
                            <th>Starting Price</th>
                            <th>Combined Fuel Economy</th>
                            <th>KBB Expert Rating</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/52722/2024-Honda-Accord-front_52722_032_1810x721_GC_cropped.png" alt="dark grey midsize sedan" /></td>
                            <td>{car1.year} {car1.make} {car1.model}</td>
                            <td>${car1.price}</td>
                            <td>{car1.economy} mpg</td>
                            <td>{car1.KBB}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/51622/2024-Honda-Civic-front_51622_032_1811x735_BK_cropped.png" alt="black compact sedan" /></td>
                            <td>{car2.year} {car2.make} {car2.model}</td>
                            <td>${car2.price}</td>
                            <td>{car2.economy} mpg</td>
                            <td>{car2.KBB}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/51343/2024-Hyundai-Elantra-front_51343_032_1842x743_W6H_cropped.png" alt="white compact sedan" /></td>
                            <td>{car3.year} {car3.make} {car3.model}</td>
                            <td>${car3.price}</td>
                            <td>{car3.economy} mpg</td>
                            <td>{car3.KBB}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/53212/2024-Toyota-Camry-front_53212_032_1834x732_8W2_cropped.png" alt="blue midsize sedan" /></td>
                            <td>{car4.year} {car4.make} {car4.model}</td>
                            <td>${car4.price}</td>
                            <td>{car4.economy} mpg</td>
                            <td>{car4.KBB}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/52815/2023-Toyota-Crown-front_52815_032_1837x748_1G3_cropped.png" alt="dark grey full size sedan" /></td>
                            <td>{car5.year} {car5.make} {car5.model}</td>
                            <td>${car5.price}</td>
                            <td>{car5.economy} mpg</td>
                            <td>{car5.KBB}</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    );
}