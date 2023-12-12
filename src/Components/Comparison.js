import React from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import '../index.css';

export default function Comparison(props) {
    const [car1, car2] = props.cars;

    const data = [
        { subject: 'Price', A: 24000, B: 22000, fullMark: 30000 },
        { subject: 'Economy', A: 35, B: 30, fullMark: 50 },
        { subject: 'Horsepower', A: 150, B: 180, fullMark: 200 },
        { subject: 'Rating', A: 4.8, B: 4.7, fullMark: 5 },
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

                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={30} domain={[0, 150]} />
                            <Radar name="Car A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            <Radar name="Car B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                            <Tooltip />
                        </RadarChart>
                    </ResponsiveContainer>
                </main>
            </div>
        </section>
    );
}