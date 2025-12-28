import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import heroBg from '@/assets/hero-bg.jpg';

const Register = () => {
  const { toast } = useToast();
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast({ title: '오류', description: '개인정보 수집에 동의해주세요.', variant: 'destructive' });
      return;
    }
    toast({ title: '등록 완료', description: '관심고객 등록이 완료되었습니다. 담당자가 연락드리겠습니다.' });
  };

  return (
    <Layout>
      <PageHero title="REGISTER" subtitle="센트럴시티역 PRIME PARK 관심고객등록" backgroundImage={heroBg} />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-2xl">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="card-luxury p-8 md:p-12 space-y-6">
              <div>
                <label className="block text-foreground font-medium mb-2">이름 *</label>
                <Input placeholder="이름을 입력해주세요" required className="bg-secondary border-border" />
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">연락처 *</label>
                <Input placeholder="010-0000-0000" required className="bg-secondary border-border" />
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">관심 평형</label>
                <Input placeholder="예: 84㎡" className="bg-secondary border-border" />
              </div>
              <div className="flex items-start gap-3 pt-4 border-t border-border">
                <Checkbox id="agree" checked={agreed} onCheckedChange={(c) => setAgreed(!!c)} />
                <label htmlFor="agree" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  개인정보 수집 및 이용에 동의합니다. 수집된 정보는 분양 안내 목적으로만 사용되며, 분양 완료 후 파기됩니다.
                </label>
              </div>
              <Button type="submit" className="w-full btn-gold py-6 text-base">등록하기</Button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
