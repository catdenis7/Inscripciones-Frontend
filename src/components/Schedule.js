import '../assets/css/style.css';

export default function Schedule() {
    return (
        <>
            <section className='table-style'>
            <table className='table table-bordered'>
                <tr>
                <th scope="row">Horario</th>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miercoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sábado</th>
                </tr>
                <tr>
                    <th scope="row">07:00-07:45</th>
                    <td rowspan='2'>ADM-100</td>
                    <td rowspan='3'>FIS-102</td>
                    <td rowspan='2'>ADM-100</td>
                    <td rowspan='3'>FIS-102</td>
                    <td rowspan='2'>ADM-100</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">07:45-08:30</th>                   
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">08:30-09:15</th>
                    <td>Celda 1</td>
                    <td>Celda 3</td>
                    <td>Celda 5</td>
                    <td rowspan='4'>ELC-102</td>
                </tr>
                <tr>
                    <th scope="row">09:15-10:00</th>
                    <td>Celda 1</td>
                    <td>Celda 2</td>
                    <td>Celda 3</td>
                    <td>Celda 4</td>
                    <td>Celda 5</td>
                </tr>
                <tr>
                    <th scope="row">10:00-10:45</th>
                    <td>Celda 1</td>
                    <td>Celda 2</td>
                    <td>Celda 3</td>
                    <td>Celda 4</td>
                    <td>Celda 5</td>
                </tr>
                <tr>
                    <th scope="row">10:45-11:30</th>
                    <td>Celda 1</td>
                    <td>Celda 2</td>
                    <td>Celda 3</td>
                    <td>Celda 4</td>
                    <td>Celda 5</td>
                </tr>
                <tr>
                    <th scope="row">11:30-12:15</th>
                    <td>Celda 1</td>
                    <td>Celda 2</td>
                    <td>Celda 3</td>
                    <td>Celda 4</td>
                    <td>Celda 5</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">12:15-13:00</th>
                    <td>Celda 1</td>
                    <td>Celda 2</td>
                    <td>Celda 3</td>
                    <td>Celda 4</td>
                    <td>Celda 5</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">13:00-13:45</th>
                    <td>Celda 1</td>
                    <td>Celda 2</td>
                    <td>Celda 3</td>
                    <td>Celda 4</td>
                    <td>Celda 5</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">13:45-14:30</th>
                    <td>Celda 1</td>
                    <td>Celda 2</td>
                    <td>Celda 3</td>
                    <td>Celda 4</td>
                    <td>Celda 5</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">14:30-15:15</th>
                    <td>Celda 1</td>
                    <td>Celda 2</td>
                    <td>Celda 3</td>
                    <td>Celda 4</td>
                    <td>Celda 5</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">15:15-16:00</th>
                    <td>Celda 1</td>
                    <td>Celda 2</td>
                    <td>Celda 3</td>
                    <td>Celda 4</td>
                    <td>Celda 5</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">16:00-16:45</th>
                    <td>Celda 1</td>
                    <td>Celda 2</td>
                    <td>Celda 3</td>
                    <td>Celda 4</td>
                    <td>Celda 5</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">16:45-17:30</th>
                    <td rowspan='2'>INF-120</td>              
                    <td>Celda 2</td>
                    <td rowspan='2'>INF-120</td>               
                    <td>Celda 4</td>
                    <td rowspan='2'>INF-120</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">17:30-18:15</th>                 
                    <td>Celda 2</td>              
                    <td>Celda 4</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">18:15-19:45</th>
                    <td>Celda 1</td>
                    <td>Celda 2</td>
                    <td>Celda 3</td>
                    <td>Celda 4</td>
                    <td>FIS-102</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">19:45-20:30</th>
                    <td>Celda 1</td>
                    <td>Celda 2</td>
                    <td>Celda 3</td>
                    <td>Celda 4</td>
                    <td>Celda 5</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">20:30-21:15</th>
                    <td>Celda 1</td>
                    <td rowspan='3'>MAT-102</td>
                    <td>Celda 3</td>
                    <td rowspan='3'>MAT-102</td>
                    <td>Celda 5</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">21:15-22:00</th>
                    <td>Celda 1</td>
                    <td>Celda 3</td>
                    <td>Celda 5</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <th scope="row">22:00-22:45</th>
                    <td>Celda 1</td>
                    <td>Celda 3</td>
                    <td>Celda 5</td>
                    <td>Celda 6</td>
                </tr>
            </table>

            </section>
        </>
    );
}
