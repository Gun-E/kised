'use client';

import React, {useState} from 'react';
import PDFViewer from "@/app/PDFViewer";
import CustomScrollbar from "@/app/CustomScrollbar";

const imageData = [
    {
        id: 1,
        targetPage: "1/6",
        targetImage: "/images/image1.png",
        targetFileName: "대상_페이지1.pdf",
        targetWeight: "40.5%",
        duplicateIndex: "80.5%",
        overlapIndex: "79.5%",
        significanceLevel: "높음",
        significanceColor: "#f86f6f",
        similarPage: "2/20",
        similarImage: "/images/image2.png",
        similarFileName: "유사_페이지2.pdf",
        similarWeight: "45.5%",
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
        imageSrc1: "/images/image2_original.png",
        imageSrc2: "/images/image2_similar.png"
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
    },
    {
        id: 4,
        targetPage: "4/6",
        targetImage: "/images/image2.png",
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
    },
    {
        id: 5,
        targetPage: "5/6",
        targetImage: "/images/image3.png",
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
    },
    {
        id: 6,
        targetPage: "6/6",
        targetImage: "/images/image4.png",
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
    },
    {
        id: 7,
        targetPage: "6/6",
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
    },
    {
        id: 8,
        targetPage: "6/6",
        targetImage: "/images/image1.png",
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
    const [selectedRowId, setSelectedRowId] = useState(null); // 다시 null로 변경

    const handleRowClick = (id) => {
        setSelectedRowId(id);
    };

    const selectedRow = imageData.find(item => item.id === selectedRowId);

    const headerTable = (
        <table className="pms-table w-full text-sm" style={{ tableLayout: 'fixed', width: '100%' }}>
            <colgroup>
                <col style={{ width: '50px' }} />
                <col style={{ width: '60px' }} />
                <col style={{ width: '200px' }} />
                <col style={{ width: '90px' }} />
                <col style={{ width: '75px' }} />
                <col style={{ width: '75px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '65px' }} />
                <col style={{ width: 'auto' }} />
                <col style={{ width: '65px' }} />
            </colgroup>
            <thead>
            <tr>
                <th colSpan="4">대상 과제 이미지</th>
                <th colSpan="3">중첩률</th>
                <th colSpan="3">유사 과제 이미지</th>
            </tr>
            <tr>
                <th style={{ width: '50px' }}>번호</th>
                <th style={{ width: '60px' }}>페이지</th>
                <th style={{ width: 'auto' }}>이미지</th>
                <th style={{ width: '90px' }}>영역 가중치</th>
                <th style={{ width: '75px' }}>중복 지수</th>
                <th style={{ width: '75px' }}>중첩률 지수</th>
                <th style={{ width: '80px' }}>유의 수준</th>
                <th style={{ width: '65px' }}>페이지</th>
                <th style={{ width: 'auto' }}>이미지</th>
                <th style={{ width: '65px' }}>영역 가중치</th>
            </tr>
            </thead>
        </table>
    );

    return (
        <div>
            <CustomScrollbar style={{maxHeight: 183}} header={headerTable} headerHeight={61} hasFooter={true}>
                <table className="pms-table w-full text-sm" style={{ tableLayout: 'fixed' }}>
                    <tbody>
                    {imageData.map((item) => (
                        <tr
                            key={item.id}
                            onClick={() => handleRowClick(item.id)}
                            className={`cursor-pointer hover:bg-blue-50 ${selectedRowId === item.id ? 'bg-[#fcf8e3]' : ''}`}
                        >
                            <td style={{ width: '50px' }}>{item.id}</td>
                            <td style={{ width: '60px' }}>{item.targetPage}</td>
                            <td style={{ width: '200px' }}>
                                <div className="flex justify-center">
                                    {item.targetImage ? (
                                        <img
                                            src={item.targetImage}
                                            alt="대상 이미지"
                                            className="w-9 h-6 object-cover"
                                        />
                                    ) : (
                                        <div
                                            className="w-9 h-6 bg-gray-200 border border-gray-300 rounded flex items-center justify-center text-xs text-gray-500">
                                            IMG
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td style={{ width: '90px' }}>{item.targetWeight}</td>
                            <td style={{ width: '75px' }}>{item.duplicateIndex}</td>
                            <td style={{ width: '75px' }}>{item.overlapIndex}</td>
                            <td style={{ width: '80px' }}>
                                <div className="flex items-center justify-center gap-1">
                                    <div className="w-2 h-2 rounded-full"
                                         style={{backgroundColor: item.significanceColor}}></div>
                                    <span>{item.significanceLevel}</span>
                                </div>
                            </td>
                            <td style={{ width: '65px' }}>{item.similarPage}</td>
                            <td style={{ width: 'auto' }}>
                                <div className="flex justify-center">
                                    {item.similarImage ? (
                                        <img
                                            src={item.similarImage}
                                            alt="유사 이미지"
                                            className="w-9 h-6 object-cover"
                                        />
                                    ) : (
                                        <div>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td style={{ width: '65px' }}>{item.similarWeight}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </CustomScrollbar>
            <div className="pms-table-footer-container">
                <table className="pms-table w-full" style={{ tableLayout: 'fixed' }}>
                    <tbody>
                    <tr className="bg-[#eff3f5]">
                        <td className="w-[475px]" colSpan="5">합계</td>
                        <td className="w-[75px]">{summaryData.totalOverlapIndex}</td>
                        <td className="w-[80px]">
                            <div className="flex items-center justify-center gap-1">
                                <div className="w-2 h-2 rounded-full"
                                     style={{backgroundColor: summaryData.totalSignificanceColor}}></div>
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
                    imageSrc={selectedRow ? selectedRow.imageSrc1 : "/images/image1_original_default.png"}
                    fileName={selectedRow ? selectedRow.targetFileName : "기본 문서"}
                />
                <PDFViewer
                    imageSrc={selectedRow ? selectedRow.imageSrc2 : "/images/image1_similar_default.png"}
                    fileName={selectedRow ? selectedRow.similarFileName : "기본 문서"}
                />
            </div>
        </div>
    );
};

export default ImageDuplicateTable;