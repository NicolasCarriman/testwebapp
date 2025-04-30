import { Card } from "~/components/card";

declare module 'react' {
    interface CSSProperties {
        '--delay'?: number | string;
    }
}

interface Props {
    active: boolean;
}
export const Statistics = ({ active }: Props) => {
    return (
        <div className={`relative bg-blue-100 p-1 h-[100dvh] w-full flex flex-row gap-20 justify-center items-start`}>
            <section className={`flex flex-col w-[40%] mt-[10%] gap-10 h-full ${active ? "appear" : false}`}>
                <h1 className="text-5xl text-wrap font-bold ">Nuestras Estadísticas Hablan por Sí Solas</h1>
                <p className="text-2xl">
                    Estos números no son solo métricas: son la prueba de que sabemos cómo ayudarte a lograr tus objetivos.
                    <br></br>
                    La experiencia acumulada en cientos de proyectos nos permite entender rápidamente lo que necesitás, ofrecerte soluciones a medida y ejecutarlas con precisión.
                    <br></br>
                    Nuestra rapidez de entrega, alta satisfacción y alcance internacional garantizan que, estés donde estés, vas a recibir un servicio confiable, efectivo y enfocado en resultados reales.
                </p>
            </section>
            <div className={`flex flex-row flex-nowrap gap-2 flex-1 h-min mt-[10%] ${active ? "appear" : false}`} style={{ "--delay": '.4s' }}>
                <Card
                    title="Proyectos completados"
                    stats="+1.200"
                    description="Clientes satisfechos de todo el mundo confiaron en nosotros para llevar sus ideas al siguiente nivel."
                />
                <Card
                    title="Satisfacción del cliente"
                    stats=" 98%"
                    description="Nuestro enfoque centrado en el usuario y soporte personalizado marca la diferencia."
                />
                <Card
                    title="Presencia mundial"
                    stats="+15 paises"
                    description="Acompañamos negocios en expansión internacional y crecimiento local."
                />
                <Card
                    title="Tiempo promedio de entrega"
                    stats="72 horas"
                    description="Eficiencia sin comprometer la calidad: entregamos rápido y bien."
                />
            </div>
        </div>
    )
}
