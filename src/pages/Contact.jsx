import HeroSection from '../components/HeroSection';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    userType: 'enterprise',
    scene: 'warehouse',
    message: ''
  });

  useEffect(() => {
    // 从 URL 参数获取场景信息（如 /contact?scene=sports）
    const params = new URLSearchParams(window.location.search);
    const scene = params.get('scene');
    const userType = params.get('userType');
    if (scene) setFormData(prev => ({ ...prev, scene }));
    if (userType) setFormData(prev => ({ ...prev, userType }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑（如调用后端 API）
    alert('申请已提交！我们将在1-2个工作日内与你联系。');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      userType: 'enterprise',
      scene: 'warehouse',
      message: ''
    });
  };

  return (
    <>
      <HeroSection
        title="申请免费技术对接"
        subtitle="填写下方表单，我们将安排专业工程师为你提供1对1咨询服务。"
        backgroundImage="/images/contact-hero.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">联系人姓名</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">公司/机构名称</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">电子邮箱</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">联系电话</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="userType" className="block text-gray-700 font-medium mb-2">用户类型</label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  >
                    <option value="enterprise">企业用户</option>
                    <option value="education">高校用户</option>
                    <option value="developer">开发者/个人用户</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="scene" className="block text-gray-700 font-medium mb-2">感兴趣的场景/方向</label>
                  <select
                    id="scene"
                    name="scene"
                    value={formData.scene}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  >
                    <option value="warehouse">仓储物流</option>
                    <option value="sports">体育智能</option>
                    <option value="education">高校教学</option>
                    <option value="diy">DIY 共创</option>
                    <option value="other">其他</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">留言（可选）</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="请描述你的需求或疑问..."
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  id="agreement"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="agreement" className="ml-2 block text-sm text-gray-600">
                  我同意辰龙OS团队根据我的需求提供技术咨询服务，并已阅读和同意<a href="/privacy" className="text-primary hover:underline">隐私政策</a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-center py-3"
              >
                提交申请
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}