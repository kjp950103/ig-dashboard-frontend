# FEURA Instagram Real-time Dashboard

FEURA의 인스타그램 실시간 대시보드 시스템

## 🚀 프로젝트 개요

- **실시간 대시보드**: FEURA 계정 지표를 실시간으로 모니터링
- **경쟁사 추적**: 20개 이상의 경쟁사 인스타그램 계정 자동 추적
- **자동 업데이트**: 매시간 자동 업데이트 (node-cron)
- **데이터 시각화**: 직관적인 차트 및 테이블
- **아카이브**: 과거 데이터 조회

## 📊 대시보드 탭

### 실시간 대시보드
- FEURA 계정 지표 (팔로워, 참여율, 도달율, 노출수)
- 상위 10개 경쟁사 정보

### 아카이브
- FEURA 최근 게시물 분석
- 상위 경쟁사 게시물 분석

## 🛠️ 기술 스택

### Frontend
- HTML5 & CSS3 (Tailwind CSS)
- Vanilla JavaScript
- Recharts (차트)

### Backend
- Node.js + Express
- Supabase PostgreSQL
- Web Scraping (Axios + Cheerio)

### Deployment
- **Frontend**: GitHub Pages
- **Backend**: Render

## 📦 로컬 실행

```bash
# 1. 파일 설치
npm install

# 2. 개발 서버 실행
npm start

# 3. http://localhost:3000 접속
```

## 🔗 API 엔드포인트

### Backend (Render)

- `GET /api/instagram/metrics` - FEURA 계정 지표
- `GET /api/instagram/competitors` - 경쟁사 정보

## 📝 환경 변수

Backend `.env` 파일:
```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
NODE_ENV=production
PORT=3000
```

## 🔄 자동 업데이트 스케줄

- **시간**: 매시간 0분 (정각)
- **형식**: node-cron `0 * * * *`
- **처리**: 5개 경쟁사씩 배치 처리

## 👥 팀 정보

- **회사**: 에고이즘
- **부서**: 퓌라팀
- **담당**: 퍼포먼스 마케팅 & 인하우스 마케팅

## 📄 라이선스

MIT License

## 🎯 주요 기능

✅ 실시간 메트릭 수집
✅ 경쟁사 자동 추적
✅ 성능 비교 분석
✅ 역사 데이터 조회
✅ 반응형 디자인
