import sortImg from './sortImg.png'
import React, { useEffect, useState } from 'react';
import './TableComponent.css'

const TableComponent = ({ tableConfig, data }) => {
    // JSON table data
    const [tableData, setTableData] = useState([])
    const [shortData, setShortData] = useState('ASC')
    useEffect(() => {
        fetch(data)
            .then(res => res.json())
            .then(data => setTableData(data))
    }, [data])

    const shotingData = col => {
        if (shortData === 'ASC') {
            const shorted = [...tableData].sort((a, b) =>
                a[col] > b[col] ? 1 : -1
            );
            setTableData(shorted)
            setShortData('DSC')
        }
        if (shortData === 'DSC') {
            const shorted = [...tableData].sort((a, b) =>
                a[col] < b[col] ? 1 : -1
            );
            setTableData(shorted)
            setShortData('ASC')
        }

    }



    return (
        <div className='overflow-x-auto mb-16 '>
            <table className={`table table-zebra w-full border-2 border-gray-200 ${tableConfig.length === 3 ? 'for-small-width h-80' : 'for-large-width h-320'} `}>
                <thead>
                    <tr>
                        {
                            tableConfig.map((config, i) => (
                                <th key={i} className='border-2 border-gray-200 normal-case py-2' >
                                    <span className='flex gap-2'>{config}
                                        {
                                            tableConfig.length === 3 && config === "Name" && <img onClick={() => shotingData(config)} src={sortImg} alt="" />
                                        }
                                        {
                                            tableConfig[0] === 'Email Address' && tableConfig[2] === 'Role' && config === 'Role' && <img onClick={() => shotingData(config)} src={sortImg} alt="" />
                                        }
                                        {
                                            tableConfig[1] === 'Joining Date' && config === 'Joining Date' && <img onClick={() => shotingData(config)} src={sortImg} alt="" />
                                        }
                                        {
                                            tableConfig[1] === 'City' && config === "City" && <img onClick={() => shotingData(config)} src={sortImg} alt="" />
                                        }
                                        {
                                            tableConfig[3] === 'Role' && config === "Role" && <img onClick={() => shotingData(config)} src={sortImg} alt="" />
                                        }
                                    </span>
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className='text-sm'>
                    {
                        tableConfig.length === 3 ? <>
                            {
                                tableData.map((info, i) => <tr key={i}>
                                    <td className='border-2 border-gray-200'>
                                        {
                                            tableConfig[0] === "Name" ? <>
                                                <span className='flex gap-2 items-center'><img src={info.person.avatar} alt="" />{info.person.name}</span>
                                            </> : <span className='underline' style={{ color: '#0071CC' }}>{info.email}</span>
                                        }
                                    </td>
                                    <td className='border-2 border-gray-200'>
                                        {
                                            tableConfig[1] === "Email Address" ? <span className='underline' style={{ color: '#0071CC' }}>{info.email}</span> : `${info.joiningDate}`
                                        }
                                    </td>
                                    <td className='border-2 border-gray-200'>{info.role}</td>
                                </tr>)
                            }
                        </>
                            :
                            <>
                                {
                                    tableData.map(info => <tr className='' key={info.email}>
                                        <td className='border-2 border-gray-200'> <span className='flex gap-2 items-center'><img src={info.person.avatar} alt="" />{info.person.name}</span> </td>
                                        <td className='border-2 border-gray-200'>{tableConfig[1] === 'City' && `${info.city}`}</td>
                                        <td className='border-2 border-gray-200'>{tableConfig[2] === 'Joining Date' && `${info.joiningDate}`}</td>
                                        <td className='border-2 border-gray-200'>{tableConfig[3] === 'Role' && `${info.role}`}</td>
                                    </tr>)
                                }
                            </>
                    }

                </tbody>
            </table>
        </div >
    );
};

export default TableComponent;