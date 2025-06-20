'use client';

import React, { useState } from 'react';
import PDFViewer from "@/app/PDFViewer";

const imageData = [
    {
        id: 1,
        targetPage: "1/6",
        targetImage: "/images/image1.png",
        targetFileName: "대상_페이지1.pdf",
        targetWeight: "80.5%",
        duplicateIndex: "80.5%",
        overlapIndex: "79.5%",
        significanceLevel: "높음",
        significanceColor: "#f86f6f",
        similarPage: "2/20",
        similarImage: "/images/image2.png",
        similarFileName: "유사_페이지2.pdf",
        similarWeight: "25.5%",
        imageSrc1: "/images/image1_original.png",
        imageSrc2: "/images/image1_similar.png"
    },
    {
        id: 2,
        targetPage: "2/6",
        targetImage: "/images/image3.png",
        targetFileName: "대상_페이지2.pdf",
        targetWeight: "12.5%",
        duplicateIndex: "33.3%",
        overlapIndex: "4.2%",
        significanceLevel: "낮음",
        significanceColor: "#6ebe73",
        similarPage: "3/20",
        similarImage: "/images/image4.png",
        similarFileName: "유사_페이지3.pdf",
        similarWeight: "45.5%",
        imageSrc1: "/images/task2_original.png",
        imageSrc2: "/images/task2_similar.png"
    },
    {
        id: 3,
        targetPage: "3/6",
        targetImage: "/images/image5.png",
        targetFileName: "대상_페이지3.pdf",
        targetWeight: "15.5%",
        duplicateIndex: "-",
        overlapIndex: "-",
        significanceLevel: "낮음",
        significanceColor: "#6ebe73",
        similarPage: "",
        similarImage: "",
        similarFileName: "",
        similarWeight: "",
        imageSrc1: "/images/task3_original.png",
        imageSrc2: ""
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

    const selectedRow = imageData.find(item => item.id === selectedRowId);

    return (
        <div>
            <div className="pms-table-container">
                <table className="pms-table mb-4 w-full text-sm">
                    <thead>
                    <tr>
                        <th colSpan="4">대상 과제 이미지</th>
                        <th colSpan="3">중첩률</th>
                        <th colSpan="3">유사과제 이미지</th>
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
                            className={`cursor-pointer hover:bg-blue-50 ${selectedRowId === item.id ? 'bg-[#fcf8e3]' : ''}`}
                        >
                            <td>{item.id}</td>
                            <td>{item.targetPage}</td>
                            <td>
                                <div className="flex justify-center">
                                    {item.targetImage ? (
                                        <img
                                            src={item.targetImage}
                                            alt="대상 이미지"
                                            className="w-9 h-6 object-cover"
                                        />
                                    ) : (
                                        <div className="w-9 h-6 bg-gray-200 border border-gray-300 rounded flex items-center justify-center text-xs text-gray-500">
                                            IMG
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td>{item.targetWeight}</td>
                            <td>{item.duplicateIndex}</td>
                            <td>{item.overlapIndex}</td>
                            <td>
                                <div className="flex items-center justify-center gap-1">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.significanceColor }}></div>
                                    <span>{item.significanceLevel}</span>
                                </div>
                            </td>
                            <td>{item.similarPage}</td>
                            <td>
                                <div className="flex justify-center">
                                    {item.similarImage ? (
                                        <img
                                            src={item.similarImage}
                                            alt="유사 이미지"
                                            className="w-9 h-6 object-cover"
                                        />
                                    ) : (
                                        <div className="w-9 h-6 bg-gray-200 border border-gray-300 rounded flex items-center justify-center text-xs text-gray-500">
                                            IMG
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td>{item.similarWeight}</td>
                        </tr>
                    ))}

                    <tr className="bg-[#eff3f5]">
                        <td colSpan="5">합계</td>
                        <td>{summaryData.totalOverlapIndex}</td>
                        <td>
                            <div className="flex items-center justify-center gap-1">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: summaryData.totalSignificanceColor }}></div>
                                <span>{summaryData.totalSignificanceLevel}</span>
                            </div>
                        </td>
                        <td colSpan="3"></td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-center mt-4 rounded-lg gap-4">
                <PDFViewer
                    imageSrc={selectedRow?.imageSrc1}
                    fileName={selectedRow?.targetFileName}
                />
                <PDFViewer
                    imageSrc={selectedRow?.imageSrc2}
                    fileName={selectedRow?.similarFileName}
                />
            </div>
        </div>
    );
};

export default ImageDuplicateTable;
