"use client";

import DuplicateReviewSummary from "@/app/DuplicateReviewSummary";
import React, { useState } from "react";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
                중복도 검토 결과 팝업 열기
            </button>

            <DuplicateReviewSummary
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
