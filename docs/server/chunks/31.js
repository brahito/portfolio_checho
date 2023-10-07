"use strict";
exports.id = 31;
exports.ids = [31];
exports.modules = {

/***/ 90:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zx: () => (/* reexport */ Button),
  X1: () => (/* reexport */ CardProyecto),
  Lb: () => (/* reexport */ FilterButton),
  PJ: () => (/* reexport */ GridProyectos),
  VM: () => (/* reexport */ Hero),
  Kx: () => (/* reexport */ HeroLittle)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/UI/Hero.tsx



const Hero = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "hero hero_home",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("img", {
                className: "bg",
                src: "./images/loop.gif",
                alt: ""
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            children: "SERGIO PE\xd1ALOZA"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: "GAME TECHNICAL ARTIST / PROJECT SEED LEAD VFX ARTIST"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "botones",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(Button, {
                                    link: "/proyectos",
                                    children: "Visit Portfolio"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button, {
                                    type: "secondary",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "ri-play-circle-line pe-1"
                                        }),
                                        "Play Showreel"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "effect_info",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "font-overpass",
                        children: "Name of the VFX here"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "font-overpass",
                        children: "Little description of the VFX here"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/UI/Button.tsx


const Button = ({ children, type = "primary", link, clase })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: link != undefined ? /*#__PURE__*/ jsx_runtime.jsx("a", {
            href: link,
            className: `btn btn_${type} ${clase}`,
            children: children
        }) : /*#__PURE__*/ jsx_runtime.jsx("button", {
            className: `btn btn_${type} ${clase}`,
            children: children
        })
    });
};

;// CONCATENATED MODULE: ./components/UI/HeroLittle.tsx


const HeroLittle = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "hero hero_little",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("img", {
                className: "bg",
                src: "./images/loop.gif",
                alt: ""
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        children: "SERGIO PE\xd1ALOZA"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "GAME TECHNICAL ARTIST / PROJECT SEED LEAD VFX ARTIST"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "effect_info",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "font-overpass",
                        children: "Name of the VFX here"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "font-overpass",
                        children: "Little description of the VFX here"
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/UI/CardProyecto.tsx





const CardProyecto = ({ title, categories, description, img, alt, link })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "proyectos_card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
            href: link,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: img,
                    width: 350,
                    height: 370,
                    alt: alt
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "categorias",
                            children: categories.map((categoria, i)=>/*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: categoria
                                }, i))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "proyectos_card_hover",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: description
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button, {
                                type: "secondary",
                                clase: "d-flex align-items-center",
                                children: [
                                    "See more",
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "ps-1 ri-arrow-right-s-line"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/UI/GridProyectos.tsx



const GridProyectos = ()=>{
    const [selectedCategory, setSelectedCategory] = (0,external_react_.useState)("all"); // Almacena la categoría seleccionada
    const cardsData = [
        {
            id: 1,
            title: "Tarjeta 1",
            description: "Descripci\xf3n de la Tarjeta 1",
            categories: [
                "VFX",
                "Programming"
            ]
        },
        {
            id: 2,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 3,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 4,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 5,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 6,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 7,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 8,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 9,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 10,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 11,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Graphics"
            ]
        },
        {
            id: 12,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "Programming"
            ]
        },
        {
            id: 13,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX"
            ]
        },
        {
            id: 14,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "Graphics"
            ]
        },
        {
            id: 15,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 16,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "Graphics"
            ]
        },
        {
            id: 17,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming"
            ]
        },
        {
            id: 18,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Graphics"
            ]
        },
        {
            id: 19,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 20,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Graphics"
            ]
        },
        {
            id: 21,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming"
            ]
        },
        {
            id: 22,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "Graphics"
            ]
        },
        {
            id: 23,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "Programming"
            ]
        },
        {
            id: 24,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 25,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX"
            ]
        },
        {
            id: 26,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming"
            ]
        },
        {
            id: 27,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 28,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 29,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 30,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming",
                "Graphics"
            ]
        },
        {
            id: 31,
            title: "Tarjeta 2",
            description: "Descripci\xf3n de la Tarjeta 2",
            categories: [
                "VFX",
                "Programming",
                "Graphics"
            ]
        }
    ];
    const [currentPage, setCurrentPage] = (0,external_react_.useState)(1);
    const cardsPerPage = 10; // Número de tarjetas por página
    const filteredCards = cardsData.filter((card)=>{
        // Si no se ha seleccionado ninguna categoría o la tarjeta tiene la categoría seleccionada
        return selectedCategory === "all" || card.categories.includes(selectedCategory);
    });
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
    const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
    const next = ()=>{
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const prev = ()=>{
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handleCategoryChange = (category)=>{
        setSelectedCategory(category);
        setCurrentPage(1);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "proyectos",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                className: "text-center",
                children: "PORTFOLIO"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid_filters",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(FilterButton, {
                        text: "all",
                        setCategory: handleCategoryChange,
                        current: selectedCategory
                    }),
                    Array.from(new Set(cardsData.flatMap((card)=>card.categories))).map((category, i)=>/*#__PURE__*/ jsx_runtime.jsx(FilterButton, {
                            text: category,
                            setCategory: handleCategoryChange,
                            current: selectedCategory
                        }, i))
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "line"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "proyectos_grid",
                children: currentCards.map((card, i)=>/*#__PURE__*/ jsx_runtime.jsx(CardProyecto, {
                        link: "/",
                        categories: card.categories,
                        description: card.description,
                        img: "/images/esteviejocachondohijodeputacogecomountorosinusarpastillas.jpg",
                        title: card.title,
                        alt: "esteviejocachondohijodeputacogecomountorosinusarpastillas"
                    }, i))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pagination",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "arrow",
                        onClick: prev,
                        disabled: currentPage === 1,
                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                            className: "ri-arrow-left-s-line"
                        })
                    }),
                    Array.from({
                        length: totalPages
                    }).map((_, index)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                            onClick: ()=>setCurrentPage(index + 1),
                            className: currentPage === index + 1 ? "active" : "",
                            children: index + 1
                        }, index + 1)),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "arrow",
                        onClick: next,
                        disabled: currentPage === totalPages,
                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                            className: "ri-arrow-right-s-line"
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/UI/FilterButton.tsx


const FilterButton = ({ text, setCategory, current })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("button", {
        onClick: ()=>setCategory(text),
        className: `filterButton ${text == current ? "filterButton_active" : ""}`,
        children: text
    });
};

;// CONCATENATED MODULE: ./components/UI/index.ts








/***/ }),

/***/ 4336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $_: () => (/* reexport */ Footer),
  h4: () => (/* reexport */ Header),
  Ar: () => (/* reexport */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/Header.tsx


const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "content",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "d-flex align-items-center nav",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/proyectos",
                            children: "Work"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/proyectos",
                            children: "About"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/proyectos",
                            children: "Contact"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    children: "SERGIO PE\xd1ALOZA"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "redes",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "https://www.instagram.com/checholiolin/",
                            target: "_blank",
                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "ri-instagram-fill"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "https://www.artstation.com/xexolio",
                            target: "_blank",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "./images/artstation.svg",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "https://www.linkedin.com/in/sergio-pe%C3%B1aloza-herrera-137436183/",
                            target: "_blank",
                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "ri-linkedin-box-fill"
                            })
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/layout/Footer.tsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {});
};

;// CONCATENATED MODULE: ./components/layout/Layout.tsx



const Layout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
};

;// CONCATENATED MODULE: ./components/layout/index.ts





/***/ })

};
;