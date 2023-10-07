import React, { useState } from 'react'
import { CardProyecto, FilterButton } from '.'

export const GridProyectos = () => {
    const [selectedCategory, setSelectedCategory] = useState("all"); // Almacena la categoría seleccionada
    const cardsData = [
        {
            id: 1,
            title: "Tarjeta 1",
            description: "Descripción de la Tarjeta 1",
            categories: ["VFX", "Programming"]
        },
        {
            id: 2,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming", "Graphics"]
        },
        {
            id: 3,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming", "Graphics"]
        },
        {
            id: 4,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming", "Graphics"]
        },
        {
            id: 5,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming", "Graphics"]
        },
        {
            id: 6,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming", "Graphics"]
        },
        {
            id: 7,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming", "Graphics"]
        },
        {
            id: 8,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming", "Graphics"]
        },
        {
            id: 9,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming", "Graphics"]
        },
        {
            id: 10,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming", "Graphics"]
        },
        {
            id: 11,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Graphics"]
        },
        {
            id: 12,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["Programming"]
        },
        {
            id: 13,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX"]
        },
        {
            id: 14,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["Graphics"]
        },
        {
            id: 15,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["Programming", "Graphics"]
        },
        {
            id: 16,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["Graphics"]
        },
        {
            id: 17,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming"]
        },
        {
            id: 18,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Graphics"]
        },
        {
            id: 19,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["Programming", "Graphics"]
        },
        {
            id: 20,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Graphics"]
        },
        {
            id: 21,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming"]
        },
        {
            id: 22,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["Graphics"]
        },
        {
            id: 23,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["Programming"]
        },
        {
            id: 24,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["Programming", "Graphics"]
        },
        {
            id: 25,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX"]
        },
        {
            id: 26,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming"]
        },
        {
            id: 27,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming", "Graphics"]
        },
        {
            id: 28,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming", "Graphics"]
        },
        {
            id: 29,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming", "Graphics"]
        },
        {
            id: 30,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming", "Graphics"]
        },
        {
            id: 31,
            title: "Tarjeta 2",
            description: "Descripción de la Tarjeta 2",
            categories: ["VFX", "Programming", "Graphics"]
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 10; // Número de tarjetas por página

    const filteredCards = cardsData.filter((card) => {
        // Si no se ha seleccionado ninguna categoría o la tarjeta tiene la categoría seleccionada
        return selectedCategory === "all" || card.categories.includes(selectedCategory);
    });

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

    const next = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    return (
        <section className='proyectos'>
            <h2 className='text-center'>PORTFOLIO</h2>
            <div className='grid_filters'>
                <FilterButton text={"all"} setCategory={handleCategoryChange} current={selectedCategory} />
                {Array.from(new Set(cardsData.flatMap((card) => card.categories))).map((category, i) => (
                    <FilterButton text={category} key={i} setCategory={handleCategoryChange} current={selectedCategory} />
                ))}
            </div>
            <span className='line'></span>
            <div className='proyectos_grid'>
                {currentCards.map((card, i) => (
                    <CardProyecto link='/' categories={card.categories} description={card.description} img='/images/esteviejocachondohijodeputacogecomountorosinusarpastillas.jpg' title={card.title} alt='esteviejocachondohijodeputacogecomountorosinusarpastillas' key={i} />
                ))}
            </div>
            <div className="pagination">
                <button className='arrow' onClick={prev} disabled={currentPage === 1}><i className="ri-arrow-left-s-line"></i></button>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={currentPage === index + 1 ? "active" : ""}
                    >
                        {index + 1}
                    </button>
                ))}
                <button className='arrow' onClick={next} disabled={currentPage === totalPages}><i className="ri-arrow-right-s-line"></i></button>
            </div>
        </section>
    )
}
