'use client';

import React, { useState } from 'react';

const imageData = [
    {
        id: 1,
        targetPage: "1/6",
        targetImage: "/path/to/image1.jpg",
        targetWeight: "80.5%",
        duplicateIndex: "80.5%",
        overlapIndex: "79.5%",
        significanceLevel: "높음",
        significanceColor: "#f86f6f",
        similarPage: "2/20",
        similarImage: "/path/to/image2.jpg",
        similarWeight: "25.5%"
    },
    {
        id: 2,
        targetPage: "2/6",
        targetImage: "/path/to/image3.jpg",
        targetWeight: "12.5%",
        duplicateIndex: "33.3%",
        overlapIndex: "4.2%",
        significanceLevel: "낮음",
        significanceColor: "#6ebe73",
        similarPage: "3/20",
        similarImage: "/path/to/image4.jpg",
        similarWeight: "45.5%"
    },
    {
        id: 3,
        targetPage: "3/6",
        targetImage: "/path/to/image5.jpg",
        targetWeight: "15.5%",
        duplicateIndex: "-",
        overlapIndex: "-",
        significanceLevel: "낮음",
        significanceColor: "#6ebe73",
        similarPage: "",
        similarImage: "",
        similarWeight: ""
    }
];

const summaryData = {
    totalOverlapIndex: "13.9%",
    totalSignificanceLevel: "낮음",
    totalSignificanceColor: "#6ebe73"
};

const ImageDuplicateTable = () => {
    const [selectedRowId, setSelectedRowId] = useState(null);

    const handleRowClick = (id) => {
        setSelectedRowId(id);
    };

    return (
        <div className="relative border border-[#d3d3d3] z-2 bg-white p-3">
            <table className="pms-table mb-4 w-full text-sm">
                <thead>
                <tr>
                    <th colSpan="4"><span>대상 과제 이미지</span></th>
                    <th colSpan="3"><span>중첩률</span></th>
                    <th colSpan="3"><span>유사과제 이미지</span></th>
                </tr>
                <tr>
                    <th className="w-[50px]">번호</th>
                    <th className="w-[60px]">페이지</th>
                    <th className="w-auto">이미지</th>
                    <th className="w-[90px]">영역 가중치</th>
                    <th className="w-[75px]">중복지수</th>
                    <th className="w-[75px]">중첩률 지수</th>
                    <th className="w-[80px]">유의수준</th>
                    <th className="w-[65px]">페이지</th>
                    <th className="w-auto">이미지</th>
                    <th className="w-[65px]">영역 가중치</th>
                </tr>
                </thead>
                <tbody>
                {imageData.map((item) => (
                    <tr
                        key={item.id}
                        onClick={() => handleRowClick(item.id)}
                        className={`cursor-pointer ${selectedRowId === item.id ? 'bg-[#fcf8e3]' : ''}`}
                    >
                        <td>{item.id}</td>
                        <td>{item.targetPage}</td>
                        <td>
                            <div className="flex justify-center">
                                <div className="w-9 h-6 bg-gray-200 border border-gray-300 rounded flex items-center justify-center text-xs text-gray-500">
                                    IMG
                                </div>
                            </div>
                        </td>
                        <td>{item.targetWeight}</td>
                        <td>{item.duplicateIndex}</td>
                        <td>{item.overlapIndex}</td>
                        <td>
                            <div className="flex items-center justify-center gap-1">
                                <div
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: item.significanceColor }}
                                ></div>
                                <span>{item.significanceLevel}</span>
                            </div>
                        </td>
                        <td>{item.similarPage}</td>
                        <td>
                            {item.similarImage && (
                                <div className="flex justify-center">
                                    <div className="w-9 h-6 bg-gray-200 border border-gray-300 rounded flex items-center justify-center text-xs text-gray-500">
                                        IMG
                                    </div>
                                </div>
                            )}
                        </td>
                        <td>{item.similarWeight}</td>
                    </tr>
                ))}

                {/* 합계 행 */}
                <tr className="bg-[#eff3f5]">
                    <td colSpan="5">합계</td>
                    <td>{summaryData.totalOverlapIndex}</td>
                    <td>
                        <div className="flex items-center justify-center gap-1">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: summaryData.totalSignificanceColor }}
                            ></div>
                            <span>{summaryData.totalSignificanceLevel}</span>
                        </div>
                    </td>
                    <td colSpan="3"></td>
                </tr>
                </tbody>
            </table>

            <div className="p-4 bg-gray-100 h-96 flex items-center justify-center">
                <span className="text-gray-500">이미지 상세 내용 영역</span>
            </div>
        </div>
    );
};

export default ImageDuplicateTable;
