import '../assets/css/style.css';

export default function ScheduleFinalLevantamiento() {
    return (
        <>
            <section className='table-style'>
                <table className='table table-bordered table-sm'>
                    <thead>
                        <tr className='table-header'>
                            <th scope="row">Horario</th>
                            <th>Lunes</th>
                            <th>Martes</th>
                            <th>Miercoles</th>
                            <th>Jueves</th>
                            <th>Viernes</th>
                            <th>Sábado</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        <tr>
                            <th scope="row">07:00-07:45</th>
                            <td className='adm-100' rowspan='2'>ADM-100</td>
                            <td className='fis-102' rowspan='3'>FIS-102</td>
                            <td className='adm-100' rowspan='2'>ADM-100</td>
                            <td className='fis-102'rowspan='3'>FIS-102</td>
                            <td className='adm-100' rowspan='2'>ADM-100</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">07:45-08:30</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">08:30-09:15</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='elc-102' rowspan='4'>ELC-102</td>
                        </tr>
                        <tr>
                            <th scope="row">09:15-10:00</th>
                            <td></td>
                            <td className='inf-210' rowspan='3'>INF-210</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">10:00-10:45</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">10:45-11:30</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">11:30-12:15</th>
                            <td className='fis-200' rowspan='2'>FIS-200</td>
                            <td></td>
                            <td className='fis-200' rowspan='2'>FIS-200</td>
                            <td></td>
                            <td className='fis-200' rowspan='2'>FIS-200</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">12:15-13:00</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">13:00-13:45</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">13:45-14:30</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">14:30-15:15</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">15:15-16:00</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">16:00-16:45</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">16:45-17:30</th>
                            <td className='inf-120' rowspan='2'>INF-120</td>
                            <td></td>
                            <td className='inf-120' rowspan='2'>INF-120</td>
                            <td></td>
                            <td className='inf-120' rowspan='2'>INF-120</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">17:30-18:15</th>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">18:15-19:45</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='fis-102'>FIS-102</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">19:45-20:30</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">20:30-21:15</th>
                            <td></td>
                            <td className='mat-102' rowspan='3'>MAT-102</td>
                            <td></td>
                            <td className='mat-102' rowspan='3'>MAT-102</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">21:15-22:00</th>
                            <td></td>
                            <td></td>
                            <td className='fis-200' rowspan='2'>FIS-200</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">22:00-22:45</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

            </section>
        </>
    );
}
