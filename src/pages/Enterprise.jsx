import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import { FaWarehouse, FaTruck, FaCog, FaShieldAlt } from 'react-icons/fa';

export default function Enterprise() {
  return (
    <>
      <HeroSection
        title="辰龙OS · 企业智能硬件解决方案"
        subtitle="为仓储、物流、体育等行业提供高效、可靠、低成本的智能终端操作系统。"
        ctaText="申请免费试点"
        ctaLink="/contact"
        secondaryCtaText="下载解决方案白皮书"
        secondaryCtaLink="/docs/enterprise-whitepaper.pdf"
        backgroundImage="/images/enterprise-hero.jpg"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">企业核心痛点 · 辰龙OS一站式解决</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={FaWarehouse}
              title="仓储自动化"
              description="自动捡货、盘点、路径优化，降低人工成本30%以上。"
              ctaText="查看详情"
              ctaLink="#warehouse"
            />
            <FeatureCard
              icon={FaTruck}
              title="物流智能化"
              description="无人配送、货物追踪、智能调度，提升配送效率25%。"
              ctaText="了解更多"
              ctaLink="#logistics"
            />
            <FeatureCard
              icon={FaCog}
              title="设备管理"
              description="远程监控、故障预警、OTA升级，减少 downtime 80%。"
              ctaText="查看功能"
              ctaLink="#device-management"
            />
            <FeatureCard
              icon={FaShieldAlt}
              title="数据安全"
              description="本地数据存储、加密传输、权限管控，符合等保2.0要求。"
              ctaText="安全白皮书"
              ctaLink="/docs/security-whitepaper.pdf"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">企业应用场景</h2>

          {/* 仓储物流场景 */}
          <div id="warehouse" className="mb-16 scroll-mt-24">
            <h3 className="text-2xl font-bold mb-6 text-primary">仓储物流场景</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="/images/warehouse-robot.jpg" 
                  alt="仓储机器人" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h4 className="text-xl font-semibold mb-4">核心功能</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    自主导航：基于SLAM算法，无需预先铺设导轨
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    货物识别：支持条形码、二维码、视觉识别
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    路径优化：动态避开障碍物，规划最优路线
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    低功耗设计：一次充电可工作8小时以上
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/contact?scene=warehouse" className="btn-primary">申请仓储场景试点</a>
                </div>
              </div>
            </div>
          </div>

          {/* 体育智能场景 */}
          <div id="sports" className="scroll-mt-24">
            <h3 className="text-2xl font-bold mb-6 text-primary">体育智能场景</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="/images/sports-robot.jpg" 
                  alt="体育智能设备" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h4 className="text-xl font-semibold mb-4">核心功能</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    球类识别：支持网球、乒乓球、羽毛球等多种球类
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    自动拾取：高效收集散落球类，提升训练效率
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    自主归位：完成拾取后自动返回指定位置
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    静音设计：低噪音运行，不干扰训练环境
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/contact?scene=sports" className="btn-primary">申请体育场景试点</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="解锁企业智能化潜力"
        subtitle="辰龙OS帮你降低研发成本，快速实现设备智能化升级。"
        ctaText="免费技术咨询"
        ctaLink="/contact"
        secondaryCtaText="下载行业解决方案"
        secondaryCtaLink="/docs/enterprise-solutions.pdf"
      />
    </>
  );
}