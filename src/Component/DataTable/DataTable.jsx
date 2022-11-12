import React, { useEffect, useState } from "react";
import '/Users/admin/CovidAppProject/COVID-APP-GROUP-R1/src/Component/DataTable/DataTable.css'
import Posts from "../DataTable/Posts";
import DataTab from '/Users/admin/CovidAppProject/COVID-APP-GROUP-R1/src/Component/DataTable/DataTab.css'
import axios from 'axios'

function DataTable() {
    const [dataTab, setDataTab] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setitemsPerPage] = useState(5);
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    const [postsPerPage] = useState(20)



    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(dataTab.length / itemsPerPage); i++) {
        pages.push(i);
    }


    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage == number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });


    useEffect(() => {
        setLoading(true)
        axios
            .get(
                'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
                {
                    headers: {
                        'X-RapidAPI-Key': '69b56f0544mshe1d9f75b422a4e7p142f81jsn40c4bc0c5681',
                        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
                    },
                }
            )
            .then(res => {
                console.log(res.data);
                setDataTab([...res.data]);
                setLoading(false)
            })
            .catch(function (err) {
                console.error(err);
            });
    }, []);

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = dataTab.slice(indexOfFirstPost, indexOfLastPost)

    // changing pages
    // const Paginate = pageNumber => setCurrentPage(pageNumber)

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1)
        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1)

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }


    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextBtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevBtn}> &hellip; </li>;
    }

    return (
        <>

            <div className="container">
                <h1>All Country Data</h1>
                <Posts posts={currentPosts} loading={loading} />

                {/* <Pagination postsPerPage={postsPerPage} totalPosts={dataTab.length} paginate={Paginate} /> */}
                <div className="dataCont">
                    <ul className="Pagenumbers">
                        <li>
                            <button className="btn" onClick={handlePrevBtn} disabled={currentPage == pages[0] ? true : false}>Prev</button>
                        </li>
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}

                        <li>
                            <button className="btn" onClick={handleNextBtn} disabled={currentPage == pages[pages.length - 1] ? true : false}>Next</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )

}
export default DataTable;
