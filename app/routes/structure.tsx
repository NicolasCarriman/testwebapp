import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import StructureDetail from '~/assemblyLine/StructureDetail';
import WorkStationLinear from '~/assemblyLine/workStationLinear'
import type { IWorkStation } from '~/model/structure';


const workStationsData: IWorkStation[] = [
    {
        description: 'workStation-1',
        id: 1,
        trainnings: [
            { id: 1, description: 'Soldaduría lvl 1' },
            { id: 2, description: 'Buena visibilidad' }
        ],
        equipament: [
            {
                id: 1, description: 'guantes', category: 'soldador'
            },
            {
                id: 2, description: 'mascara', category: 'soldador'
            }
        ],
        worker: {
            name: 'jhonny',
            lastName: 'walker',
            employeeId: '4432140569'
        },
        selected: false
    },
    {
        description: 'workStation-2',
        id: 2
        ,
        trainnings: [
            { id: 1, description: 'Soldaduría lvl 1' },
            { id: 2, description: 'Buena visibilidad' }
        ],
        equipament: [
            {
                id: 1, description: 'guantes', category: 'soldador'
            },
            {
                id: 2, description: 'mascara', category: 'soldador'
            }
        ],
        worker: {
            name: 'jhonny',
            lastName: 'walker',
            employeeId: '4432140569'
        },
        selected: false
    },
    {
        description: 'workStation-3',
        id: 3,
        trainnings: null,
        equipament: null,
        worker: null,
        selected: false
    },
    {
        description: 'workStation-4',
        id: 4,
        trainnings: null,
        equipament: null,
        worker: null,
        selected: false
    },
    {
        description: 'workStation-5',
        id: 5,
        trainnings: null,
        equipament: null,
        worker: null,
        selected: false
    },
    {
        description: 'workStation-6',
        id: 6,
        trainnings: null,
        equipament: null,
        worker: null,
        selected: false
    }

]

function Structure() {
    const [workStations, setWorkStations] = useState(workStationsData);
    const selectedWorkStation = workStations.find(station => station.selected === true) || null;

    return (
        <div className='p-4'>
            <div className='flex gap-20'>
                <div className='flex flex-col'>
                    <p className='text-xl text-gray-400 font-[400]'>Customización de estructura</p>
                    <h2 className='text-4xl font-semibold'>Linea-11-PNB7120</h2>
                </div>
                <div className='flex flex-col justify-end mb-1'>
                    <fieldset className='border-1 border-[#2222a6] flex flex-row items-center p-1 rounded-sm px-2  '>
                        <input className='text-[#2222a6] outline-0' defaultValue={'versión v1'} />
                        <IoChevronDown className='text-[#2222a6] cursor-pointer' />
                    </fieldset>
                </div>
            </div>
            <WorkStationLinear data={workStations} />
            <StructureDetail />
        </div>
    )
}

export default Structure;
