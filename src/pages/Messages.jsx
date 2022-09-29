import React, { useEffect, useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Messages() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const messages = useSelector(state => state.messages.messages);

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
                        <h1 className='h3 text-dark'>Messages</h1>
                        <div className='mt-5'>
                            <Link to={"/messages/new-message"} className="btn btn-success">Add New</Link>
                        </div>

                        <div className="overflow-x-auto bg-white mt-4" style={{
                            maxWidth: "900px"
                        }}>
                            <table className="table-auto w-full">
                                {/* Table header */}
                                <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                                    <tr>
                                        <th className="p-2">
                                            <div className="font-semibold text-dark text-left">Artwork</div>
                                        </th>
                                        <th className="p-2">
                                            <div className="font-semibold text-dark">Title</div>
                                        </th>
                                        <th className="p-2">
                                            <div className="font-semibold text-dark">Series Name</div>
                                        </th>
                                        <th className="p-2">
                                            <div className="font-semibold text-dark">Video included</div>
                                        </th>
                                        <th className="p-2">
                                            <div className="font-semibold text-dark">Date</div>
                                        </th>
                                        <th className="p-2">
                                            <div className="font-semibold text-dark">Published</div>
                                        </th>
                                        <th className="p-2">
                                            <div className="font-semibold text-dark">Action</div>
                                        </th>
                                    </tr>
                                </thead>
                                {/* Table body */}
                                <tbody>
                                    {/* Row */}
                                    {
                                        messages.map(message => (
                                            <tr key={message._id}>
                                                <td className="p-2">
                                                    <img className='rounded' src={message.artwork} style={{
                                                        height: "60px",
                                                        aspectRatio: 1
                                                    }} />
                                                </td>
                                                <td className="p-2">
                                                    <div>{message.title}</div>
                                                </td>
                                                <td className="p-2">
                                                    <div>{message.series_title}</div>
                                                </td>
                                                <td className="p-2">
                                                    <div>{message.video_url ? "yes" : "no"}</div>
                                                </td>
                                                <td className="p-2">
                                                    <div>{message.date}</div>
                                                </td>
                                                <td className="p-2">
                                                    <div>{message.published ? "yes" : "no"}</div>
                                                </td>
                                                <td className="p-2 d-flex justify-content-center">
                                                    <Link to={`/messages/edit/${message._id}`} className='btn btn-secondary' >More</Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            {
                                messages.length === 0
                                && <h4 className='text-bold text-center mt-5 pb-5'>No Data available</h4>
                            }
                        </div>


                    </div>

                </main>

            </div>
        </div>
    );
}

export default Messages;