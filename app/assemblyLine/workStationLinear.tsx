import { useState } from 'react'
import { CiSettings, CiUser } from 'react-icons/ci';
import WorkStationThreeD from './workStationThreeDe';
import { IoSettingsOutline } from 'react-icons/io5';


function WorkStationLinear({ data }: { data: any[] }) {
    const [workStations, setWorkStations] = useState(data);

    const addWorkStation = () => {
        const { id, description } = workStations[workStations.length - 1];
        setWorkStations(old => [...old, {
            id: id + 1,
            description: `workStation-${id + 1}`
        }])
    }

    return (
        <>
            <div className='flex flex-row items-center justify-start  min-h-[50dvh] shadow-[1px_1px_30px_1px_#d1d5dc] rounded p-4'>
                <main className='grid w-full gap-x-18 gap-y-2 py-2 overflow-auto auto-cols-[12rem]' style={{ gridTemplateColumns: 'repeat(auto-fill, 1fr)' }}>
                    {
                        workStations.map(station => (
                            <div className='row-start-1' key={station.id}>
                                <div className='group h-full flex flex-col justify-between cursor-pointer border-gray-400 rounded bg-gray-200 p-2 border-1 hover:border-[#4c4cff] hover:border-1  transition-all duration-75 ease-in'>
                                    <div>
                                        <p className='text-nowrap group-hover:text-[#4c4cff]'>{station.description}</p>
                                        <p className='text-gray-600 text-sm font-light group-hover:text-[#4c4cff]'>
                                            is required <p className='text-gray-700 font-medium group-hover:text-[#4c4cff]'>training A, training B, training C</p> to do this station
                                        </p>
                                    </div>
                                    <div className='cursor-pointer group-hover:text-[#4c4cff] w-full flex flex-col justify-center items-center text-gray-500'>
                                        <IoSettingsOutline className='w-10 h-10 custom-settings-icon' strokeWidth={'12'} />
                                        <p className='font-[500] text-xs'>Editar</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className='row-start-1 flex flex-col items-center justify-center border rounded-sm border-gray-400 bg-gray-100 h-full sticky right-0'>
                        <div onClick={addWorkStation} className='rounded-full cursor-pointer w-12 h-12  bg-gray-200 shadow-md shadow-gray-400 text-gray-500 hover:border-gray-600 hover:text-gray-600  flex items-center justify-center'>+</div>
                        <p className='text-gray-600 font-[300]'>Añadir estación</p>
                    </div>
                    <div className={`row-start-2 h-[100px] border-[2px] border-[#4c4cff] rounded-sm`} style={{
                        gridColumn: `span ${workStations.length + 1}`,
                        backgroundSize: '12.73px 12.73px',
                        backgroundImage: ` linear-gradient(45deg, #4c4cff 5.56%, #ebe6e7 5.56%, #ebe6e7 50%, #4c4cff 50%, #4c4cff 55.56%, #ebe6e7 55.56%, #ebe6e7 100%)`
                    }}>
                    </div>
                </main>
            </div>
        </>
    )
}

export default WorkStationLinear;