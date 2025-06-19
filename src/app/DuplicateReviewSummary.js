'use client';

import React, {useState} from 'react';
import {ChevronDown, X, Play} from 'lucide-react';
import HalfCircleDot from "@/app/HalfCircleDot";

const DuplicateReviewSummary = ({isOpen, onClose}) => {
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    if (!isOpen) return null;

    return (
        <>
            {/* 배경 오버레이 */}
            <div
                className="fixed inset-0"
                onClick={onClose}
            />

            {/* 팝업 모달 */}
            <div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[1080px] max-w-[95vw] max-h-[90vh] overflow-hidden bg-white rounded-sm shadow-2xl">
                {/* Header */}
                <div className="bg-[#62687e] h-[25px] flex items-center justify-between px-1">
                    <div className="flex items-center gap-1.5 ml-1">
                        <div className="relative w-2 h-2">
                            <div className="w-2 h-2 bg-[#17d0cb] rounded-full"></div>
                            <div className="w-1 h-1 bg-[#62687e] rounded-full absolute top-0.5 left-0.5"></div>
                        </div>
                        <span className="text-white text-[10px] font-bold">중복도 검토 상세 조회 팝업</span>
                    </div>
                    <button onClick={onClose} className="w-4 h-4 hover:bg-white/10 rounded cursor-pointer">
                    <X className="w-3 h-3 text-white"/>
                    </button>
                </div>

                {/* Main Content - 스크롤 가능 영역 */}
                <div className="overflow-y-auto px-6 max-h-[calc(90vh-25px-50px)] grow">
                    <div className="py-5 px-6">
                    {/* Title */}
                        <div className="text-center mb-6">
                            <p className="text-base font-light leading-relaxed">
                                대상 과제 : <strong className="font-bold">사업 계획서 제출 과제명 A</strong>(00000000) / 유사 과제 : <strong className="font-bold">사업 계획서 제출 과제명 B</strong>(00000001)
                            </p>
                            <p className="text-base font-light">
                                중복성 검토를 실행한 결과 최종 중복성 지수 <strong className="font-bold">00.00</strong>으로 해당 문서는 [<strong className="font-bold">유사한 과제</strong>] 입니다.
                            </p>
                        </div>

                        {/* 중복성 검토 결과 요약 섹션 */}
                        <div className="mb-8">
                            <div className="flex items-center mb-4 gap-3">
                                <div className="flex items-center gap-2">
                                    <HalfCircleDot />
                                    <h2 className="text-[13px] font-bold text-[#454545]">중복성 검토 결과 요약</h2>
                                </div>
                                <button
                                    onClick={() => setIsDetailOpen(!isDetailOpen)}
                                    className="flex items-center gap-2 px-2 py-1 border border-[#5788e5] rounded-sm bg-white hover:bg-gray-50  cursor-pointer"
                                >
                                    <span className="text-xs font-bold text-[#3b72db]">자세히 보기</span>
                                    <ChevronDown
                                        className={`w-3 h-3 text-[#3b72db] transition-transform ${isDetailOpen ? 'rotate-180' : ''}`}/>
                                </button>
                            </div>

                            {/* 회색 배경 컨테이너 */}
                            {!isDetailOpen && (<div className="bg-[#f3f3f3] rounded py-2 px-4">
                                {/* 과제 상세 정보 */}
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-[13px] font-bold text-[#454545]">과제 상세 정보</h3>
                                            <button
                                                className="px-[8px] py-[6px] bg-white border border-[#afb2c3] rounded-sm hover:bg-gray-50 flex items-center justify-center cursor-pointer">
                                                <span className="text-xs font-bold text-[#333333]">산출 기준 확인</span>
                                            </button>
                                        </div>

                                        {/* 테이블 */}
                                        <table className="w-full bg-white border-collapse">
                                            <thead>
                                            <tr className="border border-[#9599a6]">
                                                <th className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">구분</th>
                                                <th className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">과제
                                                    번호
                                                </th>
                                                <th className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">과제
                                                    명
                                                </th>
                                                <th className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">사업
                                                    분류
                                                </th>
                                                <th className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">사업
                                                    연도
                                                </th>
                                                <th className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">대표자
                                                    명
                                                </th>
                                                <th className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">기관
                                                    명
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">대상
                                                    과제
                                                </td>
                                                <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">00</td>
                                                <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">사업
                                                    계획서 제출 과제 명 A
                                                </td>
                                                <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">창업
                                                    도약 패키지
                                                </td>
                                                <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">2025</td>
                                                <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">홍길동</td>
                                                <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">(주)
                                                    홍길동
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">유사
                                                    과제
                                                </td>
                                                <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">00</td>
                                                <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">사업
                                                    계획서 제출 과제 명 B
                                                </td>
                                                <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">예비
                                                    창업 패키지
                                                </td>
                                                <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">2024</td>
                                                <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">이순신</td>
                                                <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">예비
                                                    창업자
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* 텍스트 중복 결과 */}
                                    <div className="mb-4">
                                        <h3 className="text-[13px] font-bold text-[#454545] mb-3">텍스트 중복 결과</h3>
                                        <div className="overflow-x-auto">
                                            <table className="w-full bg-white border-collapse">
                                                <thead>
                                                <tr className="border border-[#9599a6]">
                                                    <th rowSpan={2}
                                                        className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">글자
                                                        수
                                                    </th>
                                                    <th rowSpan={2}
                                                        className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">단어
                                                        수
                                                    </th>
                                                    <th colSpan={3}
                                                        className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">중복
                                                        구간
                                                    </th>
                                                    <th rowSpan={2}
                                                        className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">유사도
                                                    </th>
                                                    <th rowSpan={2}
                                                        className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">중첩률
                                                    </th>
                                                    <th rowSpan={2}
                                                        className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">중복성
                                                        지수
                                                    </th>
                                                </tr>
                                                <tr className="border border-[#9599a6]">
                                                    <th className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">개수</th>
                                                    <th className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">완전일치</th>
                                                    <th className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41] bg-white">부분일치</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">00</td>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">00</td>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">000</td>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">000(00%)</td>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">000(00%)</td>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">00.00</td>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">00.00</td>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">00.00</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* 이미지 중복 결과 */}
                                    <div>
                                        <h3 className="text-[13px] font-bold text-[#454545] mb-3">이미지 중복 결과</h3>
                                        <div className="overflow-x-auto">
                                            <table className="w-full bg-white border-collapse">
                                                <thead>
                                                <tr className="border border-[#9599a6]">
                                                    <th rowSpan={2}
                                                        className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#434c59] bg-white">문서
                                                        내 이미지 수
                                                    </th>
                                                    <th colSpan={4}
                                                        className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#434c59] bg-white">유의
                                                        중복 이미지
                                                    </th>
                                                    <th rowSpan={2}
                                                        className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#434c59] bg-white">문서간
                                                        이미지 중첩률
                                                    </th>
                                                    <th rowSpan={2}
                                                        className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#434c59] bg-white">유의
                                                        수준
                                                    </th>
                                                </tr>
                                                <tr className="border border-[#9599a6]">
                                                    <th className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#434c59] bg-white">이미지
                                                        개수
                                                    </th>
                                                    <th className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#434c59] bg-white">중복
                                                        지수
                                                    </th>
                                                    <th className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#434c59] bg-white">중첩률
                                                        지수
                                                    </th>
                                                    <th className="border border-[#d3d3d3] p-2 text-[10px] font-bold text-[#434c59] bg-white">유의
                                                        수준
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">00</td>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">000</td>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#374151] text-center">93.5%</td>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#374151] text-center">93.5%</td>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#374151] text-center">
                                                        <div className="flex items-center justify-center gap-1">
                                                            <div className="w-2 h-2 bg-[#f86f6f] rounded-full"></div>
                                                            <span>높음</span>
                                                        </div>
                                                    </td>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">00.00</td>
                                                    <td className="border border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">00.00</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 중복성 검토 결과 상세 조회 섹션 */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                                <HalfCircleDot />
                                <h2 className="text-[13px] font-bold text-[#454545]">중복성 검토 결과 상세 조회</h2>
                            </div>

                            <div className="relative">
                                {/* 탭 */}
                                <div className="flex">
                                    <button
                                        className="px-4 py-1 bg-white border border-[#d3d3d3] text-[9px] font-bold text-[#454545] cursor-pointer">
                                        텍스트
                                    </button>
                                    <button
                                        className="px-4 py-1 bg-[#eeeeee] border border-[#d3d3d3] text-[9px] font-bold text-[#454545] cursor-pointer">
                                        이미지
                                    </button>
                                </div>

                                {/* 상세 테이블 */}
                                <div className="border border-[#d3d3d3] bg-white">
                                    <table className="w-full border-collapse mb-4">
                                        <thead>
                                        <tr className="border-b border-[#9599a6]">
                                            <th className="border-r border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41]">번호</th>
                                            <th className="border-r border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41]">대상
                                                과제 구간
                                            </th>
                                            <th className="border-r border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41]">유사
                                                과제 구간
                                            </th>
                                            <th className="border-r border-[#d3d3d3] p-2 text-[10px] font-bold text-[#383d41]">종목
                                                구분
                                            </th>
                                            <th className="p-2 text-[10px] font-bold text-[#383d41]">확인</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="border-b border-[#d3d3d3]">
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">1</td>
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">송캠프
                                                운영 및 음원 제작 (인디 아티스트 발굴...
                                            </td>
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">송캠프
                                                운영 및 음원 제작 (인디 아티스트 발굴...
                                            </td>
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">부분
                                                일치
                                            </td>
                                            <td className="p-2 text-center">
                                                <button
                                                    className="w-3 h-3 border border-[#454545] rounded-sm flex items-center justify-center hover:bg-gray-100">
                                                    <Play className="w-2 h-2 text-[#454545]"/>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-[#d3d3d3] bg-[#fcf8e3]">
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">2</td>
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">공연
                                                실황 콘텐츠 제작 및 배포 (유튜브, SNS ...
                                            </td>
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">공연
                                                실황 콘텐츠 제작 및 배포 (유튜브, SNS ...
                                            </td>
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">완전
                                                일치
                                            </td>
                                            <td className="p-2 text-center">
                                                <button
                                                    className="w-3 h-3 border border-[#454545] rounded-sm flex items-center justify-center hover:bg-gray-100">
                                                    <Play className="w-2 h-2 text-[#454545]"/>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-[#d3d3d3]">
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">3</td>
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">음원
                                                유통 및 매칭 서비스 활성화 (AI 기반 추천...
                                            </td>
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">음원
                                                유통 및 매칭 서비스 활성화 (AI 기반 추천...
                                            </td>
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">부분
                                                일치
                                            </td>
                                            <td className="p-2 text-center">
                                                <button
                                                    className="w-3 h-3 border border-[#454545] rounded-sm flex items-center justify-center hover:bg-gray-100">
                                                    <Play className="w-2 h-2 text-[#454545]"/>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-[#d3d3d3]">
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">4</td>
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">창작자
                                                수익 모델 다각화 (광고 음악, OST 프로...
                                            </td>
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">창작자
                                                수익 모델 다각화 (광고 음악, OST 프로...
                                            </td>
                                            <td className="border-r border-[#d3d3d3] p-2 text-[10px] text-[#454545] text-center">완전
                                                일치
                                            </td>
                                            <td className="p-2 text-center">
                                                <button
                                                    className="w-3 h-3 border border-[#454545] rounded-sm flex items-center justify-center hover:bg-gray-100">
                                                    <Play className="w-2 h-2 text-[#454545]"/>
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>

                                    {/* 이미지 영역 (예시) */}
                                    <div className="p-4 bg-gray-100 h-96 flex items-center justify-center">
                                        <span className="text-gray-500">이미지 상세 내용 영역</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 닫기 버튼 */}
                <div className="w-full h-[50px] flex items-center justify-center bg-white ">
                    <button
                        onClick={onClose}
                        className="px-[12px] py-[6px] bg-[#5a5a5a] border border-[#484848] rounded text-white text-[12px] font-bold hover:bg-[#6a6a6a] flex items-center justify-center cursor-pointer"
                    >
                        닫기
                    </button>
                </div>

                {/* 사이드 탭 - 유사 과제 목록 */}
                <div
                    className="absolute right-[20px] top-[93px] bg-[#5a5a5a] border border-[#484848] w-[26px] min-h-[110px] flex items-center justify-center cursor-pointer hover:bg-[#6a6a6a] z-10
             rounded-tl-md rounded-bl-md
             py-1 px-3.5"
                >
                    <div className="text-white text-[11px] font-bold writing-mode-vertical">
                        유<br/>사<br/>과<br/>제<br/>목<br/>록
                    </div>
                </div>
            </div>
        </>
    );
};

export default DuplicateReviewSummary;