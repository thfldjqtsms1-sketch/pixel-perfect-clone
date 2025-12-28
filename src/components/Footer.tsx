import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-border/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-display font-bold text-foreground">
                센트럴시티역
              </span>
              <span className="text-xl font-display font-bold text-primary ml-2">
                PRIME PARK
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              도시의 중심에서 누리는 프리미엄 라이프스타일.<br />
              1,912세대 대단지 랜드마크가 여러분을 기다립니다.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <span className="text-xs font-bold">K</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <span className="text-xs font-bold">F</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <span className="text-xs font-bold">I</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-display font-semibold mb-6">사업안내</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/planning" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  사업개요
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  입지환경
                </Link>
              </li>
              <li>
                <Link to="/premium" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  프리미엄
                </Link>
              </li>
              <li>
                <Link to="/complex" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  단지안내
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-foreground font-display font-semibold mb-6">분양안내</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/sales" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  분양일정
                </Link>
              </li>
              <li>
                <Link to="/units" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  평형안내
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  관심고객등록
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  홍보영상
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-display font-semibold mb-6">연락처</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">031.427.1912</p>
                  <p className="text-muted-foreground text-xs">평일 09:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">
                    경기도 의왕시 고천동 123-45
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">
                    info@primepark.co.kr
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs">
              © 2025 센트럴시티역 PRIME PARK. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
                이용약관
              </a>
            </div>
          </div>
          <p className="text-muted-foreground/60 text-xs mt-4 text-center md:text-left">
            ※ 상기 이미지는 소비자의 이해를 돕기 위해 제작된 것으로, 실제와 차이가 날 수 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
};
