import React, { useState } from 'react';

export default function Favorites() {
    return (
        <body>
            <header>
                <h2>Favorites List</h2><br/>
                <a href="index.html">Home</a> | <a href="comparison.html">Comparison</a>
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
                            <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/52722/2024-Honda-Accord-front_52722_032_1810x721_GC_cropped.png" alt="dark grey midsize sedan"/></td>
                            <td>2024 Honda Accord</td>
                            <td>$28,990</td>
                            <td>32 mpg</td>
                            <td>4.8/5</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/51622/2024-Honda-Civic-front_51622_032_1811x735_BK_cropped.png" alt="black compact sedan"/></td>
                            <td>2024 Honda Civic</td>
                            <td>$25,045</td>
                            <td>36 mpg</td>
                            <td>4.7/5</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/51343/2024-Hyundai-Elantra-front_51343_032_1842x743_W6H_cropped.png" alt="white compact sedan"/></td>
                            <td>2024 Hyundai Elantra</td>
                            <td>$22,590</td>
                            <td>36 mpg</td>
                            <td>4.6/5</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/53212/2024-Toyota-Camry-front_53212_032_1834x732_8W2_cropped.png" alt="blue midsize sedan"/></td>
                            <td>2024 Toyota Camry</td>
                            <td>$27,515</td>
                            <td>32 mpg</td>
                            <td>4.6/5</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/52815/2023-Toyota-Crown-front_52815_032_1837x748_1G3_cropped.png" alt="dark grey full size sedan"/></td>
                            <td>2023 Toyota Crown</td>
                            <td>$41,045</td>
                            <td>41 mpg</td>
                            <td>4.6/5</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </body>    
    );
}