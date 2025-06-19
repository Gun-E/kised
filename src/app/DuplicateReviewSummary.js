'use client';

import React, {useState} from 'react';
import {ChevronDown} from 'lucide-react';
import HalfCircleDot from "@/app/HalfCircleDot";
import DetailSummary from "@/app/DetailSummary";
import SimilarTasksSidebar from "@/app/SimilarTasksSidebar";
import TextSimilarityTable from "@/app/TextSimilarityTable";
import ImageDuplicateTable from "@/app/ImageDuplicateTable";

const DuplicateReviewSummary = ({isOpen, onClose}) => {
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // 추가: 현재 선택된 탭 상태 (text or image)
    const [activeTab, setActiveTab] = useState('text');

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0" onClick={onClose} />

            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[1080px] max-w-[95vw] max-h-[90vh] overflow-hidden bg-white rounded-sm shadow-2xl">
                <div className="bg-[#62687e] h-[25px] flex items-center justify-between px-1">
                    <div className="flex items-center gap-1.5 ml-1">
                        <div className="relative w-2 h-2">
                            <div className="w-2 h-2 bg-[#17d0cb] rounded-full"></div>
                            <div className="w-1 h-1 bg-[#62687e] rounded-full absolute top-0.5 left-0.5"></div>
                        </div>
                        <span className="text-white text-[10px] font-bold">중복도 검토 상세 조회 팝업</span>
                    </div>
                    <button onClick={onClose} className="flex items-center text-white justify-center w-4 h-4 cursor-pointer">
                        ✕
                    </button>
                </div>

                <div className="overflow-y-auto px-6 max-h-[calc(90vh-25px-50px)] grow">
                    <div className="py-5 px-6">
                        <div className="text-center mb-6">
                            <p className="text-base font-light leading-relaxed">
                                대상 과제 : <strong className="font-bold">사업 계획서 제출 과제명 A</strong>(00000000) / 유사 과제 :
                                <strong className="font-bold">사업 계획서 제출 과제명 B</strong>(00000001)
                            </p>
                            <p className="text-base font-light">
                                중복성 검토를 실행한 결과 최종 중복성 지수 <strong className="font-bold">00.00</strong>으로 해당 문서는 [<strong className="font-bold">유사한 과제</strong>] 입니다.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center mb-4 gap-3">
                                <div className="flex items-center gap-2">
                                    <HalfCircleDot/>
                                    <h2 className="text-[13px] font-bold text-[#454545]">중복성 검토 결과 요약</h2>
                                </div>
                                <button
                                    onClick={() => setIsDetailOpen(!isDetailOpen)}
                                    className="flex items-center gap-2 px-2 py-1 border border-[#5788e5] rounded-sm bg-white hover:bg-gray-50 cursor-pointer"
                                >
                                    <span className="text-xs font-bold text-[#3b72db]">자세히 보기</span>
                                    <ChevronDown className={`w-3 h-3 text-[#3b72db] transition-transform ${isDetailOpen ? 'rotate-180' : ''}`}/>
                                </button>
                            </div>

                            {!isDetailOpen && <DetailSummary />}
                        </div>

                        {/* 상세 조회 섹션 */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                                <HalfCircleDot/>
                                <h2 className="text-[13px] font-bold text-[#454545]">중복성 검토 결과 상세 조회</h2>
                            </div>

                            <div className="relative">
                                <div className="flex">
                                    <button
                                        onClick={() => setActiveTab('text')}
                                        className={`relative bottom-[-1px] px-4 py-1 border border-[#d3d3d3] border-b-0 text-[9px] font-bold cursor-pointer
        ${activeTab === 'text'
                                            ? 'bg-white text-[#454545] z-10'
                                            : 'bg-[#eeeeee] text-[#454545] z-0'}`}
                                        style={{ zIndex: activeTab === 'text' ? 10 : 0 }}
                                    >
                                        텍스트
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('image')}
                                        className={`relative bottom-[-1px] px-4 py-1 border border-[#d3d3d3] border-b-0 text-[9px] font-bold cursor-pointer
        ${activeTab === 'image'
                                            ? 'bg-white text-[#454545] z-10'
                                            : 'bg-[#eeeeee] text-[#454545] z-0'}`}
                                        style={{ zIndex: activeTab === 'image' ? 10 : 0 }}
                                    >
                                        이미지
                                    </button>
                                </div>

                                {activeTab === 'text' && <TextSimilarityTable />}
                                {activeTab === 'image' && <ImageDuplicateTable />}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="w-full h-[50px] flex items-center justify-center bg-white">
                    <button onClick={onClose} className="px-[12px] py-[6px] bg-[#5a5a5a] border border-[#484848] rounded text-white text-[12px] font-bold hover:bg-[#6a6a6a] flex items-center justify-center cursor-pointer">
                        닫기
                    </button>
                </div>

                <div
                    className="absolute right-[20px] top-[93px] bg-[#5a5a5a] border border-[#484848] w-[26px] min-h-[110px] flex items-center justify-center cursor-pointer hover:bg-[#6a6a6a] z-10 rounded-tl-md rounded-bl-md py-1 px-3.5"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <div className="text-white text-[11px] font-bold writing-mode-vertical">
                        유<br/>사<br/>과<br/>제<br/>목<br/>록
                    </div>
                </div>

                {/* 유사 과제 목록 사이드바 */}
                <SimilarTasksSidebar
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />
            </div>
        </>
    );
};

export default DuplicateReviewSummary;
