import { Layout } from '@/components/Layout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import buildingNight from '@/assets/building-night.jpg';
import landscapeBg from '@/assets/landscape-bg.jpg';
import communityFitness from '@/assets/community-fitness.jpg';
import communityCafe from '@/assets/community-cafe.jpg';

const Complex = () => {
  return (
    <Layout>
      <PageHero
        title="COMPLEX"
        subtitle="센트럴시티역 PRIME PARK 단지설계"
        backgroundImage={buildingNight}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest mb-4">LANDMARK ARCHITECTURE</p>
            <h2 className="section-title text-foreground">
              <span className="text-primary">40층</span> 스카이라인의 위엄
            </h2>
            <p className="section-subtitle mx-auto mt-6">
              밤이 되면 더욱 아름다운 빛으로 시선을 사로잡는 옥탑디자인은
              프리미엄 단지의 아이덴티티 및 랜드마크적 상징성을 부각합니다
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: buildingNight, title: '스카이라인 크라운', desc: '프리미엄 단지의 상징적 디자인' },
              { image: landscapeBg, title: '남향위주 배치', desc: '넓은 동간거리와 300m 통경축' },
              { image: communityFitness, title: '피트니스 센터', desc: '최고급 운동시설 완비' },
              { image: communityCafe, title: '주민 카페', desc: '이웃과 소통하는 휴게공간' },
              { image: landscapeBg, title: '조경 정원', desc: '사계절 꽃과 나무의 향연' },
              { image: buildingNight, title: '주출입구 문주', desc: '고급스러운 첫인상' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="card-luxury overflow-hidden group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Complex;
