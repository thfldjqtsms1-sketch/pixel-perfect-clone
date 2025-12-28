import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, Train, Building, GraduationCap, Calendar } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import heroBg from '@/assets/hero-bg.jpg';
import buildingNight from '@/assets/building-night.jpg';
import locationBg from '@/assets/location-bg.jpg';
import landscapeBg from '@/assets/landscape-bg.jpg';
import communityFitness from '@/assets/community-fitness.jpg';
import communityCafe from '@/assets/community-cafe.jpg';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-primary font-medium tracking-widest mb-4">
              GRAND OPEN 2025.11.21
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 hero-text-shadow">
              도시의 중심에서
              <br />
              <span className="text-gradient-gold">1,912세대</span>의 빛나는 삶
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              센트럴시티역 PRIME PARK
              <br />
              도시, 작품이. 되다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn-gold">
                관심고객등록
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/sales" className="btn-outline-gold">
                분양일정 보기
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-card border-y border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1,912', label: '총 세대수', suffix: '세대' },
              { number: '40', label: '최고층', suffix: '층' },
              { number: '300', label: '통경축', suffix: 'm' },
              { number: '15', label: '동', suffix: '개동' },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {stat.number}
                  <span className="text-2xl ml-1">{stat.suffix}</span>
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest mb-4">CALENDAR</p>
            <h2 className="section-title text-foreground">
              센트럴시티역 PRIME PARK <span className="text-primary">분양일정</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { title: '그랜드 오픈', date: '2025.11.21(금)', icon: Calendar },
              { title: '특별공급', date: '2025.12.01(월)', icon: Calendar },
              { title: '1순위(해당)', date: '2025.12.02(화)', icon: Calendar },
              { title: '1순위(기타)', date: '2025.12.03(수)', icon: Calendar },
              { title: '2순위', date: '2025.12.04(목)', icon: Calendar },
              { title: '당첨자발표', date: '2025.12.10(수)', icon: Calendar },
              { title: '서류접수', date: '12.13~12.20', icon: Calendar },
              { title: '정당계약', date: '12.22~12.25', icon: Calendar },
            ].map((item, index) => (
              <AnimatedSection
                key={item.title}
                delay={index * 0.05}
                className="card-luxury p-4 text-center"
              >
                <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <h4 className="text-foreground font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-primary text-xs font-medium">{item.date}</p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="flex justify-center gap-4 mt-12">
            <Link to="/sales" className="btn-outline-gold text-sm">
              입주자 모집공고
            </Link>
            <a
              href="https://www.applyhome.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm"
            >
              청약홈 바로가기
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Location Premium */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest mb-4">LOCATION PREMIUM</p>
            <h2 className="section-title text-foreground mb-6">
              도시의 <span className="text-primary">새로운 중심</span>에서
              <br />
              누리는 가장 앞선 삶
            </h2>
            <p className="section-subtitle mx-auto">
              교통과 생활, 자연이 완벽히 어우러진 도시.
              미래를 품은 주거의 가치가 지금, 당신의 일상이 됩니다.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building,
                title: '1만여 세대 개발호재',
                subtitle: 'Vision',
                description: '재개발·재건축 추진으로 신흥 주거타운으로 변모 예정',
              },
              {
                icon: Train,
                title: '시청역 초역세권',
                subtitle: 'Traffic',
                description: 'GTX-C, 월곶-판교선 등 광역 교통망 접근성',
              },
              {
                icon: MapPin,
                title: '잘 갖춰진 생활인프라',
                subtitle: 'Infra',
                description: '대형마트, 병원, 도서관 등 편의시설 인접',
              },
              {
                icon: GraduationCap,
                title: '도보거리 초품아 학세권',
                subtitle: 'Education',
                description: '단지 앞 초교 신설 예정, 명문학군 인접',
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="card-luxury p-8 h-full hover:border-primary/50 transition-colors group">
                  <p className="text-primary text-sm font-medium mb-2">{item.subtitle}</p>
                  <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <Link to="/location" className="btn-outline-gold">
              입지환경 자세히 보기
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Landmark Architecture */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${buildingNight})` }}
        />
        <div className="absolute inset-0 bg-background/80" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="text-primary font-medium tracking-widest mb-4">LANDMARK ARCHITECTURE</p>
              <h2 className="section-title text-foreground mb-6">
                웅장한 스케일의
                <br />
                <span className="text-primary">40층 스카이라인</span>
              </h2>
              <p className="section-subtitle mb-8">
                볼수록 놀라움. 살수록 부러움.
                <br />
                도심의 편리함과 자연의 여유가 공존하는 도시, 이곳에서
                미래를 향한 프리미엄 라이프가 시작됩니다.
              </p>
              <Link to="/complex" className="btn-gold">
                단지설계 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Landscape Design */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest mb-4">LANDSCAPE DESIGN</p>
            <h2 className="section-title text-foreground">
              자연과 휴식이 <span className="text-primary">함께</span> 하는 단지
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                image: landscapeBg,
                title: '잔디광장',
                description: '너른 잔디마당과 팽나무 숲으로 이루어진 자연친화형 중앙광장',
              },
              {
                image: communityFitness,
                title: '피트니스',
                description: '쾌적한 공간에서 활력넘치는 일상을 누릴 수 있는 다이나믹한 운동공간',
              },
              {
                image: communityCafe,
                title: '주민카페',
                description: '편안하게 차 한잔을 마시며 이웃들과 교류할 수 있는 카페공간',
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="card-luxury overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Unit Plan CTA */}
      <section className="py-24 bg-card border-y border-border/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <p className="text-primary font-medium tracking-widest mb-4">UNIT PLAN</p>
            <h2 className="section-title text-foreground mb-8">
              센트럴시티역 PRIME PARK <span className="text-primary">평형안내</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/units" className="btn-outline-gold">
                평형안내 바로가기
              </Link>
              <Link to="/model-house" className="btn-outline-gold">
                E-모델하우스 바로가기
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-background/90" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-muted-foreground mb-4">도시에 없던 1,912개의 빛나는 삶</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-widest mb-8">
              THE CITY BECOMES A
              <br />
              <span className="text-primary">WORK OF ART</span>
            </h2>
            <p className="text-2xl font-display text-foreground/80 mb-10">
              도시, 작품이. 되다
            </p>
            <Link to="/register" className="btn-gold text-lg px-12 py-5">
              관심고객 등록하기
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
