import "./globals.css";

export const metadata = {
    title: "창업 진흥원 이미지 중복도 검사 조회",
    description: "창업 진흥원 이미지 중복도 검사 조회 팝업 화면",
};

export default function RootLayout({children}) {
    return (
        <html lang="ko">
        <body>
        {children}
        </body>
        </html>
    );
}
