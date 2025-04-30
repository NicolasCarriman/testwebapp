export const Introduction = () => (
    <div className="introduction bg-gray-900 max-h-[100dvh] ">
        <div className="py-8 backdrop-blur-3xl bg-blue-200/20">
            <div className="bg-mask w-full h-full absolute"></div>
            <div className="relative p-1 h-[100dvh] w-full introduction flex flex-col gap-8 max-w-[50%]">
                <div>
                    <div className="rounded-mask h-100 w-100 bg-purple-900"></div>
                    <div className="rounded-mask h-160 w-160 bg-blue-900/80" style={{ animationDelay: '.3s' }} ></div>
                    <div className="rounded-mask h-120 w-120 bg-orange-900" style={{ animationDelay: '.1s' }}></div>
                </div>

                <h1 className="text-5xl text-wrap font-bold text-yellow-400 mt-20 mix-blend-color-dodge">Explorá Nuevas Posibilidades: Inspiración, Innovación y Crecimiento en un Solo Luga</h1>
                <p className="text-2xl text-white">Bienvenido a nuestro espacio digital, donde las ideas se transforman en acción y cada rincón está diseñado para impulsarte hacia nuevos horizontes.
                    <br></br>
                    Ya sea que estés buscando inspiración creativa, herramientas para potenciar tu negocio o simplemente un lugar donde aprender algo nuevo cada día, esta página es tu punto de partida.
                    <br></br>
                    Sumergite, descubrí y llevá tu visión al siguiente nivel.</p>
            </div>
            <div className="mr-190 relative">
                <div className="rounded-mask h-100 w-100 bg-yellow-400/60" style={{ animationDelay: '.2s' }} ></div>
                <div className="rounded-mask h-100 w-100 bg-purple-900"></div>
                <div className="rounded-mask h-160 w-160 bg-orange-900" style={{ animationDelay: '.1s' }}></div>
            </div>
        </div>
    </div>
)
