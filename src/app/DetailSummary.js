import React, { useState } from 'react';
import HalfCircleDot from "@/app/HalfCircleDot";
import OutputCriteriaModal from "@/app/OutputCriteriaModal";

const DetailSummary = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div>
                {/* 과제 상세 정보 */}
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-[13px] font-bold text-[#454545] flex items-center gap-2">
                            <span className="w-1 h-1 bg-[#454545] rounded-full inline-block"></span>
                            과제 상세 정보
                        </h3>
                        <button onClick={() => setIsModalOpen(true)}
                                className="px-3 py-1 bg-white border border-[#D3D3D3] rounded-sm hover:bg-gray-50 flex items-center justify-center cursor-pointer">
                            <span className="text-xs font-light text-[#333333]">산출 기준 확인</span>
                        </button>
                    </div>
                    <div className="pms-table-container">
                        <table className="pms-table">
                            <thead>
                            <tr>
                                <th>구분</th>
                                <th>과제 번호</th>
                                <th>과제 명</th>
                                <th>사업 분류</th>
                                <th>사업 연도</th>
                                <th>대표자 명</th>
                                <th>기관 명</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>대상 과제</td>
                                <td>20310779</td>
                                <td>지능형 음악 분석 시스템 개발</td>
                                <td>예비 창업 패키지</td>
                                <td>2025</td>
                                <td>이*호</td>
                                <td>예비 창업자</td>
                            </tr>
                            <tr>
                                <td>유사 과제</td>
                                <td>20303372</td>
                                <td>AI 기반 음악 추천 플랫폼</td>
                                <td>초기 창업 패키지</td>
                                <td>2025</td>
                                <td>이*일</td>
                                <td>베이스바이오아트</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 텍스트 중복 결과 */}
                <div className="mb-4">
                    <h3 className="text-[13px] font-bold text-[#454545] flex items-center gap-2 mb-2 h-[30px]">
                        <span className="w-1 h-1 bg-[#454545] rounded-full inline-block"></span>
                        텍스트 중복 결과
                    </h3>
                    <div className="pms-table-container">
                        <table className="pms-table">
                            <thead>
                            <tr>
                                <th rowSpan={2}>글자 수</th>
                                <th rowSpan={2}>단어 수</th>
                                <th className="no-underline" colSpan={3}>중복 구간</th>
                                <th rowSpan={2}>유사도</th>
                                <th rowSpan={2}>중첩률</th>
                                <th rowSpan={2}>중복성 지수</th>
                            </tr>
                            <tr>
                                <th>개수</th>
                                <th>완전일치</th>
                                <th style={{ borderRight: "1px inset #d3d3d3" }}>부분일치</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>3,412</td>
                                <td>598</td>
                                <td>12</td>
                                <td>7 (58.3%)</td>
                                <td>5 (41.7%)</td>
                                <td>82.35</td>
                                <td>76.89</td>
                                <td>79.62</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 이미지 중복 결과 */}
                <div>
                    <h3 className="text-[13px] font-bold text-[#454545] flex items-center gap-2 mb-2 h-[30px]">
                        <span className="w-1 h-1 bg-[#454545] rounded-full inline-block"></span>
                        이미지 중복 결과
                    </h3>
                    <div className="pms-table-container">
                        <table className="pms-table">
                            <thead>
                            <tr>
                                <th rowSpan={2}>문서 내 이미지 수</th>
                                <th className="no-underline" colSpan={4}>유의 중복 이미지</th>
                                <th rowSpan={2}>문서간 이미지 중첩률</th>
                                <th rowSpan={2}>유의 수준</th>
                            </tr>
                            <tr>
                                <th>이미지 개수</th>
                                <th>중복 지수</th>
                                <th>중첩률 지수</th>
                                <th style={{ borderRight: "1px inset #d3d3d3" }}>유의 수준</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>24</td>
                                <td>9</td>
                                <td>93.5%</td>
                                <td>88.2%</td>
                                <td>
                                    <div className="flex items-center justify-center gap-1">
                                        <div className="w-2 h-2 bg-[#f86f6f] rounded-full"></div>
                                        <span>높음</span>
                                    </div>
                                </td>
                                <td>79.45</td>
                                <td>
                                    <div className="flex items-center justify-center gap-1">
                                        <div className="w-2 h-2 bg-[#f86f6f] rounded-full"></div>
                                        <span>높음</span>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <OutputCriteriaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default DetailSummary;
