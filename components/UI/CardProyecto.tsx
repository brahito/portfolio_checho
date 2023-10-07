import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'
import { Button } from '.';
interface Props {
  title: string;
  categories: string[];
  description: string;
  img: string;
  alt: string;
  link: string;
}
export const CardProyecto: FC<Props> = ({ title, categories, description, img, alt, link }) => {
  return (
    <div className='proyectos_card'>
      <Link href={link}>
        <Image src={img} width={350} height={370} alt={alt} />
        <div className='content'>
          <h3>{title}</h3>
          <div className='categorias'>
            {
              categories.map((categoria, i) =>
                <p key={i}>{categoria}</p>
              )
            }
          </div>
        </div>
        <div className='proyectos_card_hover'>
          <div className='content'>
            <h3>{title}</h3>
            <p>{description}</p>
            <Button type='secondary' clase='d-flex align-items-center'>See more<i className="ps-1 ri-arrow-right-s-line"></i></Button>
          </div>
        </div>
      </Link>
    </div>
  )
}
