import React, { useState } from "react";

const tableData = [
    {
        id: 1,
        target: "송캠프 운영 및 음원 제작 (인디 아티스트 발굴...)",
        similar: "송캠프 운영 및 음원 제작 (인디 아티스트 발굴...)",
        match: "부분 일치",
    },
    {
        id: 2,
        target: "공연 실황 콘텐츠 제작 및 배포 (유튜브, SNS ...)",
        similar: "공연 실황 콘텐츠 제작 및 배포 (유튜브, SNS ...)",
        match: "완전 일치",
    },
    {
        id: 3,
        target: "음원 유통 및 매칭 서비스 활성화 (AI 기반 추천...)",
        similar: "음원 유통 및 매칭 서비스 활성화 (AI 기반 추천...)",
        match: "부분 일치",
    },
    {
        id: 4,
        target: "창작자 수익 모델 다각화 (광고 음악, OST 프로...)",
        similar: "창작자 수익 모델 다각화 (광고 음악, OST 프로...)",
        match: "완전 일치",
    },
];

const TextSimilarityTable = () => {
    const [highlightedId, setHighlightedId] = useState(null);

    const onPlayClick = (id) => {
        setHighlightedId(id);
    };

    return (
        <div className="relative border border-[#d3d3d3] z-2 bg-white p-3">
            <table className="pms-table mb-4 w-full text-sm">
                <thead>
                <tr>
                    <th className="w-[50px]">번호</th>
                    <th className="w-auto">대상 과제 구간</th>
                    <th className="w-auto">유사 과제 구간</th>
                    <th className="w-[120px]">종목 구분</th>
                    <th className="w-[60px]">확인</th>
                </tr>
                </thead>
                <tbody>
                {tableData.map((row) => (
                    <tr
                        key={row.id}
                        className={
                            highlightedId === row.id
                                ? "bg-[#fcf8e3]" // 하이라이트 색상
                                : ""
                        }
                    >
                        <td>{row.id}</td>
                        <td>{row.target}</td>
                        <td>{row.similar}</td>
                        <td>{row.match}</td>
                        <td className="relative">
                            <button
                                onClick={() => onPlayClick(row.id)}
                                className="
                    absolute top-[calc(50%-4px)] left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-6 h-8 text-lg leading-none flex items-center justify-center
                    text-[#454545] border-b border-[#454545] rounded-none
                    pb-0 -mb-[1px] cursor-pointer
                  "
                                aria-label="재생"
                            >
                                ▶
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="p-4 bg-gray-100 h-96 flex items-center justify-center">
                <span className="text-gray-500">이미지 상세 내용 영역</span>
            </div>
        </div>
    );
};

export default TextSimilarityTable;
