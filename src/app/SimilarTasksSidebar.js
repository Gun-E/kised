'use client';

import React, {useState} from 'react';
import CustomScrollbar from "@/app/CustomScrollbar";

const SimilarTasksSidebar = ({isOpen, onClose}) => {
    const [highlightedId, setHighlightedId] = useState(null);

    if (!isOpen) return null;

    // 샘플 데이터
    const taskData = [
        {
            id: 1,
            taskNum: "000001",
            category: "창업 도약 패키지",
            taskName: "도전! K-스타트업 2020 혁신창업리그 운영 및 초기 창업 기업 성장 지원 프로그램 공고",
            representative: "홍길동",
            textScore: "85.23",
            imageScore: "62.10",
            totalScore: "78.55"
        },
        {
            id: 2,
            taskNum: "000002",
            category: "예비 창업 패키지",
            taskName: "서울창조경제혁신센터 주관 2020년 예비 창업 패키지 지원 사업 공고 및 신청 안내",
            representative: "이순신",
            textScore: "92.50",
            imageScore: "78.90",
            totalScore: "89.15",
            highlighted: true
        },
        {
            id: 3,
            taskNum: "000003",
            category: "창업 도약 패키지",
            taskName: "K-스타트업 2020 운영기관 선정 및 혁신 창업 생태계 조성 사업 추진 계획",
            representative: "김철수",
            textScore: "78.15",
            imageScore: "55.30",
            totalScore: "71.20"
        },
        {
            id: 4,
            taskNum: "000004",
            category: "예비 창업 패키지",
            taskName: "2020년 도전! K-스타트업 예비창업리그 과제명 및 평가 기준 상세 안내",
            representative: "박영희",
            textScore: "88.70",
            imageScore: "70.20",
            totalScore: "82.45"
        },
        {
            id: 5,
            taskNum: "000005",
            category: "창업 도약 패키지",
            taskName: "도전! K-스타트업 2020 혁신창업리그 운영 및 참가 기업 모집 요강",
            representative: "최민수",
            textScore: "80.40",
            imageScore: "65.70",
            totalScore: "75.10"
        },
        {
            id: 6,
            taskNum: "000006",
            category: "예비 창업 패키지",
            taskName: "서울창조경제혁신센터 주관 2020년 예비 창업 패키지 참여 기업 최종 선정 결과",
            representative: "정지은",
            textScore: "95.10",
            imageScore: "82.50",
            totalScore: "91.00"
        },
        {
            id: 7,
            taskNum: "000007",
            category: "창업 도약 패키지",
            taskName: "K-스타트업 2020 운영기관의 역할과 책임 및 성과 관리 방안",
            representative: "강동원",
            textScore: "75.90",
            imageScore: "50.80",
            totalScore: "68.35"
        },
        {
            id: 8,
            taskNum: "000008",
            category: "예비 창업 패키지",
            taskName: "2020년 도전! K-스타트업 예비창업리그 우수 과제명 발표 및 시상 내역",
            representative: "윤아름",
            textScore: "90.00",
            imageScore: "75.60",
            totalScore: "85.80"
        },
        {
            id: 9,
            taskNum: "000009",
            category: "창업 도약 패키지",
            taskName: "도전! K-스타트업 2020 혁신창업리그 운영 성과 보고 및 향후 계획",
            representative: "조세호",
            textScore: "83.60",
            imageScore: "68.90",
            totalScore: "78.25"
        },
        {
            id: 10,
            taskNum: "000010",
            category: "예비 창업 패키지",
            taskName: "서울창조경제혁신센터 주관 2020년 예비 창업 패키지 교육 프로그램 안내",
            representative: "장미란",
            textScore: "91.80",
            imageScore: "77.30",
            totalScore: "87.05"
        },
        {
            id: 11,
            taskNum: "000011",
            category: "창업 도약 패키지",
            taskName: "2021년 K-스타트업 창업지원 사업 공고 및 유망 기술 기반 창업 기업 발굴",
            representative: "류준열",
            textScore: "87.00",
            imageScore: "60.00",
            totalScore: "79.00"
        },
        {
            id: 12,
            taskNum: "000012",
            category: "예비 창업 패키지",
            taskName: "K-스타트업 2021년 예비창업자 모집 및 아이디어 사업화 지원 프로그램",
            representative: "송혜교",
            textScore: "90.50",
            imageScore: "75.00",
            totalScore: "86.25"
        },
        {
            id: 13,
            taskNum: "000013",
            category: "창업 도약 패키지",
            taskName: "2022년 혁신창업리그 참가팀 모집 및 글로벌 시장 진출을 위한 도약 지원",
            representative: "이병헌",
            textScore: "81.00",
            imageScore: "58.00",
            totalScore: "74.50"
        },
        {
            id: 14,
            taskNum: "000014",
            category: "예비 창업 패키지",
            taskName: "서울창업허브 주관 2022년 예비창업 패키지 지원 사업 상세 요강",
            representative: "김태리",
            textScore: "89.00",
            imageScore: "72.00",
            totalScore: "84.50"
        },
        {
            id: 15,
            taskNum: "000015",
            category: "창업 도약 패키지",
            taskName: "K-스타트업 2023년 글로벌 도약 프로그램 선정 기업 및 해외 시장 개척 지원",
            representative: "하정우",
            textScore: "84.50",
            imageScore: "63.00",
            totalScore: "77.75"
        },
        {
            id: 16,
            taskNum: "000016",
            category: "예비 창업 패키지",
            taskName: "2023년 K-스타트업 예비창업자 지원 및 창업 초기 기업 성장 멘토링",
            representative: "수지",
            textScore: "91.00",
            imageScore: "78.00",
            totalScore: "88.00"
        },
        {
            id: 17,
            taskNum: "000017",
            category: "창업 도약 패키지",
            taskName: "혁신기술 창업기업 도약 지원사업 2024년 참여 기업 모집 및 사업화 자금 지원",
            representative: "박서준",
            textScore: "79.00",
            imageScore: "52.00",
            totalScore: "71.00"
        },
        {
            id: 18,
            taskNum: "000018",
            category: "예비 창업 패키지",
            taskName: "2024년 청년창업사관학교 예비창업 과정 운영 및 우수 아이디어 발굴",
            representative: "아이유",
            textScore: "93.00",
            imageScore: "80.00",
            totalScore: "89.00"
        },
        {
            id: 19,
            taskNum: "000019",
            category: "창업 도약 패키지",
            taskName: "K-스타트업 2024 재창업 지원 프로그램 및 실패 기업인의 성공적인 재기 지원",
            representative: "현빈",
            textScore: "82.00",
            imageScore: "59.00",
            totalScore: "75.50"
        },
        {
            id: 20,
            taskNum: "000020",
            category: "예비 창업 패키지",
            taskName: "2024년 K-스타트업 예비창업 교육 커리큘럼 및 창업 전문가 초청 강연",
            representative: "손예진",
            textScore: "90.00",
            imageScore: "74.00",
            totalScore: "86.00"
        },
        {
            id: 21,
            taskNum: "000021",
            category: "창업 도약 패키지",
            taskName: "2025년 K-스타트업 스케일업 지원 사업 공고 및 성장 단계별 맞춤형 지원",
            representative: "공유",
            textScore: "86.50",
            imageScore: "67.20",
            totalScore: "80.90"
        },
        {
            id: 22,
            taskNum: "000022",
            category: "예비 창업 패키지",
            taskName: "2025년 예비창업가를 위한 정부지원사업 안내 및 성공적인 사업화 전략",
            representative: "김고은",
            textScore: "94.00",
            imageScore: "81.50",
            totalScore: "90.25"
        },
        {
            id: 23,
            taskNum: "000023",
            category: "창업 도약 패키지",
            taskName: "K-스타트업 2025년 해외진출 지원 사업 참가 기업 모집 및 글로벌 액셀러레이팅",
            representative: "박보검",
            textScore: "80.20",
            imageScore: "56.80",
            totalScore: "73.50"
        },
        {
            id: 24,
            taskNum: "000024",
            category: "예비 창업 패키지",
            taskName: "서울시 2025년 청년 예비창업 지원 사업 공고 및 창업 공간 제공",
            representative: "김유정",
            textScore: "87.80",
            imageScore: "70.50",
            totalScore: "83.15"
        },
        {
            id: 25,
            taskNum: "000025",
            category: "창업 도약 패키지",
            taskName: "2026년 K-스타트업 TIPS 프로그램 참여 기업 선정 및 투자 연계 지원",
            representative: "변요한",
            textScore: "83.90",
            imageScore: "61.00",
            totalScore: "76.45"
        },
        {
            id: 26,
            taskNum: "000026",
            category: "예비 창업 패키지",
            taskName: "2026년 혁신 아이디어 예비창업 지원 사업 및 비즈니스 모델 고도화",
            representative: "이성경",
            textScore: "92.10",
            imageScore: "79.00",
            totalScore: "88.80"
        },
        {
            id: 27,
            taskNum: "000027",
            category: "창업 도약 패키지",
            taskName: "K-스타트업 2026년 재도전 기업 지원 프로그램 및 재창업 성공 사례 발표",
            representative: "조정석",
            textScore: "77.50",
            imageScore: "54.20",
            totalScore: "70.85"
        },
        {
            id: 28,
            taskNum: "000028",
            category: "예비 창업 패키지",
            taskName: "2026년 지역거점 예비창업 패키지 사업 및 지역 특화 창업 생태계 조성",
            representative: "거미",
            textScore: "89.50",
            imageScore: "73.00",
            totalScore: "85.75"
        },
        {
            id: 29,
            taskNum: "000029",
            category: "창업 도약 패키지",
            taskName: "2027년 K-스타트업 투자유치 지원 프로그램 및 데모데이 개최",
            representative: "김수현",
            textScore: "85.00",
            imageScore: "64.50",
            totalScore: "78.75"
        },
        {
            id: 30,
            taskNum: "000030",
            category: "예비 창업 패키지",
            taskName: "2027년 기술창업 예비창업 지원 사업 및 특허 출원 연계 컨설팅",
            representative: "서예지",
            textScore: "91.20",
            imageScore: "76.80",
            totalScore: "87.00"
        },
        {
            id: 31,
            taskNum: "000031",
            category: "창업 도약 패키지",
            taskName: "K-스타트업 2027년 ESG 경영 지원 사업 및 지속가능한 성장 모델 구축",
            representative: "정우성",
            textScore: "81.70",
            imageScore: "57.90",
            totalScore: "74.80"
        },
        {
            id: 32,
            taskNum: "000032",
            category: "예비 창업 패키지",
            taskName: "2027년 스마트팜 창업 예비창업 지원 사업 및 농업 기술 융합 아이디어",
            representative: "김하늘",
            textScore: "88.30",
            imageScore: "71.40",
            totalScore: "83.60"
        },
        {
            id: 33,
            taskNum: "000033",
            category: "창업 도약 패키지",
            taskName: "2028년 K-스타트업 디지털 전환 지원 사업 및 스마트 팩토리 구축 컨설팅",
            representative: "이정재",
            textScore: "84.10",
            imageScore: "62.30",
            totalScore: "77.50"
        },
        {
            id: 34,
            taskNum: "000034",
            category: "예비 창업 패키지",
            taskName: "2028년 소셜벤처 예비창업 육성 프로그램 및 사회적 가치 창출 모델 개발",
            representative: "전지현",
            textScore: "90.70",
            imageScore: "75.10",
            totalScore: "86.90"
        },
        {
            id: 35,
            taskNum: "000035",
            category: "창업 도약 패키지",
            taskName: "K-스타트업 2028년 지역 특화 산업 지원 사업 및 균형 발전 기여 방안",
            representative: "박정민",
            textScore: "79.80",
            imageScore: "55.50",
            totalScore: "72.65"
        },
        {
            id: 36,
            taskNum: "000036",
            category: "예비 창업 패키지",
            taskName: "2028년 관광 분야 예비창업 지원 사업 및 지역 문화 콘텐츠 개발 연계",
            representative: "고아성",
            textScore: "87.00",
            imageScore: "69.80",
            totalScore: "82.40"
        },
        {
            id: 37,
            taskNum: "000037",
            category: "창업 도약 패키지",
            taskName: "2029년 K-스타트업 수출 바우처 지원 사업 및 해외 마케팅 전략 수립",
            representative: "마동석",
            textScore: "82.50",
            imageScore: "60.10",
            totalScore: "76.30"
        },
        {
            id: 38,
            taskNum: "000038",
            category: "예비 창업 패키지",
            taskName: "2029년 콘텐츠 산업 예비창업 지원 사업 및 지식재산권 확보 전략",
            representative: "김혜수",
            textScore: "89.90",
            imageScore: "74.70",
            totalScore: "86.60"
        },
        {
            id: 39,
            taskNum: "000039",
            category: "창업 도약 패키지",
            taskName: "K-스타트업 2029년 일자리 창출 지원 사업 및 우수 인재 채용 지원금",
            representative: "송중기",
            textScore: "78.00",
            imageScore: "51.00",
            totalScore: "70.50"
        },
        {
            id: 40,
            taskNum: "000040",
            category: "예비 창업 패키지",
            taskName: "2029년 친환경 스타트업 예비창업 지원 사업 및 ESG 경영 도입 컨설팅",
            representative: "송가인",
            textScore: "90.30",
            imageScore: "76.50",
            totalScore: "87.90"
        }
    ];

    const handleRowClick = (id) => {
        setHighlightedId(id);
    };
    const headerTable = (
        <table className="pms-table">
            <thead>
            <tr className="bg-white">
                <th className="w-[50px]">번호</th>
                <th className="w-[85px]">비교 과제 번호</th>
                <th className="w-[130px]">사업 분류</th>
                <th className="w-auto">과제 명</th>
                <th className="w-[75px]">대표자 명</th>
                <th className="w-[75px] leading-tight"> {/* leading-tight 적용 */}
                    텍스트<br/>중복성 지수
                </th>
                <th className="w-[75px] leading-tight"> {/* leading-tight 적용 */}
                    이미지<br/>중복성 지수
                </th>
                <th className="w-[75px] leading-tight"> {/* leading-tight 적용 */}
                    종합<br/>중복성 지수
                </th>
            </tr>
            </thead>
        </table>
    );
    return (
        <>
            <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose}/>
            <div className="absolute right-[-2px] top-0 h-full w-[830px] bg-white z-50 shadow-2xl">
                <div className="h-full flex flex-col">
                    {/* 헤더 */}
                    <div className="py-3 px-3">
                        <div className="flex items-center justify-between">
                            <div className="text-[13px] text-black">
                                <strong className="text-bold">[조회 조건]</strong> 사업년도 : 전체&nbsp;&nbsp;&nbsp;상태 구분 :
                                전체&nbsp;&nbsp;&nbsp;검색결과건수 : 100&nbsp;&nbsp;&nbsp;중복성지수 : 50%
                            </div>
                            <button
                                onClick={onClose}
                                className="flex items-center gap-2 px-2 py-1.5 bg-white border border-[#D3D3D3] rounded-sm hover:bg-gray-50 cursor-pointer"
                            >
                                <span
                                    className="text-xs font-light text-[#333333] flex items-center group"> {/* 'group' 클래스 추가 */}
                                    <span
                                        className="underline-text relative cursor-pointer flex items-center"> {/* 밑줄을 위한 컨테이너 */}
                                        접어두기
                                        <span className="ml-1 inline-flex items-center"> {/* 아이콘 간격 및 정렬 */}
                                            <span
                                                className="w-1.5 h-1.5 border-t-[1px] border-r-[1px] border-[#333333] rotate-45 transform origin-center"></span> {/* > 모양 */}
                                            <span
                                                className="w-[1px] h-2 bg-[#333333] ml-[2px]"></span> {/* | 모양, 겹쳐서 간격 조절 */}
                                        </span>
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* 테이블 */}
                    <div className="flex-1 overflow-y-auto px-3 pb-2">
                        <CustomScrollbar
                            style={{maxHeight: "100%"}}
                            header={headerTable}
                        >
                            <table className="pms-table">

                                <tbody>
                                {taskData.map((task) => (
                                    <tr
                                        key={task.id}
                                        onClick={() => handleRowClick(task.id)}
                                        className={`
                                            cursor-pointer 
                                            hover:bg-blue-50 
                                            ${highlightedId === task.id ? "bg-[#fcf8e3]" : ""}
                                        `}
                                    >

                                        <td className="w-[50px]">{task.id}</td>
                                        <td className="w-[85px] underline">{task.taskNum}</td>
                                        <td className="w-[130px]">{task.category}</td>
                                        <td className="w-auto">{task.taskName}</td>
                                        <td className="w-[75px]">{task.representative}</td>
                                        <td className="w-[75px]">{task.textScore}</td>
                                        <td className="w-[75px]">{task.imageScore}</td>
                                        <td className="w-[75px]">{task.totalScore}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </CustomScrollbar>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SimilarTasksSidebar;