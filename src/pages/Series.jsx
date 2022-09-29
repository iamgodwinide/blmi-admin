import React, { useEffect, useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Series() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const series = useSelector(state => state.series.series);

    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <h1 className='h3 text-dark'>Series</h1>
                        <div className='mt-5'>
                            <Link to={"/series/new-series"} className="btn btn-success">Add New</Link>
                        </div>

                        <div className="overflow-x-auto bg-white mt-4" style={{
                            maxWidth: "900px"
                        }}>
                            <table className="table-auto w-full">
                                <thead className="text-bold uppercase text-slate-400 bg-slate-50 px-5 rounded-sm">
                                    <tr>
                                        <th className="p-2">
                                            <div className="font-semibold text-dark ">Title</div>
                                        </th>
                                        <th className="p-2">
                                            <div className="font-semibold text-dark ">Published</div>
                                        </th>
                                        <th className="p-2">
                                            <div className="font-semibold text-dark ">Action</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        series.map((ser) => (
                                            <tr key={ser._id}>
                                                <td>
                                                    <div className="ml-2">{ser.title}</div>
                                                </td>
                                                <td>
                                                    <div className="ml-2">{ser.published ? "yes" : "no"}</div>
                                                </td>
                                                <td className="d-flex">
                                                    <Link to="/" className='my-2 btn btn-secondary' >Edit</Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            {
                                series.length === 0
                                && <h4 className='text-bold text-center  mt-5 pb-5'>No Data available</h4>
                            }

                        </div>


                    </div>

                </main>

            </div>
        </div>
    );
}

export default Series;