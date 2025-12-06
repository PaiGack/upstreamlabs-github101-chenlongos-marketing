import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import SceneCard from '../components/SceneCard';
import CTASection from '../components/CTASection';
import { FaCogs, FaClock, FaPuzzlePiece, FaWarehouse, FaBaseballBall, FaGraduationCap, FaCode } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <HeroSection
        title="辰龙OS — 让智能硬件开发，像搭积木一样简单"
        subtitle="100%国产化嵌入式操作系统，为企业、高校、开发者提供定制化解决方案。"
        ctaText="申请免费技术对接"
        ctaLink="/contact"
        secondaryCtaText="查看技术文档"
        secondaryCtaLink="/docs"
        backgroundImage="images/hero-bg.jpg"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">为什么选择辰龙OS？</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FaCogs}
              title="低门槛"
              description="无需复杂编程，图形化配置工具，数小时即可完成硬件适配与功能调试。"
              ctaText="下载配置工具"
              ctaLink="/docs/tools"
            />
            <FeatureCard
              icon={FaClock}
              title="实时高可靠"
              description="自主研发内核，实时响应≤1ms，支持工业级稳定运行，适配复杂工况。"
              ctaText="查看技术规格"
              ctaLink="/docs/specs"
            />
            <FeatureCard
              icon={FaPuzzlePiece}
              title="全场景兼容"
              description="支持RK3588、树莓派等主流硬件，兼容YOLOv8等AI算法，灵活适配多行业需求。"
              ctaText="查看兼容列表"
              ctaLink="/docs/compatibility"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">辰龙OS · 服务三大用户群体</h2>
          
          {/* 企业用户卡片 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">企业用户</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SceneCard
                title="仓储物流"
                description="自动路径规划、货物识别、低功耗运行，提升仓储作业效率。"
                imageUrl="images/warehouse-robot.jpg"
                link="/enterprise#warehouse"
              />
              <SceneCard
                title="体育智能"
                description="精准识别、自动拾取、自主归位，解放人工劳动力。"
                imageUrl="images/sports-robot.jpg"
                link="/enterprise#sports"
              />
            </div>
          </div>

          {/* 高校用户卡片 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">高校用户</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              <SceneCard
                title="嵌入式教学"
                description="实训套件+课程资源+竞赛支持，助力学生从理论到实践。"
                imageUrl="images/classroom.jpg"
                link="/education"
              />
            </div>
          </div>

          {/* 开发者用户卡片 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">开发者/社区用户</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              <SceneCard
                title="DIY 共创"
                description="开源SDK、示例项目、技术交流群，一起打造创新应用。"
                imageUrl="images/developer.jpg"
                link="/developer"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="开启智能硬件开发新体验"
        subtitle="无论你是企业、高校还是创客，辰龙OS都能提供定制化解决方案。"
        ctaText="申请免费试用"
        ctaLink="/contact"
        secondaryCtaText="加入开发者社区"
        secondaryCtaLink="/developer"
      />
    </>
  );
}