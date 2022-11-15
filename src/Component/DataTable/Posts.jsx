
import React from "react";
import '/Users/admin/CovidAppProject/COVID-APP-GROUP-R1/src/Component/DataTable/Posts.css'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading.....</h2>
    }
    return (
        <>
            <div className="Data-cont">
                <table key={posts.id} id="cd">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Population</th>
                            <th>Active Cases</th>
                            <th>cases(per million)</th>
                            <th>Total cases</th>
                            <th>Total Deaths</th>
                            <th>Total Recovered</th>

                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => {
                            return <tr>
                                <td>{post.Country}</td>
                                <td>{post.Population}</td>
                                <td>{post.ActiveCases}</td>
                                <td>{post.TotCases_1M_Pop}</td>
                                <td>{post.TotalCases}</td>
                                <td>{post.TotalDeaths}</td>
                                <td>{post.TotalRecovered}</td>
                            </tr>
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Posts;
