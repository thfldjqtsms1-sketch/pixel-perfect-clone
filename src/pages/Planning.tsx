import { Layout } from '@/components/Layout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import heroBg from '@/assets/hero-bg.jpg';

const Planning = () => {
  return (
    <Layout>
      <PageHero
        title="PLANNING"
        subtitle="센트럴시티역 PRIME PARK 사업안내"
        backgroundImage={heroBg}
      />

      {/* Overview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest mb-4">PROJECT OVERVIEW</p>
            <h2 className="section-title text-foreground">
              <span className="text-primary">프리미엄</span> 대단지의 시작
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="card-luxury p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="border-b border-border/50 pb-4">
                      <p className="text-muted-foreground text-sm mb-1">사업명</p>
                      <p className="text-foreground font-medium">센트럴시티역 PRIME PARK</p>
                    </div>
                    <div className="border-b border-border/50 pb-4">
                      <p className="text-muted-foreground text-sm mb-1">사업위치</p>
                      <p className="text-foreground font-medium">경기도 의왕시 고천동 일원</p>
                    </div>
                    <div className="border-b border-border/50 pb-4">
                      <p className="text-muted-foreground text-sm mb-1">대지면적</p>
                      <p className="text-foreground font-medium">67,890.12㎡</p>
                    </div>
                    <div className="border-b border-border/50 pb-4">
                      <p className="text-muted-foreground text-sm mb-1">건축면적</p>
                      <p className="text-foreground font-medium">8,765.43㎡</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="border-b border-border/50 pb-4">
                      <p className="text-muted-foreground text-sm mb-1">연면적</p>
                      <p className="text-foreground font-medium">345,678.90㎡</p>
                    </div>
                    <div className="border-b border-border/50 pb-4">
                      <p className="text-muted-foreground text-sm mb-1">규모</p>
                      <p className="text-foreground font-medium">지하 3층 ~ 지상 40층, 15개동</p>
                    </div>
                    <div className="border-b border-border/50 pb-4">
                      <p className="text-muted-foreground text-sm mb-1">세대수</p>
                      <p className="text-foreground font-medium">총 1,912세대</p>
                    </div>
                    <div className="border-b border-border/50 pb-4">
                      <p className="text-muted-foreground text-sm mb-1">입주예정</p>
                      <p className="text-foreground font-medium">2028년 12월 예정</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Type Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest mb-4">UNIT TYPE</p>
            <h2 className="section-title text-foreground">
              다양한 <span className="text-primary">평형 구성</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { type: '59A', area: '59.9㎡', count: '456세대' },
              { type: '74B', area: '74.8㎡', count: '512세대' },
              { type: '84A', area: '84.9㎡', count: '623세대' },
              { type: '99C', area: '99.2㎡', count: '321세대' },
            ].map((unit, index) => (
              <AnimatedSection key={unit.type} delay={index * 0.1}>
                <div className="card-luxury p-6 text-center hover:border-primary/50 transition-colors">
                  <p className="text-3xl font-display font-bold text-primary mb-2">
                    {unit.type}
                  </p>
                  <p className="text-foreground font-medium mb-1">{unit.area}</p>
                  <p className="text-muted-foreground text-sm">{unit.count}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="card-luxury p-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  유의사항
                </h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">※</span>
                    상기 이미지는 소비자의 이해를 돕기 위해 제작된 것으로, 실제와 차이가 날 수 있습니다.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">※</span>
                    상기 내용은 인허가 과정에서 변경될 수 있으며, 자세한 사항은 견본주택에서 확인하시기 바랍니다.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">※</span>
                    본 분양광고는 2025년 11월 기준으로 작성되었으며, 추후 변경될 수 있습니다.
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Planning;
