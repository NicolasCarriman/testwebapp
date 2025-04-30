
interface CardProps {
    title: string;
    stats: string;
    description: string;
}
export const Card = ({ title, stats, description }: CardProps) => (
    <div className="flex flex-col gap-2 rounded-2xl p-4 shadow-2xl  shadow-blue-200">
        <h2 className="font-bold text-2xl">{title}</h2>
        <h4 className="font-semibold text-2xl">{stats}</h4>
        <p className="text-xl">{description}</p>
    </div>
)