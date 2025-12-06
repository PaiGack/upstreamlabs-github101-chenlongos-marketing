import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import { FaCode, FaGithub, FaBook, FaDiscord, FaDownload, FaLightbulb, FaTerminal, FaQuestionCircle } from 'react-icons/fa';

export default function Developer() {
  return (
    <>
      <HeroSection
        title="辰龙OS · 开发者社区"
        subtitle="开源、易用、高效的嵌入式操作系统，欢迎一起共建生态。"
        ctaText="加入开发者群"
        ctaLink="https://discord.gg/chenlongos"
        secondaryCtaText="Star on GitHub"
        secondaryCtaLink="https://github.com/chenlongos"
        backgroundImage="/images/developer.jpg"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">开发者资源</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={FaCode}
              title="SDK 下载"
              description="获取辰龙OS 完整 SDK，支持 Python/Rust/C++ 开发。"
              ctaText="下载 SDK"
              ctaLink="/docs/sdk-download"
            />
            <FeatureCard
              icon={FaBook}
              title="API 文档"
              description="详细的 API 参考手册，快速上手系统功能。"
              ctaText="查看文档"
              ctaLink="/docs/api"
            />
            <FeatureCard
              icon={FaGithub}
              title="GitHub 仓库"
              description="访问官方 GitHub，查看源码、提交 PR、报告 Issues。"
              ctaText="前往 GitHub"
              ctaLink="https://github.com/chenlongos"
            />
            <FeatureCard
              icon={FaDiscord}
              title="技术交流群"
              description="加入 Discord 群，与开发者交流问题、分享经验。"
              ctaText="加入群聊"
              ctaLink="https://discord.gg/chenlongos"
            />
            <FeatureCard
              icon={FaDownload}
              title="示例项目"
              description="下载现成的示例代码，快速启动你的项目。"
              ctaText="浏览示例"
              ctaLink="/docs/examples"
            />
            <FeatureCard
              icon={FaLightbulb}
              title="共创计划"
              description="提交你的创意项目，有机会获得资金和技术支持。"
              ctaText="参与共创"
              ctaLink="/developer/co-creation"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">快速开始</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">1. 环境准备</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>
                    # 安装依赖（Ubuntu/Debian）
                    sudo apt update
                    sudo apt install -y build-essential cmake git python3-pip
                    pip3 install chenlongos-sdk
                  </code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">2. 创建第一个项目</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>
                    # 使用 CLI 工具创建项目
                    chenlongos create my-first-project
                    cd my-first-project

                    # 编译项目
                    mkdir build && cd build
                    cmake ..
                    make

                    # 运行（需连接硬件）
                    ./my-first-project
                  </code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">3. 查看示例代码</h3>
                <p>查看 <a href="/docs/examples" className="text-primary hover:underline">示例项目库</a>，包含：</p>
                <ul className="list-disc list-inside text-gray-600 pl-4 space-y-1">
                  <li>LED 控制</li>
                  <li>串口通信</li>
                  <li>YOLOv8 目标检测</li>
                  <li>电机控制</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">常见问题</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <FaQuestionCircle className="text-primary mr-2" />
                辰龙OS 支持哪些硬件平台？
              </h3>
              <p className="text-gray-600">目前已正式支持 RK3588、树莓派 4B/CM4、飞腾派 等平台。更多平台正在适配中，欢迎在 GitHub 提交需求。</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <FaQuestionCircle className="text-primary mr-2" />
                可以用 Python 开发吗？
              </h3>
              <p className="text-gray-600">可以！辰龙OS 提供完整的 Python SDK，支持大部分系统功能调用，适合快速原型开发。</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <FaQuestionCircle className="text-primary mr-2" />
                如何贡献代码？
              </h3>
              <p className="text-gray-600">Fork 官方仓库，创建 feature branch，提交 PR 即可。我们会在 3 个工作日内审核。</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="加入辰龙OS 开发者生态"
        subtitle="一起打造更强大、更易用的国产化嵌入式操作系统。"
        ctaText="Star on GitHub"
        ctaLink="https://github.com/chenlongos"
        secondaryCtaText="加入交流群"
        secondaryCtaLink="https://discord.gg/chenlongos"
      />
    </>
  );
}