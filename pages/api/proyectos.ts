// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    proyectos: {
        titulo: string,
        categorias: string[],
        descripcion: string,
        img: string,
    }[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        proyectos: [
            {
                titulo: "Soy un titulo",
                categorias: ["VFX", "Programming"],
                descripcion: "soy una descripcion que describe cosas descriptosas",
                img: "/images/esteviejocachondohijodeputacogecomountorosinusarpastillas.jpg",
            }
        ]
    })
}
