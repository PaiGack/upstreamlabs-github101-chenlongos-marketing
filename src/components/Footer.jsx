import { Link } from 'react-router-dom';
import { FaGithub, FaDiscord, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-primary text-xl font-bold mb-4">辰龙OS</h3>
            <p className="text-gray-600 mb-4">100%国产化操作系统，让智能硬件开发更简单。</p>
            <div className="flex space-x-4">
              <a href="https://github.com/chenlongos" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                <FaGithub size={20} />
              </a>
              <a href="https://discord.gg/chenlongos" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                <FaDiscord size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">产品</h4>
            <ul className="space-y-2">
              <li><Link to="/enterprise" className="text-gray-600 hover:text-primary">企业解决方案</Link></li>
              <li><Link to="/education" className="text-gray-600 hover:text-primary">高校合作计划</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">开发者</h4>
            <ul className="space-y-2">
              <li><Link to="/developer" className="text-gray-600 hover:text-primary">开发者社区</Link></li>
              <li><Link to="/docs" className="text-gray-600 hover:text-primary">技术文档</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">资源</h4>
            <ul className="space-y-2">
              <li><a href="/docs" className="text-gray-600 hover:text-primary">API 参考</a></li>
              <li><a href="/docs/tutorials" className="text-gray-600 hover:text-primary">快速开始</a></li>
              <li><a href="/docs/examples" className="text-gray-600 hover:text-primary">示例项目</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-primary">技术博客</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">联系我们</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-gray-500" size={16} />
                <a href="mailto:contact@chenlongos.com" className="text-gray-600 hover:text-primary">contact@chenlongos.com</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-gray-500" size={16} />
                <span className="text-gray-600">400-123-4567</span>
              </li>
              <li className="text-gray-600">北京市海淀区中关村科技园区</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          © 2025 辰龙OS 版权所有 | 京ICP备12345678号
        </div>
      </div>
    </footer>
  );
}