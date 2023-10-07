import Link from 'next/link'

export const Header = () => {
    return (
        <header>
            <div className='content'>
                <div className='d-flex align-items-center nav'>
                    <Link href="/proyectos">
                        Work
                    </Link>
                    <Link href="/proyectos">
                        About
                    </Link>
                    <Link href="/proyectos">
                        Contact
                    </Link>
                </div>
                <h2>SERGIO PEÑALOZA</h2>
                <div className='redes'>
                    <a href="https://www.instagram.com/checholiolin/" target='_blank'><i className="ri-instagram-fill"></i></a>
                    <a href="https://www.artstation.com/xexolio" target='_blank'><img src="./images/artstation.svg" alt="" /></a>
                    <a href="https://www.linkedin.com/in/sergio-pe%C3%B1aloza-herrera-137436183/" target='_blank'><i className="ri-linkedin-box-fill"></i></a>
                </div>
            </div>
        </header>
    )
}
