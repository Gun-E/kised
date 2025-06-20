'use client';

import React, {useState} from 'react';
import {ChevronDown} from 'lucide-react';
import DetailSummary from "@/app/DetailSummary";
import SimilarTasksSidebar from "@/app/SimilarTasksSidebar";
import TextSimilarityTable from "@/app/TextSimilarityTable";
import ImageDuplicateTable from "@/app/ImageDuplicateTable";

const DuplicateReviewSummary = ({isOpen, onClose}) => {
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // 현재 선택된 탭 상태 (text or image)
    const [activeTab, setActiveTab] = useState('text');

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-40" onClick={onClose}/>
            <div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[1080px] max-w-[95vw] max-h-[90vh] overflow-hidden bg-white shadow-2xl rounded-sm">
                <div
                    className="bg-[#62687e] h-[38px] flex items-center justify-between px-4 rounded-t-sm"> {/* 상단바 패딩 조정 및 둥근 모서리 */}
                    <div className="flex items-center gap-2">
                        <span className="text-white text-[12px] font-bold">중복도 검토 상세 조회 팝업</span>
                    </div>
                    <button onClick={onClose}
                            className="flex items-center text-white justify-center w-5 h-5 cursor-pointer hover:bg-gray-700 rounded-full transition-colors"> {/* 닫기 버튼 스타일 개선 */}
                        ✕
                    </button>
                </div>

                <div
                    className="overflow-y-auto px-9 pt-5 pb-0 max-h-[calc(90vh-38px-50px)] custom-scrollbar"> {/* 상단바 및 하단 버튼 높이 제외 */}
                    <div>
                        <div className="text-center mb-6 text-sm"> {/* 폰트 크기 및 마진 조정 */}
                            <p className="font-light leading-relaxed">
                                대상 과제 : <strong className="font-bold">사업 계획서 제출 과제명 A</strong>(00000000) / 유사 과제
                                : <strong className="font-bold">사업 계획서 제출 과제명 B</strong>(00000001)
                            </p>
                            <p className="font-light">
                                중복성 검토를 실행한 결과 최종 중복성 지수 <strong className="font-bold">00.00</strong>으로 해당 문서는 [<strong
                                className="font-bold">유사한 과제</strong>] 입니다.
                            </p>
                        </div>

                        <h2 className="text-[16px] font-bold text-[#1E40AF] py-1.5">중복성 검토 결과 요약</h2>

                        {/* 중복성 검토 결과 요약 (자세히 보기 드롭다운) */}
                        <div
                            className="mb-4 border border-[#e0e0e0] rounded-sm overflow-hidden">
                            <button
                                onClick={() => setIsDetailOpen(!isDetailOpen)}
                                className="w-full flex items-center justify-between px-4 py-2 bg-[#f8f9fa] hover:bg-gray-100 cursor-pointer transition-colors" // 배경색 및 호버 효과 추가
                            >
                                <div className="flex items-center gap-2">
                                    <h2 className="text-[12px] font-bold text-[#D08331]">자세히 보기</h2>
                                </div>
                                <ChevronDown
                                    className={`w-4 h-4 text-[#454545] transition-transform duration-200 ${isDetailOpen ? 'rotate-180' : ''}`}/>
                            </button>

                            {/* isDetailOpen이 true일 때만 DetailSummary를 렌더링 */}
                            {isDetailOpen && (
                                <div className="px-4 py-2.5 bg-white border-t border-[#e0e0e0]">
                                    <DetailSummary/>
                                </div>
                            )}
                        </div>

                        {/* 상세 조회 섹션 */}
                        <div className="relative">
                            <div className="flex mb-2">
                                <button
                                    onClick={() => setActiveTab('text')}
                                    className={`relative px-5 py-1.5 text-[10px] font-bold cursor-pointer
border ${activeTab === 'text' ? 'bg-[#1E40AF] text-white border-[#1E40AF] z-10' : 'bg-white text-[#454545] border-[#d3d3d3] z-0'}`}
                                    style={{zIndex: activeTab === 'text' ? 10 : 0}}
                                >
                                    텍스트
                                </button>

                                <button
                                    onClick={() => setActiveTab('image')}
                                    className={`relative px-5 py-1.5 text-[10px] font-bold cursor-pointer
border ${activeTab === 'image' ? 'bg-[#1E40AF] text-white border-[#1E40AF] z-10' : 'bg-white text-[#454545] border-[#d3d3d3] z-0'}`}
                                    style={{zIndex: activeTab === 'image' ? 10 : 0}}
                                >
                                    이미지
                                </button>
                            </div>
                            <div className="flex items-center gap-2 py-1.5">
                                <h2 className="text-[16px] font-bold text-[#1E40AF]">{activeTab === 'image' ? "이미지" : "텍스트"} 중복성
                                    검토 결과 상세 조회</h2>
                            </div>
                            {activeTab === 'text' && <TextSimilarityTable/>}
                            {activeTab === 'image' && <ImageDuplicateTable/>}
                        </div>
                    </div>
                </div>

                <div
                    className="w-full h-[50px] flex items-center justify-center">
                    <button
                        onClick={onClose}
                        className="px-3 py-1 bg-[#5a5a5a] border border-[#3f3f3f] rounded-sm text-white text-[13px] font-[500] hover:bg-[#6a6a6a] transition-colors flex items-center justify-center cursor-pointer"
                    >
                        닫기
                    </button>
                </div>

                {/* 유사 과제 목록 사이드바 토글 버튼 */}
                <div
                    className="absolute right-[10px] top-[93px] bg-white border border-[#D3D3D3] w-[28px] min-h-[110px] flex flex-col items-center justify-center cursor-pointer hover:bg-[#f5f5f5] z-10 rounded-tl-md rounded-bl-md py-3 shadow-md"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <div
                        className="text-[#484848] text-[11px] font-bold tracking-tight leading-snug" // Removed rotate-180
                        style={{writingMode: 'vertical-lr', textOrientation: 'upright'}}>
                        유사과제목록
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