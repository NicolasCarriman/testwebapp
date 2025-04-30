import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { items, type Item } from "../items";

interface Props {
    children?: React.ReactNode;
}

const ItemComponent = ({ item, onClick }: { item: Item, onClick: (itemId: number) => void; }) => {
    return <li key={item.id} className={`p-2 border rounded-md ${!item.visible ? 'text-red-500' : ''}`} onClick={() => onClick(item.id)}>{item.content}</li>
}

const MemorizedItem = memo(ItemComponent);
export const ListComponent: React.FC<Props> = () => {
    const { updateList, changeVisibility, list } = useList();

    useEffect(() => {
        updateList(items)
    }, []);

    return (
        <ul className="flex flex-col gap-2">
            {list.map(item => <MemorizedItem key={item.id} item={item} onClick={changeVisibility} />)}
        </ul>
    )
}

function useList() {
    const [list, setList] = useState<Item[]>([]);
    const updateList = (list: Item[]) => setList(list)
    const changeVisibility = useCallback((itemId: number) => setList(prevList => prevList.map(item => item.id === itemId ? { ...item, visible: !item.visible } : item)), []);
    return {
        updateList,
        changeVisibility,
        list
    }
}
