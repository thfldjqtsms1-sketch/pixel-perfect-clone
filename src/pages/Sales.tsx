import { Layout } from '@/components/Layout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Sales = () => {
  const schedule = [
    { title: '그랜드 오픈', date: '2025.11.21(금)' },
    { title: '특별공급', date: '2025.12.01(월)' },
    { title: '1순위(해당)', date: '2025.12.02(화)' },
    { title: '1순위(기타)', date: '2025.12.03(수)' },
    { title: '2순위', date: '2025.12.04(목)' },
    { title: '당첨자발표', date: '2025.12.10(수)' },
    { title: '서류접수', date: '2025.12.13(토) - 12.20(토)' },
    { title: '정당계약', date: '2025.12.22(월) - 12.25(목)' },
  ];

  return (
    <Layout>
      <PageHero title="SALES" subtitle="센트럴시티역 PRIME PARK 분양안내" backgroundImage={heroBg} />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest mb-4">CALENDAR</p>
            <h2 className="section-title text-foreground">분양일정</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {schedule.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <div className="card-luxury p-6 text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="text-foreground font-medium mb-1">{item.title}</h4>
                  <p className="text-primary text-sm">{item.date}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="flex justify-center gap-4 mt-12">
            <a href="https://www.applyhome.co.kr" target="_blank" rel="noopener noreferrer" className="btn-gold">
              청약홈 바로가기 <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <Link to="/register" className="btn-outline-gold">관심고객 등록</Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Sales;
