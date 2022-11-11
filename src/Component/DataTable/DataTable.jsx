import React, { useEffect, useState } from "react";
import Posts from "/Users/admin/CovidAppProject/COVID-APP-GROUP-R1/src/Component/DataTable/Posts.jsx";
import Pagination from '/Users/admin/CovidAppProject/COVID-APP-GROUP-R1/src/Component/DataTable/Pagination.jsx'
import axios from 'axios'

function DataTable() {
    const [dataTab, setDataTab] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(1)


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

    const indexOfLastPost=currentPage*postsPerPage
    const indexOfFirstPost=indexOfLastPost-postsPerPage
    const currentPosts=dataTab.slice(indexOfFirstPost,indexOfLastPost)

    console.log('current post=>',currentPosts);

    // change page

    const Paginate=pageNumber=>setCurrentPage(pageNumber)







    return (
        <>

            <div className="container">
                <h1>this is table data</h1>
                <Posts posts={currentPosts} loading={loading}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={dataTab.length} paginate={Paginate}/>
            </div>
        </>
    )

}
export default DataTable;
