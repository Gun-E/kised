import React from "react";
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import HalfCircleDot from "@/app/HalfCircleDot";

const OutputCriteriaModal = ({isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="bg-white w-[600px] max-h-[90vh] overflow-y-auto rounded shadow-lg relative">
                <div className="bg-[#62687e] h-[25px] flex items-center justify-between px-1">
                    <div className="flex items-center gap-1.5 ml-1">
                        <div className="relative w-2 h-2">
                            <div className="w-2 h-2 bg-[#17d0cb] rounded-full"></div>
                            <div className="w-1 h-1 bg-[#62687e] rounded-full absolute top-0.5 left-0.5"></div>
                        </div>
                        <span className="text-white text-[10px] font-bold">산출 기준 확인 팝업</span>
                    </div>
                    <button onClick={onClose}
                            className="flex items-center text-white justify-center w-4 h-4 cursor-pointer">
                        ✕
                    </button>
                </div>

                <div className="text-[12px] text-[#333] space-y-4 px-4 py-3">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <HalfCircleDot/>
                            <h2 className="text-[13px] font-bold text-[#454545]">최종 중복성 지수</h2>
                        </div>
                        <ul className="ml-4 list-disc list-inside text-[11px] space-y-1">
                            <li>
                                <InlineMath>{'\\text{최종 중복성 지수} = (\\text{텍스트 중복성 지수} \\times \\text{비교 대상 문서 텍스트 비율}) + (\\text{이미지 중복성 지수} \\times \\text{비교 문서 이미지 비율})'}</InlineMath>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full h-px bg-[#d3d3d3]"></div>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <HalfCircleDot/>
                            <h2 className="text-[13px] font-bold text-[#454545]">텍스트 중복</h2>
                        </div>
                        <p>점수 산출 일시 : <strong className="font-bold">2025-01-01 07:30:00</strong></p>
                        <p>점수 산출 기준 대상 과제 (00000000) 불용어 적용 일시 : <strong className="font-bold">2025-01-01
                            07:30:00</strong></p>
                        <p>점수 산출 기준 비교 과제 (00000001) 불용어 적용 일시 : <strong className="font-bold">2025-01-01
                            07:30:00</strong></p>
                        <p>구간 비교 기준 대상 과제 (00000000) 불용어 적용 일시 : <strong className="font-bold">2025-01-01
                            07:30:00</strong></p>
                        <p>구간 비교 기준 비교 과제 (00000001) 불용어 적용 일시 : <strong className="font-bold">2025-01-01
                            07:30:00</strong></p>
                        <div className="mt-3">
                            <div className="flex items-center gap-2 mb-2">
                                <HalfCircleDot/>
                                <h2 className="text-[13px] font-bold text-[#454545]">텍스트 중복률 계산기준</h2>
                            </div>
                            <ul className="ml-4 list-disc list-inside text-[11px] space-y-1">
                                <li>텍스트 유사도 산출 근거</li>
                                <ul className="list-[circle] ml-6">
                                    <li>문단의 작성된 텍스트를 탐색된 범위 값의 코사인 유사도</li>
                                </ul>
                                <li>단일 문장 중복률 산출 근거</li>
                                <ul className="list-[circle] ml-6">
                                    <li>문장의 작성된 텍스트를 기준 비교 문서와 동일한 텍스트의 수</li>
                                </ul>
                                <li>텍스트 중복성지수 산출 근거</li>
                                <ul className="list-[circle] ml-6">
                                    <li>
                                        <InlineMath>{'\\text{텍스트 중복성 지수} = (\\text{유사도} \\times 0.x) + (\\text{중첩률} \\times 0.x)'}</InlineMath>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full h-px bg-[#d3d3d3]"></div>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <HalfCircleDot/>
                            <h2 className="text-[13px] font-bold text-[#454545]">이미지 중복</h2>
                        </div>
                        <p>점수 산출 일시 : <strong className="font-bold">2025-01-01 07:30:00</strong></p>
                        <div className="mt-3">
                            <div className="flex items-center gap-2 mb-2">
                                <HalfCircleDot/>
                                <h2 className="text-[13px] font-bold text-[#454545]">이미지 중복률 계산기준</h2>
                            </div>
                            <ul className="ml-4 list-disc list-inside text-[11px] space-y-1">
                                <li>영역 가중치 : 페이지에서의 이미지 영역의 크기 비율</li>
                                <ul className="list-[circle] ml-6">
                                    <li><InlineMath math="\text{영역가중치} = \frac{\text{이미지 영역 크기}}{\text{전체 페이지 크기}}"/>
                                    </li>
                                </ul>
                                <li>중복 지수 : 대상 이미지의 특징 데이터와 유사과제 이미지의 특징 데이터의 비교 거리 (벡터 코사인 유사도)</li>
                                <ul className="list-[circle] ml-6">
                                    <li><InlineMath
                                        math="\text{중복지수} = \frac{\text{비교문서 이미지벡터} \cdot \text{대상문서 이미지벡터}}{\|\text{비교문서 이미지벡터}\| \cdot \|\text{대상문서 이미지벡터}\|}"/>
                                    </li>
                                </ul>
                                <li>중첩률 지수 : 중복영역 중첩지수 평균 값</li>
                                <ul className="list-[circle] ml-6">
                                    <li><InlineMath math="\text{중첩률지수} = \frac{\text{영역가중치} + \text{중복지수}}{2}"/></li>
                                </ul>
                                <li>유의 수준 : 높음, 낮음으로 표기 (70% 이상일경우 높음으로 설정-변경가능)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[50px] flex items-center justify-center bg-white">
                    <button onClick={onClose}
                            className="px-[12px] py-[6px] bg-[#5a5a5a] border border-[#484848] rounded text-white text-[12px] font-bold hover:bg-[#6a6a6a] flex items-center justify-center cursor-pointer">
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OutputCriteriaModal;
