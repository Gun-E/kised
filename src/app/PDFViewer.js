import React, { useState } from 'react';
import { Menu, RotateCcw, Download, Printer, MoreVertical, Plus, Minus } from 'lucide-react';

const PDFViewer = ({ width = '100%', height = '600px', imageSrc = null, fileName = 'Unnamed File' }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages] = useState(1);
    const [zoom, setZoom] = useState(100);

    return (
        <div className="pdf-viewer-container" style={{
            width,
            height,
            minWidth: '400px',
            backgroundColor: '#525659',
            fontFamily: 'Poppins, sans-serif',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Header */}
            <div className="header-controls" style={{
                width: '100%',
                height: '40px',
                backgroundColor: '#323639',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 8px',
                boxSizing: 'border-box',
                flexShrink: 0
            }}>
                {/* Left - File info */}
                <div className="menu-section" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    flex: '1',
                    justifyContent: 'flex-start'
                }}>
                    <div className="menu-icon" style={{
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}>
                        <Menu size={16} color="#ffffff" />
                    </div>
                    <div className="file-name" style={{
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: 600,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>
                        {fileName}
                    </div>
                </div>

                {/* Center - Page / Zoom */}
                <div className="document-controls" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    flexShrink: 0
                }}>
                    {/* Page control */}
                    <div className="page-controls" style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{
                            backgroundColor: '#191b1c',
                            height: '24px',
                            width: '28px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <input
                                type="text"
                                value={currentPage}
                                readOnly
                                style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    color: '#ffffff',
                                    fontSize: '11px',
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    width: '100%',
                                    outline: 'none'
                                }}
                            />

                        </div>
                        <div style={{
                            backgroundColor: '#323639',
                            height: '24px',
                            width: '35px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            fontSize: '11px',
                            fontWeight: 600,
                            borderRadius: '0 2px 2px 0'
                        }}>
                            /<span className="ml-2">{totalPages}</span>
                        </div>
                    </div>

                    {/* Zoom control */}
                    <div className="zoom-controls" style={{ display: 'flex', alignItems: 'center' }}>
                        <button style={zoomButtonStyle}><Minus size={12} color="#ffffff" /></button>
                        <div style={zoomDisplayStyle}>{zoom}%</div>
                        <button style={zoomButtonStyle}><Plus size={12} color="#ffffff" /></button>
                        <button style={iconButtonStyle}><RotateCcw size={14} color="#ffffff" /></button>
                    </div>
                </div>

                {/* Right - Actions */}
                <div className="action-buttons" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    flex: '1',
                    justifyContent: 'flex-end'
                }}>
                    <button style={iconButtonStyle}><Download size={14} color="#ffffff" /></button>
                    <button style={iconButtonStyle}><Printer size={14} color="#ffffff" /></button>
                    <button style={iconButtonStyle}><MoreVertical size={14} color="#ffffff" /></button>
                </div>
            </div>

            {/* Content */}
            <div className="pdf-content" style={{
                width: '100%',
                flex: '1',
                backgroundColor: '#525659',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                boxSizing: 'border-box',
                minHeight: '200px'
            }}>
                <div style={{
                    backgroundColor: '#ffffff',
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: `scale(${Math.min(zoom / 100, 1.5)})`,
                    transformOrigin: 'center',
                    transition: 'transform 0.2s ease',
                    overflow: 'hidden'
                }}>
                    {imageSrc ? (
                        <img
                            src={imageSrc}
                            alt="PDF Preview"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    ) : (
                        <div style={{ fontSize: '14px', color: '#666' }}>대상 과제 없음</div>
                    )}
                </div>
            </div>
        </div>
    );
};

// 🔧 재사용 가능한 스타일
const zoomButtonStyle = {
    backgroundColor: '#323639',
    border: 'none',
    height: '24px',
    width: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
};

const zoomDisplayStyle = {
    backgroundColor: '#191b1c',
    height: '24px',
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: '10px',
    fontWeight: 600
};

const iconButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default PDFViewer;
