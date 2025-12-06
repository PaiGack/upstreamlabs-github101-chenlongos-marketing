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
        subtitle="100%国产化操作系统，为企业、高校、开发者提供定制化解决方案。"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
              <SceneCard
                title="定制化服务"
                description="定制化服务场景将聚焦根据企业特定需求，提供硬件模块化组合、软件功能定制开发、专属场景算法优化及全流程技术支持，打造贴合企业实际应用的智能解决方案。"
                imageUrl="images/customization.jpg"
                link="/enterprise#customization"
              />
            </div>
          </div>

          {/* 高校用户卡片 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">高校用户</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <SceneCard
                title="操作系统教学"
                description="深入学习系统原理、进程调度、内存管理等核心概念，配套实验平台加深理解。"
                imageUrl="images/classroom2.jpg"
                link="/education"
              />
              <SceneCard
                title="嵌入式教学"
                description="学习嵌入式系统设计与开发实战技能。"
                imageUrl="images/classroom.jpg"
                link="/education"
              />
            </div>
          </div>

          {/* 开发者/社区用户卡片 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">开发者/社区用户</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <SceneCard
                title="SDK 与工具"
                description="支持 Python/Rust/C++ 多语言 SDK，图形化配置工具，降低开发门槛。"
                imageUrl="images/developer-sdk.jpg" // 新增图片路径（可复用现有图或补充开发工具类图片）
                link="/developer#sdk-tools"
              />
              <SceneCard
                title="示例项目库"
                description="AI 目标检测、电机控制、串口通信等即拿即用的开源项目，快速上手。"
                imageUrl="images/developer-examples.jpg" // 新增图片路径（示例代码/开发板场景图）
                link="/developer#examples"
              />
              <SceneCard
                title="技术交流社区"
                description="Discord 群实时答疑、GitHub 协作、技术博客分享，解决开发难题。"
                imageUrl="images/developer-community.jpg" // 新增图片路径（社区交流/线上讨论场景）
                link="/developer#community"
              />
              <SceneCard
                title="DIY 共创计划"
                description="提交创意项目，获取资金支持、硬件赞助，共建国产化生态。"
                imageUrl="images/developer-cocreate.jpg" // 新增图片路径（创客组装/项目展示场景）
                link="/developer#cocreate"
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