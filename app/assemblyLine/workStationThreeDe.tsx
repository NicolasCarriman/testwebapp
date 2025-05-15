import { useState } from 'react'
import { CiUser } from 'react-icons/ci';

const workStationsData = [
    {
        description: 'workStation-1',
        id: 1
    },
    {
        description: 'workStation-2',
        id: 2
    },
    {
        description: 'workStation-3',
        id: 3
    },
    {
        description: 'workStation-4',
        id: 4
    },
    {
        description: 'workStation-5',
        id: 5
    },
    {
        description: 'workStation-6',
        id: 6
    }
]

function WorkStationThreeD() {
    const [workStations, setWorkStations] = useState(workStationsData);

    const addWorkStation = () => {
        const { id, description } = workStations[workStations.length - 1];
        setWorkStations(old => [...old, {
            id: id + 1,
            description: `workStation-${id + 1}`
        }])
    }

    return (
        <div className='flex flex-row items-center justify-start w-[100dvw] p-2 '>
            <main className='max-w-[100dvw] gap-2 w-[100dvw] p-2 overflow-auto ' style={{ gridTemplateColumns: 'repeat(auto-fill, 160px)' }}>
                <div className='preserve-3d'>
                    <div className={` row-start-2 h-[100px] border-[2px] border-[#4c4cff] rounded-sm`} style={{
                        gridColumn: `span ${workStations.length}`, backgroundSize: '12.73px 12.73px', backgroundImage: ` linear-gradient(45deg, #4c4cff 5.56%, #ebe6e7 5.56%, #ebe6e7 50%, #4c4cff 50%, #4c4cff 55.56%, #ebe6e7 55.56%, #ebe6e7 100%)`
                    }}></div>
                </div>
            </main>
            <div onClick={addWorkStation} className='rounded-full cursor-pointer w-8 h-8  border-[#4c4cff] hover:border-gray-600 hover:text-gray-600  border flex items-center justify-center'>+</div>
        </div>
    )
}

export default WorkStationThreeD;