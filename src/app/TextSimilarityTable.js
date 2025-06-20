import React, { useState } from "react";
import CustomScrollbar from "@/app/CustomScrollbar";
import PDFViewer from "@/app/PDFViewer";

const tableData = [
    {
        id: 1,
        target: "송캠프 운영 및 음원",
        similar: "송캠프 운영 및 음원",
        match: "완전 일치",
        imageSrc1: "/images/task1_original.png",
        imageSrc2: "/images/task1_similar.png",
        fileName1: "20310779.pdf",
        fileName2: "20303372.pdf"
    },
    {
        id: 2,
        target: "송캠프 운영 및 음원 제작",
        similar: "송캠프 운영 및 음원 제작",
        match: "완전 일치",
        imageSrc1: "/images/task2_original.png",
        imageSrc2: "/images/task2_similar.png",
        fileName1: "20310779.pdf",
        fileName2: "20303372.pdf"
    },
    {
        id: 3,
        target: "AI 기반 추천 시스템",
        similar: "AI 기반 추천 시스템과",
        match: "부분 일치",
        imageSrc1: "/images/task3_original.png",
        imageSrc2: "/images/task3_similar.png",
        fileName1: "20310779.pdf",
        fileName2: "20303372.pdf"
    },
    {
        id: 4,
        target: "창작자 수익 모델 다각화 (광고 음악, OST 프로덕션)",
        similar: "창작자 수익 모델 다각화 (광고 음악, OST 프로덕션)",
        match: "완전 일치",
        imageSrc1: "/images/task2_original.png",
        imageSrc2: "/images/task2_similar.png",
        fileName1: "20310779.pdf",
        fileName2: "20303372.pdf"
    },
    {
        id: 5,
        target: "디지털 음악 플랫폼 통합 관리 시스템 개발",
        similar: "음악 스트리밍 플랫폼 관리 솔루션 구축",
        match: "부분 일치",
        imageSrc1: "/images/task1_original.png",
        imageSrc2: "/images/task1_similar.png",
        fileName1: "20310779.pdf",
        fileName2: "20303372.pdf"
    },
    {
        id: 6,
        target: "아티스트 매니지먼트 및 홍보 마케팅 서비스",
        similar: "음악가 매니지먼트 및 프로모션 플랫폼 운영",
        match: "부분 일치",
        imageSrc1: "/images/task2_original.png",
        imageSrc2: "/images/task2_similar.png",
        fileName1: "20310779.pdf",
        fileName2: "20303372.pdf"
    },
    {
        id: 7,
        target: "음악 교육 콘텐츠 제작 및 온라인 강의 플랫폼",
        similar: "온라인 음악 교육 플랫폼 개발 및 콘텐츠 제작",
        match: "완전 일치",
        imageSrc1: "/images/task1_original.png",
        imageSrc2: "/images/task1_similar.png",
        fileName1: "20310779.pdf",
        fileName2: "20303372.pdf"
    },
    {
        id: 8,
        target: "지역 음악 축제 기획 및 운영 (문화 관광 연계)",
        similar: "로컬 뮤직 페스티벌 기획 (관광 상품 연계)",
        match: "부분 일치",
        imageSrc1: "/images/task2_original.png",
        imageSrc2: "/images/task2_similar.png",
        fileName1: "20310779.pdf",
        fileName2: "20303372.pdf"
    },
    {
        id: 9,
        target: "블록체인 기반 음원 저작권 관리 시스템",
        similar: "NFT 활용 음악 저작권 보호 플랫폼",
        match: "부분 일치",
        imageSrc1: "/images/task1_original.png",
        imageSrc2: "/images/task1_similar.png",
        fileName1: "20310779.pdf",
        fileName2: "20303372.pdf"
    },
    {
        id: 10,
        target: "VR/AR 기술을 활용한 몰입형 음악 콘서트",
        similar: "가상현실 음악 공연 플랫폼 개발",
        match: "부분 일치",
        imageSrc1: "/images/task2_original.png",
        imageSrc2: "/images/task2_similar.png",
        fileName1: "20310779.pdf",
        fileName2: "20303372.pdf"
    }
];


const TextSimilarityTable = () => {
    const [highlightedId, setHighlightedId] = useState(null);

    const onRowClick = (id) => {
        setHighlightedId(id);
    };

    const headerTable = (
        <table className="pms-table">
            <thead>
            <tr>
                <th className="w-[50px]">번호</th>
                <th className="w-auto">대상 과제 구간</th>
                <th className="w-auto">유사 과제 구간</th>
                <th className="w-[120px]">종목 구분</th>
            </tr>
            </thead>
        </table>
    );

    // 기본 이미지 및 파일명
    const defaultRow = {
        imageSrc1: "/images/original.png",
        imageSrc2: "/images/similar.png",
        fileName1: "20310779.pdf",
        fileName2: "20303372.pdf"
    };

    const selectedRow = tableData.find(row => row.id === highlightedId) || defaultRow;

    return (
        <div>
            <CustomScrollbar
                style={{ maxHeight: 126 }}
                header={headerTable}
            >
                <table className="pms-table">
                    <tbody>
                    {tableData.map((row) => (
                        <tr
                            key={row.id}
                            className={`cursor-pointer hover:bg-blue-50 ${
                                highlightedId === row.id ? "bg-[#fcf8e3]" : ""
                            }`}
                            onClick={() => onRowClick(row.id)}
                        >
                            <td className="w-[50px] border border-[#d3d3d3] p-2 text-center">{row.id}</td>
                            <td className="w-auto border border-[#d3d3d3] p-2 text-left">{row.target}</td>
                            <td className="w-auto border border-[#d3d3d3] p-2 text-left">{row.similar}</td>
                            <td className="w-[120px] border border-[#d3d3d3] p-2 text-center">
                                {row.match}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </CustomScrollbar>

            <div className="flex items-center justify-center mt-4 rounded-lg gap-4">
                <PDFViewer
                    imageSrc={selectedRow.imageSrc1}
                    fileName={selectedRow.fileName1}
                />
                <PDFViewer
                    imageSrc={selectedRow.imageSrc2}
                    fileName={selectedRow.fileName2}
                />
            </div>
        </div>
    );
};


export default TextSimilarityTable;