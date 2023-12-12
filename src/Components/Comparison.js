import React from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import '../index.css';

export default function Comparison(props) {
    let car1, car2;

    if (!props.cars || props.cars.length < 2) {
        car1 = { year: 2001, make: 'Default', model: 'CarA', price: 20000, economy: 30, hp: 150, KBB: 4.5 };
        car2 = { year: 2004, make: 'Default', model: 'CarB', price: 25000, economy: 35, hp: 180, KBB: 4.8 };
    } else {
        [car1, car2] = props.cars;
    }

    const data = [
        { subject: 'Price', A: car1.price, B: car2.price, fullMark: 30000 },
        { subject: 'Economy', A: car1.economy, B: car2.economy, fullMark: 50 },
        { subject: 'Horsepower', A: car1.hp, B: car2.hp, fullMark: 200 },
        { subject: 'Rating', A: car1.KBB, B: car2.KBB, fullMark: 5 },
    ];

    return (
        <section>
            <div className='body'>
                <header>
                    <h2>Comparisons</h2><br />
                    <a href="/">Home</a>
                </header>
                <main>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/52722/2024-Honda-Accord-front_52722_032_1810x721_GC_cropped.png" alt="dark grey midsize sedan" /></td>
                                <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/51622/2024-Honda-Civic-front_51622_032_1811x735_BK_cropped.png" alt="black compact sedan" /></td>
                            </tr>
                            <tr>
                                <th>Make, Model, & Year</th>
                                <td>{car1.year} {car1.make} {car1.model}</td>
                                <td>{car2.year} {car2.make} {car2.model}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Starting Price</th>
                                <td>${car1.price}</td>
                                <td>${car2.price}</td>
                            </tr>
                            <tr>
                                <th>Fuel Economy</th>
                                <td>{car1.economy}</td>
                                <td>{car2.economy}</td>
                            </tr>
                            <tr>
                                <th>KBB Expert Rating</th>
                                <td>{car1.KBB}</td>
                                <td>{car2.KBB}</td>
                            </tr>
                            <tr>
                                <th>Seating Capacity</th>
                                <td>{car1.seats}</td>
                                <td>{car2.seats}</td>
                            </tr>
                            <tr>
                                <th>Horsepower</th>
                                <td>{car1.hp}</td>
                                <td>{car2.hp}</td>
                            </tr>
                            <tr>
                                <th>Drivetrain</th>
                                <td>{car1.dt}</td>
                                <td>{car2.dt}</td>
                            </tr>
                        </tbody>
                    </table>

                    <ResponsiveContainer width="100%" height={400}>
                        <RadarChart data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} />
                            <Radar name="Car A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            <Radar name="Car B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                            <Legend />
                        </RadarChart>
                    </ResponsiveContainer>
                </main>
            </div>
        </section>
    );
}