# Shanghai 2609 Trip Page

상하이 여행 계획을 공유하기 위한 정적 웹페이지입니다.

- 원본 노트: Obsidian vault의 `2026-09-04 🇨🇳 상하이 여행 계획.md`
- 반영 범위: 일정, 장소, 동선, 준비 항목
- 제외 범위: 금액, 예약번호, 탑승객 이름 등 공유에 불필요한 민감 정보
- 디자인 방향: 붉은 여행 포스터형 히어로와 검은 배경의 세로 일정 타임라인

## 열기

`index.html`을 브라우저에서 열면 됩니다. 로컬 서버로 확인하려면:

```bash
python3 -m http.server 4174
```

그 다음 `http://localhost:4174`으로 접속하세요.

## Render 배포

Render Static Site 배포용 `render.yaml`이 포함되어 있습니다.

- Build Command: 비워 둠
- Publish Directory: `.`
- Branch: `main`

GitHub 저장소를 Render에서 Static Site 또는 Blueprint로 연결하면, `main` 브랜치에 push될 때마다 자동으로 최신 페이지가 배포됩니다.
