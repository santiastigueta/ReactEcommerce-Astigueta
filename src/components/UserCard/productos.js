
const productos = [
    {
        id: 1,
        title: "Nvidia GeForce RTX 30 Series RTX 3090",
        description: "Veloz y duradero, cuenta con 10496 núcleos. Apropiado para el uso de tecnologías más modernas. resolucion de 7680x4320",
        url: "https://http2.mlstatic.com/D_NQ_NP_665641-MLA44039957407_112020-O.webp",
        price: "$ 90.450",
        category_id: 1
    },
    {
        id: 2,
        title: "Nvidia Asus GeForce RTX 30 Series RTX 3070",
        description: "Cuenta con 5888 núcleos, por lo que la interfaz de la placa será algo sorprendente,su resolución de 7680x4320 no te defraudará",
        url: "https://http2.mlstatic.com/D_NQ_NP_890511-MLA46302132691_062021-O.webp",
        price: "$ 120.900",
        category_id: 1
    },
    {
        id: 3,
        title: "Nvidia Asus Phoenix GeForce GTX 1660",
        description: "Cuenta con 1408 núcleos, los calculos para el procesamiento de graficos es rapida y cuenta con hasta 7680x4320 de resolucion",
        url: "https://http2.mlstatic.com/D_NQ_NP_698438-MLA40006768217_122019-O.webp",
        price: "$ 119.400",
        category_id: 2
    },
    {
        id: 4,
        title: "GeForce RTX 20 Series",
        description: "su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero.",
        url: "https://http2.mlstatic.com/D_NQ_NP_745006-MLA46543672190_062021-O.webp",
        price: "$ 117.090",
        category_id: 2

    }
]

const itemsMock = function (categoryId) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(isNaN(categoryId)
                ? productos
                : productos.filter(x => x.category_id.toString() === categoryId));
        }, 2000);
    });
}

export default itemsMock;