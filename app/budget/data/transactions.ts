import type { Transaction } from "../../model/transaction";

export const currentTransactions: Transaction[] = [
    {
        fecha: "2/MAY/25",
        descripcion: "Mepago echeverriapabloan",
        estado: "Pendiente de autorización",
        monto: 14416.90
    },
    {
        fecha: "2/MAY/25",
        descripcion: "Payu ar uber",
        estado: "Pendiente de autorización",
        monto: 5041.00
    },
    {
        fecha: "2/MAY/25",
        descripcion: "Payu ar uber",
        estado: "Pendiente de autorización",
        monto: 4873.00
    },
    {
        fecha: "1/MAY/25",
        descripcion: "Mepago adrianaraquelvolp",
        estado: "Pendiente de autorización",
        monto: 3209.70
    },
    {
        fecha: "1/MAY/25",
        descripcion: "Payu ar uber",
        estado: "Pendiente de autorización",
        monto: 2235.00
    },
    {
        fecha: "1/MAY/25",
        descripcion: "Krema",
        estado: "Pendiente de autorización",
        monto: 16500.00
    },
    {
        fecha: "1/MAY/25",
        descripcion: "El millonario iii",
        estado: "Pendiente de autorización",
        monto: 6650.00
    },
    {
        fecha: "30/ABR/25",
        descripcion: "Mepago mercadopago",
        estado: "Pendiente de autorización",
        monto: 10699.00
    },
    {
        fecha: "29/ABR/25",
        descripcion: "El millonario iii",
        monto: 2550.00
    },
    {
        fecha: "29/ABR/25",
        descripcion: "Pyu*uber",
        monto: 5038.00
    },
    {
        fecha: "29/ABR/25",
        descripcion: "Tuti fruti",
        monto: 2793.00
    },
    {
        fecha: "28/ABR/25",
        descripcion: "El millonario iii",
        monto: 2300.00
    },
    {
        fecha: "27/ABR/25",
        descripcion: "Payu ar uber",
        monto: 2426.00
    },
    {
        fecha: "27/ABR/25",
        descripcion: "El millonario iii",
        monto: 2400.00
    },
    {
        fecha: "27/ABR/25",
        descripcion: "Mepago millonariosrl",
        monto: 2550.23
    },
    {
        fecha: "27/ABR/25",
        descripcion: "Tdf laser",
        monto: 11349.00
    },
    {
        fecha: "25/ABR/25",
        descripcion: "Mepago mercadopago",
        monto: 24500.71
    },
    {
        fecha: "25/ABR/25",
        descripcion: "El millonario iii",
        monto: 4700.00
    },
    {
        fecha: "25/ABR/25",
        descripcion: "El millonario iii",
        monto: 3500.00
    },
    {
        fecha: "24/ABR/25",
        descripcion: "Payu ar uber",
        monto: 5080.00
    },
    {
        fecha: "24/ABR/25",
        descripcion: "El millonario iii",
        monto: 2300.00
    },
    {
        fecha: "24/ABR/25",
        descripcion: "El millonario iii",
        monto: 2300.00
    },
    {
        fecha: "24/ABR/25",
        descripcion: "Tuti fruti",
        monto: 8600.00
    },
    {
        fecha: "23/ABR/25",
        descripcion: "Payu ar uber",
        monto: 2663.00
    },
    {
        fecha: "30/ABR/25",
        descripcion: "El millonario iii",
        monto: 6900.00
    },
    {
        fecha: "30/ABR/25",
        descripcion: "El millonario iii",
        monto: 7000.00
    },
    {
        fecha: "30/ABR/25",
        descripcion: "Payu ar uber",
        monto: 4904.00,
        estado: "pendiente"
    },
    {
        fecha: "30/ABR/25",
        descripcion: "Payu ar uber",
        monto: 5026.00,
        estado: "pendiente"
    },
    {
        fecha: "30/ABR/25",
        descripcion: "Payu ar uber",
        monto: 2329.00,
        estado: "pendiente"
    },
    {
        fecha: "29/ABR/25",
        descripcion: "Payu ar uber",
        monto: 2210.00
    },
    {
        fecha: "29/ABR/25",
        descripcion: "El millonario iii",
        monto: 2400.00
    },
    {
        fecha: "29/ABR/25",
        descripcion: "El millonario iii",
        monto: 2550.00
    },
    {
        fecha: "27/ABR/25",
        descripcion: "Quiu",
        monto: 9000.00
    },
    {
        fecha: "27/ABR/25",
        descripcion: "Quiu",
        monto: 16000.00
    },
    {
        fecha: "26/ABR/25",
        descripcion: "Payu ar uber",
        monto: 4401.00
    },
    {
        fecha: "26/ABR/25",
        descripcion: "El millonario iii",
        monto: 2250.00
    },
    {
        fecha: "26/ABR/25",
        descripcion: "F14 almacen de bebidas-f",
        monto: 1500.00
    },
    {
        fecha: "26/ABR/25",
        descripcion: "Mepago mercadopago",
        monto: 5670.47
    },
    {
        fecha: "25/ABR/25",
        descripcion: "Payu ar uber",
        monto: 5009.00
    },
    {
        fecha: "25/ABR/25",
        descripcion: "Mepago pesarinigaston",
        monto: 12785.31
    }
].map((transaction, id) => ({
    date: transaction.fecha,
    description: transaction.descripcion,
    ammount: transaction.monto,
    edit: false,
    id
}))