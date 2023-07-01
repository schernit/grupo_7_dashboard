import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Salchicha Paladini',
        Length: '1',
        Rating: 'Fiambres y embutidos',
    /*     Categories: ['Drama','Comedia'],
        Awards: 2 */
    },
    {
        Title: 'Queso cremoso',
        Length: '1',
        Rating: 'Lacteos y derivados',
      /*   Categories: ['Drama','Acción','Comedia'],
        Awards: 3 */
    },
    
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Stock</th>
                                <th>Categoría</th>
                                {/* <th>Género</th>
                                <th>Premios</th> */}
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Producto</th>
                                <th>Stock</th>
                                <th>Categoría</th>
                                {/* <th>Género</th>
                                <th>Premios</th> */}
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;