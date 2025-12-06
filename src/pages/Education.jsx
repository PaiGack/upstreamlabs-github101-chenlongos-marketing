import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import { FaGraduationCap, FaBook, FaLaptopCode, FaTrophy } from 'react-icons/fa';

export default function Education() {
  return (
    <>
      <HeroSection
        title="辰龙OS · 高校嵌入式教学解决方案"
        subtitle="为高校提供从硬件到软件的完整实训体系，培养创新型工程人才。"
        ctaText="申请免费试用套件"
        ctaLink="/contact"
        secondaryCtaText="下载教学大纲"
        secondaryCtaLink="/docs/education-syllabus.pdf"
        backgroundImage="images/classroom.jpg"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">高校教学痛点 · 辰龙OS解决方案</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={FaGraduationCap}
              title="课程体系适配"
              description="无缝对接嵌入式、AI、机器人等课程，提供配套教案与实验指导。"
              ctaText="查看课程方案"
              ctaLink="/education/curriculum"
            />
            <FeatureCard
              icon={FaBook}
              title="教学资源丰富"
              description="提供PPT课件、视频教程、习题集，减轻教师备课负担。"
              ctaText="下载资源包"
              ctaLink="/docs/education-resources.zip"
            />
            <FeatureCard
              icon={FaLaptopCode}
              title="实训套件低成本"
              description="国产化硬件，价格仅为进口产品的1/3，支持批量采购优惠。"
              ctaText="查看套件详情"
              ctaLink="/education/kit"
            />
            <FeatureCard
              icon={FaTrophy}
              title="竞赛支持"
              description="提供机器人竞赛、嵌入式设计大赛技术指导与奖品赞助。"
              ctaText="申请竞赛合作"
              ctaLink="/education/competition"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">辰龙OS 教学实训套件</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="images/classroom.jpg" 
                alt="高校实训场景" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-primary">套件包含</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold mb-2">硬件部分</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      RK3588 开发板 × 1
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      YOLOv8 视觉模块 × 1
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      电机驱动模块 × 1
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      传感器套件（红外、超声） × 1套
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      电源适配器、杜邦线等配件 × 1套
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">软件部分</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      辰龙OS 系统镜像 × 1
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      图形化配置工具 × 1
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      教学视频教程（20课时） × 1
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      实验指导书（含10个实验） × 1
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <a href="/contact?userType=education&scene=education" className="btn-primary">申请免费试用套件</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="赋能高校工程教育创新"
        subtitle="辰龙OS 帮助学生快速掌握嵌入式系统开发，提升就业竞争力。"
        ctaText="联系我们合作"
        ctaLink="/contact"
        secondaryCtaText="观看教学演示视频"
        secondaryCtaLink="https://youtu.be/dQw4w9WgXcQ"
      />
    </>
  );
}