import { Layout } from '@/components/Layout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { MapPin, Train, Building, GraduationCap, TreePine, ShoppingBag } from 'lucide-react';
import locationBg from '@/assets/location-bg.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const Location = () => {
  return (
    <Layout>
      <PageHero
        title="LOCATION"
        subtitle="센트럴시티역 PRIME PARK 입지환경"
        backgroundImage={locationBg}
      />

      {/* Central Location */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest mb-4">CENTRAL LOCATION</p>
            <h2 className="section-title text-foreground">
              도시의 <span className="text-primary">새로운 중심</span>에서
              <br />
              누리는 가장 앞선 삶
            </h2>
            <p className="section-subtitle mx-auto mt-6">
              교통과 생활, 자연이 완벽히 어우러진 도시.
              미래를 품은 주거의 가치가 지금, 당신의 일상이 됩니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Premium Features Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <AnimatedSection>
              <div
                className="relative h-80 rounded-lg overflow-hidden mb-6"
                style={{
                  backgroundImage: `url(${heroBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-background/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building className="w-16 h-16 text-primary" />
                </div>
              </div>
              <p className="text-primary font-medium tracking-widest mb-2">Vision.</p>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                1만여 세대 개발호재
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                고천동, 오전동 일대 재개발·재건축 추진<br />
                공공택지지구, 왕곡지구 등 개발진행<br />
                약 1만여 세대 신흥 주거타운으로 변모예정
              </p>
            </AnimatedSection>

            {/* Traffic */}
            <AnimatedSection delay={0.1}>
              <div
                className="relative h-80 rounded-lg overflow-hidden mb-6"
                style={{
                  backgroundImage: `url(${locationBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-background/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Train className="w-16 h-16 text-primary" />
                </div>
              </div>
              <p className="text-primary font-medium tracking-widest mb-2">Traffic.</p>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                시청역 초역세권
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                단지 앞 복선전철 시청역(공사중/가칭) 예정<br />
                GTX-C(예정), 월곶-판교선(공사중), 위례-과천선 연장 추진 중<br />
                봉담도시고속화도로 IC, 경수대로 등 편리한 교통망
              </p>
            </AnimatedSection>

            {/* Infra */}
            <AnimatedSection delay={0.2}>
              <div
                className="relative h-80 rounded-lg overflow-hidden mb-6 bg-navy-light"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 text-primary" />
                </div>
              </div>
              <p className="text-primary font-medium tracking-widest mb-2">Infra.</p>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                잘 갖춰진 생활인프라
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                대형마트, 각종 병·의원, 도서관 등 편의시설<br />
                역사공원(예정), 현충탑공원, 체육공원 등 자연환경<br />
                시청, 경찰서, 소방서, 우체국, 보건소 등 관공서
              </p>
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection delay={0.3}>
              <div
                className="relative h-80 rounded-lg overflow-hidden mb-6 bg-navy-light"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <GraduationCap className="w-16 h-16 text-primary" />
                </div>
              </div>
              <p className="text-primary font-medium tracking-widest mb-2">Education.</p>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                도보거리 초품아 학세권
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                단지 바로 앞에 초교(이전신설)가 위치한 초품아<br />
                중학교, 고등학교 등 도보거리 학세권<br />
                평촌학원가 접근성이 좋은 우수한 교육환경
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Nature */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest mb-4">NATURE</p>
            <h2 className="section-title text-foreground">
              자연과 함께하는 <span className="text-primary">힐링 라이프</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: TreePine, title: '백운호수', description: '아름다운 호수 산책로' },
              { icon: TreePine, title: '청계산', description: '등산과 하이킹의 명소' },
              { icon: MapPin, title: '왕송호수', description: '레일바이크와 자연공원' },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="card-luxury p-8 text-center hover:border-primary/50 transition-colors">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest mb-4">MAP</p>
            <h2 className="section-title text-foreground">위치안내</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="aspect-video bg-navy-light rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">경기도 의왕시 고천동 일원</p>
                <p className="text-muted-foreground text-sm mt-2">
                  센트럴시티역 PRIME PARK 현장
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Location;
