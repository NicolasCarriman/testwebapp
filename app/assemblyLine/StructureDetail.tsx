import React from 'react'
import type { IWorkStation } from '~/model/structure';


function StructureDetail({ data }: { data: IWorkStation | null }) {
    return (
        <div className='p-4 flex flex-col justify-between h-full'>
            <p className='text-gray-400'>Customización de estación</p>
            <p className='text-gray-700 text-xl font-[500]'>
                {
                    data ? data.description : 'Sin seleccionar'
                }
            </p>
            <div className='grid grid-cols-3 h-50 gap-x-8'>
                <div className='p-2 flex flex-col rounded shadow-[1px_1px_30px_1px_#d1d5dc] border-1 border-gray-200 h-full bg-gray-100'>
                    <p className='text-gray-700/90 font-[500]'>Capacitaciones</p>
                    <p className='text-gray-500'>
                        {
                            data && data.trainnings ? data.trainnings.map(trainning => <p key={trainning.id}>{trainning.description}</p>) : 'Sin seleccionar'
                        }
                    </p>
                </div>
                <div className='p-2 flex flex-col rounded shadow-[1px_1px_30px_1px_#d1d5dc] h-full bg-gray-100 border-1 border-gray-200'>
                    <p className='text-gray-700/90 font-[500]'>Equipamiento</p>
                    <p className='text-gray-500'>
                        {
                            data && data.equipament ? data.equipament.map(eq => <p key={eq.id}>{eq.description}</p>) : 'Sin seleccionar'
                        }
                    </p>
                </div>
                <div className='p-2 flex flex-col rounded shadow-[1px_1px_30px_1px_#d1d5dc] h-full bg-gray-100 border-1 border-gray-200'>
                    <p className='text-gray-700/90 font-[500]'>Operario</p>
                    <p className='text-gray-500'>{ }</p>
                </div>
            </div>
        </div>
    )
}

export default StructureDetail;