// src/components/CTASection.jsx
import React from 'react';

// 通用的 CTA（Call to Action）组件：包含标题、描述、行动按钮
const CTASection = ({ title, subtitle, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink }) => {
  // 可自定义样式（内联/外部CSS都可以，这里用内联简化）
  const styles = {
    container: {
      padding: '4rem 2rem',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      margin: '2rem 0',
    },
    title: {
      fontSize: '2rem',
      color: '#212529',
      marginBottom: '1rem',
    },
    desc: {
      fontSize: '1.1rem',
      color: '#6c757d',
      marginBottom: '2rem',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    button: {
      padding: '0.8rem 2rem',
      fontSize: '1rem',
      backgroundColor: '#0d6efd',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      marginRight: '1rem',
      marginBottom: '0.5rem',
    },
    secondaryButton: {
      padding: '0.8rem 2rem',
      fontSize: '1rem',
      backgroundColor: 'transparent',
      color: '#0d6efd',
      border: '1px solid #0d6efd',
      borderRadius: '4px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      marginBottom: '0.5rem',
    },
    buttonHover: {
      backgroundColor: '#0b5ed7',
    },
    secondaryButtonHover: {
      backgroundColor: '#0d6efd',
      color: 'white',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title || "企业版专属服务"}</h2>
      <p style={styles.desc}>
        {subtitle || "定制化解决方案，7×24小时技术支持，助力企业高效发展"}
      </p>
      {/* 可替换为你的跳转链接（比如企业版详情页） */}
      {ctaText && ctaLink && (
        <a
          href={ctaLink}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          {ctaText}
        </a>
      )}
      
      {secondaryCtaText && secondaryCtaLink && (
        <a
          href={secondaryCtaLink}
          style={styles.secondaryButton}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = styles.secondaryButtonHover.backgroundColor;
            e.target.style.color = styles.secondaryButtonHover.color;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = styles.secondaryButton.backgroundColor;
            e.target.style.color = styles.secondaryButton.color;
          }}
        >
          {secondaryCtaText}
        </a>
      )}
    </div>
  );
};

// 重点：默认导出（适配最常用的导入方式）
export default CTASection;