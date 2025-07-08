
import React, { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';

const translations = {
  en: {
    header: "Common Sense Document Services",
    tagline: "Powered by AI + Experience",
    intro: "Affordable help for everyday people. We combine smart AI tools with 15+ years of real legal experience to assist you with immigration and court paperwork — without the high cost of an attorney.",
    postPay: "✔️ You only pay after the service is completed. No upfront fees.",
    contactHeader: "Contact Us",
    contactNote: "Have a question or ready to get started? Fill out the form below or reach out directly.",
    phone: "Phone: 425-584-8159",
    email: "Email: commonsensedocs@gmail.com",
    disclaimer: "We are not attorneys and do not provide legal advice. We are a document preparation service assisting with forms based on the information you provide. If you need legal advice, please consult a licensed attorney.",
    contactSuccess: "Your message has been sent. We'll get back to you shortly.",
    send: "Send Message",
    name: "Your Name",
    yourEmail: "Your Email",
    message: "Your Message"
  },
  es: {
    header: "Servicios de Documentos Sentido Común",
    tagline: "Impulsado por IA + Experiencia",
    intro: "Ayuda asequible para personas comunes. Combinamos herramientas de inteligencia artificial con más de 15 años de experiencia legal para ayudarle con inmigración y documentos judiciales — sin el alto costo de un abogado.",
    postPay: "✔️ Solo paga después de completar el servicio. Sin tarifas por adelantado.",
    contactHeader: "Contáctenos",
    contactNote: "¿Tiene preguntas o listo para comenzar? Complete el formulario o contáctenos directamente.",
    phone: "Teléfono: 425-584-8159",
    email: "Correo electrónico: commonsensedocs@gmail.com",
    disclaimer: "No somos abogados y no ofrecemos asesoramiento legal. Somos un servicio de preparación de documentos que lo ayuda con formularios según la información que usted proporciona. Si necesita asesoramiento legal, consulte con un abogado licenciado.",
    contactSuccess: "Su mensaje ha sido enviado. Le responderemos pronto.",
    send: "Enviar Mensaje",
    name: "Su Nombre",
    yourEmail: "Su Correo Electrónico",
    message: "Su Mensaje"
  },
  ko: {
    header: "상식적인 문서 서비스",
    tagline: "AI + 경험 기반 서비스",
    intro: "일반 사람들을 위한 저렴한 지원. 우리는 AI 도구와 15년 이상의 실제 법률 경험을 결합하여 이민 및 법원 서류를 도와드립니다 — 변호사 비용 없이.",
    postPay: "✔️ 서비스가 완료된 후에만 지불합니다. 선불 없음.",
    contactHeader: "문의하기",
    contactNote: "질문이 있거나 시작할 준비가 되셨나요? 아래 양식을 작성하거나 직접 연락주세요.",
    phone: "전화: 425-584-8159",
    email: "이메일: commonsensedocs@gmail.com",
    disclaimer: "우리는 변호사가 아니며 법률 자문을 제공하지 않습니다. 우리는 귀하가 제공한 정보를 바탕으로 서류 작성을 도와드리는 서비스입니다. 법률 자문이 필요하신 경우, 자격을 갖춘 변호사에게 문의하십시오.",
    contactSuccess: "메시지가 성공적으로 전송되었습니다. 곧 연락드리겠습니다.",
    send: "메시지 보내기",
    name: "이름",
    yourEmail: "이메일",
    message: "메시지"
  }
};

function App() {
  const [lang, setLang] = useState('en');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const t = translations[lang];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_fkdxuls', 'template_292vxqb', form, 'pDCwJnfvzrjOHWqJq')
      .then(() => setSent(true))
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('There was a problem sending your message. Please try again later.');
      });
  };

  return (
    <div className="min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad')" }}>
      <div className="bg-black bg-opacity-60 min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">{t.header}</h1>
            <select value={lang} onChange={(e) => setLang(e.target.value)} className="text-black rounded p-1">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="ko">한국어</option>
            </select>
          </div>
          <h2 className="text-xl mb-4">{t.tagline}</h2>
          <p className="mb-4">{t.intro}</p>
          <p className="mb-6 text-green-300 font-semibold">{t.postPay}</p>

          <div className="bg-white text-black p-4 rounded mb-6">
            <h3 className="text-lg font-semibold mb-2">Example Pricing (Affordable & Transparent)</h3>
            <ul className="list-disc ml-6">
              <li><strong>Citizenship Application (N-400)</strong> – $200 to $250 depending on complexity</li>
              <li><strong>Divorce Papers (No Children)</strong> – $250</li>
              <li><strong>Divorce with Child Support</strong> – $300</li>
              <li><strong>Small Claims Court Filing Assistance</strong> – $50</li>
              <li><strong>Name Change</strong> – $50</li>
              <li><strong>Green Card – Family-Based (I-485)</strong> – $400 + $50 per additional family member</li>
            </ul>
            <p className="mt-2 text-green-600 font-semibold">We offer some of the most affordable document services available — with no upfront payment required.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">{t.contactHeader}</h3>
            <p className="mb-4">{t.contactNote}</p>
            <p className="mb-2">{t.phone}</p>
            <p className="mb-4">{t.email}</p>
            {sent ? (
              <p className="text-green-400">{t.contactSuccess}</p>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white text-black p-4 rounded space-y-4">
                <input name="name" placeholder={t.name} value={form.name} onChange={handleChange} required className="w-full p-2 border rounded" />
                <input name="email" type="email" placeholder={t.yourEmail} value={form.email} onChange={handleChange} required className="w-full p-2 border rounded" />
                <textarea name="message" placeholder={t.message} value={form.message} onChange={handleChange} required className="w-full p-2 border rounded h-32"></textarea>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{t.send}</button>
              </form>
            )}
          </div>

          <p className="text-sm mt-6">{t.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
