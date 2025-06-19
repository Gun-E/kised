import React, {useState} from 'react';
import HalfCircleDot from "@/app/HalfCircleDot";
import OutputCriteriaModal from "@/app/OutputCriteriaModal";

const DetailSummary = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="bg-[#f3f3f3] rounded py-2 px-4">
                {/* 과제 상세 정보 */}
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <HalfCircleDot/>
                            <h3 className="text-[13px] font-bold text-[#454545]">과제 상세 정보</h3>
                        </div>
                        <button onClick={() => setIsModalOpen(true)}
                                className="px-[8px] py-[6px] bg-white border border-[#afb2c3] rounded-sm hover:bg-gray-50 flex items-center justify-center cursor-pointer">
                            <span className="text-xs font-bold text-[#333333]">산출 기준 확인</span>
                        </button>
                    </div>
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
                            <td>00</td>
                            <td>사업 계획서 제출 과제 명 A</td>
                            <td>창업 도약 패키지</td>
                            <td>2025</td>
                            <td>홍길동</td>
                            <td>(주) 홍길동</td>
                        </tr>
                        <tr>
                            <td>유사 과제</td>
                            <td>00</td>
                            <td>사업 계획서 제출 과제 명 B</td>
                            <td>예비 창업 패키지</td>
                            <td>2024</td>
                            <td>이순신</td>
                            <td>예비 창업자</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* 텍스트 중복 결과 */}
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <HalfCircleDot/>
                        <h3 className="text-[13px] font-bold text-[#454545]">텍스트 중복 결과</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="pms-table">
                            <thead>
                            <tr>
                                <th rowSpan={2}>글자 수</th>
                                <th rowSpan={2}>단어 수</th>
                                <th colSpan={3}>중복 구간</th>
                                <th rowSpan={2}>유사도</th>
                                <th rowSpan={2}>중첩률</th>
                                <th rowSpan={2}>중복성 지수</th>
                            </tr>
                            <tr>
                                <th>개수</th>
                                <th>완전일치</th>
                                <th>부분일치</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>00</td>
                                <td>00</td>
                                <td>000</td>
                                <td>000(00%)</td>
                                <td>000(00%)</td>
                                <td>00.00</td>
                                <td>00.00</td>
                                <td>00.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 이미지 중복 결과 */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <HalfCircleDot/>
                        <h3 className="text-[13px] font-bold text-[#454545]">이미지 중복 결과</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="pms-table">
                            <thead>
                            <tr>
                                <th rowSpan={2}>문서 내 이미지 수</th>
                                <th colSpan={4}>유의 중복 이미지</th>
                                <th rowSpan={2}>문서간 이미지 중첩률</th>
                                <th rowSpan={2}>유의 수준</th>
                            </tr>
                            <tr>
                                <th>이미지 개수</th>
                                <th>중복 지수</th>
                                <th>중첩률 지수</th>
                                <th>유의 수준</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>00</td>
                                <td>000</td>
                                <td>93.5%</td>
                                <td>93.5%</td>
                                <td>
                                    <div className="flex items-center justify-center gap-1">
                                        <div className="w-2 h-2 bg-[#f86f6f] rounded-full"></div>
                                        <span>높음</span>
                                    </div>
                                </td>
                                <td>00.00</td>
                                <td>00.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <OutputCriteriaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </>
    );
};

export default DetailSummary;
