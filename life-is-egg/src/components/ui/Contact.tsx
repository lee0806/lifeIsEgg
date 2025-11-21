"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 폼 제출 로직
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "your.email@example.com",
      action: "mailto:your.email@example.com",
      primary: true,
    },
    {
      icon: "💼",
      title: "LinkedIn",
      description: "/in/yourprofile",
      action: "https://linkedin.com/in/yourprofile",
      primary: false,
    },
    {
      icon: "💻",
      title: "GitHub",
      description: "@yourusername",
      action: "https://github.com/yourusername",
      primary: false,
    },
    {
      icon: "📱",
      title: "Phone",
      description: "+82 10-0000-0000",
      action: "tel:+821000000000",
      primary: false,
    },
  ];

  return (
    <div className="relative z-60 w-full h-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black text-white mb-4 tracking-tight">
          CONTACT
        </h1>
        <p className="text-xl text-white/80 font-medium max-w-2xl leading-relaxed">
          새로운 프로젝트나 협업 기회에 대해 이야기해보세요.
        </p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">메시지 보내기</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white/90 font-medium mb-2">
                이름
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                placeholder="홍길동"
                required
              />
            </div>

            <div>
              <label className="block text-white/90 font-medium mb-2">
                이메일
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                placeholder="hello@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-white/90 font-medium mb-2">
                메시지
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 resize-none"
                placeholder="프로젝트에 대한 아이디어나 협업 제안을 자유롭게 작성해주세요."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white/20 hover:bg-white/30 border border-white/30 rounded-2xl text-white font-semibold transition-all duration-300 transform hover:scale-105"
            >
              메시지 전송
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Methods */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">연락처</h2>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 ${
                    method.primary
                      ? "bg-white/15 border border-white/30 hover:bg-white/20"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="text-3xl">{method.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold">{method.title}</h3>
                    <p className="text-white/70 text-sm">
                      {method.description}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <svg
                      className="w-5 h-5 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Availability Status */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              협업 가능 여부
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-500/20 border border-green-500/30 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-white font-medium">
                    새로운 프로젝트
                  </span>
                </div>
                <span className="text-green-300 text-sm font-semibold">
                  가능
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-white font-medium">컨설팅</span>
                </div>
                <span className="text-yellow-300 text-sm font-semibold">
                  제한적
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-500/20 border border-blue-500/30 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-medium">오픈소스</span>
                </div>
                <span className="text-blue-300 text-sm font-semibold">
                  언제나
                </span>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">응답 시간</h2>
            <p className="text-white/80 leading-relaxed">
              일반적으로{" "}
              <span className="text-white font-semibold">24시간 이내</span>에
              회신드리며, 긴급한 경우 이메일 제목에 [긴급]을 표시해주세요.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            함께 만들어가요
          </h3>
          <p className="text-white/80 mb-6 leading-relaxed">
            혁신적인 아이디어가 있거나 기술적인 도전을 함께하고 싶다면 언제든
            연락주세요. 작은 프로젝트부터 큰 비전까지, 모든 대화를 환영합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
