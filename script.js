const tripDays = [
  {
    label: "Day 1",
    date: "09.04 (금)",
    title: "도착 & BFC 디너",
    timelineTitle: "도착일 + Meet the Bund BFC",
    summary: "PVG 도착 후 Fairmont에 체크인하고 와이탄과 락번드를 짧게 걸은 뒤 확정된 BFC 디너로 진입.",
    image: "assets/images/bund-night.jpg",
    imageAlt: "상하이 와이탄 야경",
    events: [
      { time: "12:35", title: "ICN 출발" },
      { time: "13:45", title: "PVG 도착" },
      { time: "14:30-15:30", title: "PVG -> Fairmont Peace Hotel" },
      { time: "15:30-16:10", title: "체크인, 짐 정리, 빠른 정비" },
      { time: "16:10-17:20", title: "와이탄 + 락번드 짧게 구경" },
      { time: "17:20-17:45", title: "정비 후 BFC 이동" },
      { time: "18:00-20:30", title: "Meet the Bund BFC 개인 디너" },
      { time: "20:30-22:30", title: "호텔 복귀 후 바 또는 가벼운 산책" }
    ]
  },
  {
    label: "Day 2",
    date: "09.05 (토)",
    title: "신천지 & 예원 & Phil",
    timelineTitle: "신천지 + 예원 + Phil",
    summary: "신천지 점심, 현대자동차 스튜디오, 예원 야간 방문 후 Phil과 디너와 술.",
    image: "assets/images/yuyuan-night.jpg",
    cardImage: "assets/images/xintiandi.jpg",
    imageAlt: "밤의 예원",
    events: [
      { time: "09:00-09:30", title: "간단 조식" },
      { time: "09:30-11:30", title: "신천지 산책 + 구경" },
      { time: "11:30-13:00", title: "龙凤荟 / 용봉회 점심" },
      { time: "13:00-14:15", title: "카페 휴식" },
      { time: "14:30-16:00", title: "현대자동차 스튜디오" },
      { time: "16:00-17:00", title: "호텔 잠깐 복귀 또는 추가 카페" },
      { time: "17:30-21:00", title: "예원 야간 방문" },
      { time: "21:00", title: "Phil 합류" },
      { time: "21:30-24:00", title: "Phil 디너 + 술" }
    ]
  },
  {
    label: "Day 3",
    date: "09.06 (일)",
    title: "푸동 하이라이트 & 마지막 밤",
    timelineTitle: "푸동 + 건담베이스 + 마지막 밤",
    summary: "루자쭈이와 건담베이스, 전망대 옵션을 거쳐 쭈이루에서 마지막 디너.",
    image: "assets/images/lujiazui-night.jpg",
    cardImage: "assets/images/gundam-shanghai.jpg",
    imageAlt: "루자쭈이 야경",
    events: [
      { time: "10:00-11:00", title: "조식" },
      { time: "11:00-11:30", title: "호텔 -> Lujiazui 이동" },
      { time: "11:30-13:00", title: "The Gundam Base Shanghai" },
      { time: "13:00-14:30", title: "Lujiazui 점심" },
      { time: "14:30-16:30", title: "Shanghai Tower 전망대 또는 호텔 휴식" },
      { time: "16:30-18:00", title: "호텔 복귀, 휴식" },
      { time: "18:30-21:00", title: "쭈이루 디너" },
      { time: "21:00-23:00", title: "마지막 바" }
    ]
  },
  {
    label: "Day 4",
    date: "09.07 (월)",
    title: "쇼핑 & 귀국",
    timelineTitle: "난징동로 + 귀국",
    summary: "조식과 가벼운 산책, 난징동로 마지막 쇼핑 후 PVG로 이동해 귀국.",
    image: "assets/images/nanjing-road-day.jpg",
    imageAlt: "낮의 난징동로",
    events: [
      { time: "09:00-10:30", title: "조식 + 가벼운 와이탄 산책" },
      { time: "10:30-12:00", title: "난징동로 마지막 쇼핑" },
      { time: "12:00-13:00", title: "체크아웃 + 짐 정리" },
      { time: "13:00-14:30", title: "PVG 이동" },
      { time: "14:30-16:50", title: "출국 절차 + 출발 대기" },
      { time: "16:50", title: "PVG 출발" },
      { time: "20:05", title: "ICN 도착" }
    ]
  }
];

const places = [
  {
    tag: "Day 1 · Walk",
    title: "와이탄 & 락번드",
    image: "assets/images/bund-night.jpg",
    alt: "상하이 와이탄 야경",
    size: "feature",
    meta: "도착일 첫 산책"
  },
  {
    tag: "Dinner · Fujian",
    title: "Meet the Bund",
    image: "assets/images/meet-the-bund-1.jpg",
    alt: "Meet the Bund 대표 요리",
    size: "feature",
    meta: "09.04 디너 예약 확정"
  },
  {
    tag: "Day 2 · Walk",
    title: "신천지",
    image: "assets/images/xintiandi.jpg",
    alt: "상하이 신천지 거리",
    meta: "오전 산책"
  },
  {
    tag: "Night · Visit",
    title: "예원 야경",
    image: "assets/images/yuyuan-night.jpg",
    alt: "예원 야경",
    meta: "저녁 방문"
  },
  {
    tag: "Day 3 · Skyline",
    title: "루자쭈이",
    image: "assets/images/lujiazui-night.jpg",
    alt: "루자쭈이 스카이라인",
    meta: "푸동 하이라이트"
  },
  {
    tag: "Lunch · Shanghai",
    title: "龙凤荟 / 용봉회",
    image: "assets/images/yongfenghui-dim-sum.jpg",
    alt: "용봉회 딤섬",
    meta: "09.05 점심 후보"
  },
  {
    tag: "Lunch · Cantonese",
    title: "용봉회 광동 요리",
    image: "assets/images/yongfenghui-dish.jpg",
    alt: "용봉회 광동식 새우 요리",
    meta: "메뉴 후보"
  },
  {
    tag: "Space · Shikumen",
    title: "용봉회 실내",
    image: "assets/images/yongfenghui-interior.jpg",
    alt: "용봉회 스쿠먼 식당 실내",
    meta: "신천지 다이닝룸"
  },
  {
    tag: "Stay · Classic",
    title: "Fairmont Peace Hotel",
    image: "assets/images/fairmont-peace.jpg",
    alt: "상하이 페어몬트 피스 호텔",
    meta: "와이탄 베이스"
  },
  {
    tag: "Dinner · Mood",
    title: "Meet the Bund 무드",
    image: "assets/images/meet-the-bund-10.jpg",
    alt: "Meet the Bund 빨간 벽과 조명",
    meta: "공간 분위기"
  },
  {
    tag: "Option · Pop culture",
    title: "The Gundam Base",
    image: "assets/images/gundam-shanghai.jpg",
    alt: "상하이 건담 조형물",
    meta: "Day 3 후보"
  },
  {
    tag: "View · Option",
    title: "Shanghai Tower",
    image: "assets/images/shanghai-tower-view.jpg",
    alt: "상하이 타워 전망",
    meta: "전망대 또는 휴식"
  },
  {
    tag: "Shopping · Walk",
    title: "난징동로",
    image: "assets/images/nanjing-road-day.jpg",
    alt: "낮의 난징동로",
    meta: "마지막 쇼핑"
  },
  {
    tag: "Dinner · Shanghai",
    title: "쭈이루",
    image: "assets/images/squirrel-fish.jpg",
    alt: "상하이식 생선 요리",
    meta: "09.06 디너 후보"
  },
  {
    tag: "Bar · Rooftop",
    title: "VUE Bar",
    image: "assets/images/rooftop-bar.jpg",
    alt: "상하이 루프탑 바 전망",
    meta: "Phil 합류 후 후보"
  },
  {
    tag: "Option · Street",
    title: "우캉루",
    image: "assets/images/wukang-road.jpg",
    alt: "상하이 우캉루 거리",
    meta: "여유 있을 때"
  },
  {
    tag: "Local · Bite",
    title: "상하이 로컬 면",
    image: "assets/images/shanghai-noodles.jpg",
    alt: "상하이식 면 요리",
    meta: "가벼운 식사 후보"
  }
];

const bookings = [
  {
    status: "예약 완료",
    statusClass: "confirmed",
    label: "Flights",
    title: "중국남방항공 왕복",
    image: "assets/images/flight-china-southern.jpg",
    alt: "중국남방항공 항공기",
    summary: "China Southern Airlines 이코노미 왕복 항공권.",
    details: [
      { label: "가는 편", value: "26.09.04 인천국제공항 -> 상하이푸동" },
      { label: "CZ314", value: "12:35 ICN -> 13:45 PVG · 2시간 10분" },
      { label: "오는 편", value: "26.09.07 상하이푸동 -> 인천국제공항" },
      { label: "CZ369", value: "16:50 PVG -> 20:05 ICN · 2시간 15분" }
    ]
  },
  {
    status: "예약 완료",
    statusClass: "confirmed",
    label: "Hotel",
    title: "Fairmont Peace Hotel",
    image: "assets/images/fairmont-peace.jpg",
    alt: "상하이 페어몬트 피스 호텔",
    summary: "와이탄과 난징동로를 바로 쓰는 이번 여행의 베이스.",
    details: [
      { label: "기간", value: "09.04 체크인 -> 09.07 체크아웃" },
      { label: "객실", value: "Deluxe King" },
      { label: "포함", value: "조식 포함 예약" }
    ]
  },
  {
    status: "예약 완료",
    statusClass: "confirmed",
    label: "Dining",
    title: "Meet the Bund BFC",
    image: "assets/images/meet-the-bund-1.jpg",
    alt: "Meet the Bund 대표 요리",
    summary: "첫날 저녁 18:00 BFC 지점 개인 디너 예약 확정.",
    details: [
      { label: "09.04 디너", value: "Meet the Bund BFC 18:00 예약 확정" },
      { label: "09.05 점심", value: "龙凤荟 / 용봉회, 11:30-12:00 목표" },
      { label: "09.06 디너", value: "쭈이루 예약 가능 여부 확인" }
    ]
  },
  {
    status: "확인 예정",
    statusClass: "pending",
    label: "Tickets & Bars",
    title: "추가 예약 체크",
    image: "assets/images/shanghai-bar.jpg",
    alt: "상하이 바 내부",
    summary: "현지 컨디션과 동선에 맞춰 확정할 입장권, 바, 합류 일정.",
    details: [
      { label: "09.05 밤", value: "Phil 합류 후 바/디너 장소 확정" },
      { label: "예원", value: "야간 입장권 사전 예매 가능 여부 확인" },
      { label: "푸동", value: "Shanghai Tower 전망대는 컨디션 따라 선택" }
    ]
  }
];

const timelineList = document.querySelector("#timelineList");
const bookingCards = document.querySelector("#bookingCards");
const placeGrid = document.querySelector("#placeGrid");
const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");
const pageAnchorLinks = document.querySelectorAll('.skip-link, .brand, .main-nav a[href^="#"]');

function renderEventList(events, maxItems = events.length) {
  return events
    .slice(0, maxItems)
    .map(
      (event) => `
        <li class="event-row">
          <time>${event.time}</time>
          <span>${event.title}</span>
        </li>
      `
    )
    .join("");
}

function renderTimeline() {
  timelineList.innerHTML = tripDays
    .map(
      (day) => `
        <article class="timeline-card">
          <figure class="timeline-image">
            <img src="${day.image}" alt="${day.imageAlt}">
          </figure>
          <div class="timeline-copy">
            <p class="timeline-kicker">${day.label} · ${day.date}</p>
            <h3>${day.timelineTitle}</h3>
            <ul class="event-list">
              ${renderEventList(day.events)}
            </ul>
          </div>
        </article>
      `
    )
    .join("");
}

function renderBookingCards() {
  bookingCards.innerHTML = bookings
    .map(
      (booking) => `
        <article class="booking-card booking-card--${booking.statusClass}">
          <figure class="booking-card-image">
            <img src="${booking.image}" alt="${booking.alt}">
            <span class="booking-status">${booking.status}</span>
          </figure>
          <div class="booking-card-body">
            <p class="booking-kicker">${booking.label}</p>
            <h3>${booking.title}</h3>
            <p class="booking-summary">${booking.summary}</p>
            <ul class="booking-detail-list">
              ${booking.details
                .map(
                  (detail) => `
                    <li>
                      <span>${detail.label}</span>
                      <strong>${detail.value}</strong>
                    </li>
                  `
                )
                .join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPlaces() {
  placeGrid.innerHTML = places
    .map(
      (place) => `
        <figure class="place-card place-card--${place.size || "standard"}">
          <img src="${place.image}" alt="${place.alt}">
          <figcaption>
            <span>${place.tag}</span>
            <strong>${place.title}</strong>
            ${place.meta ? `<em>${place.meta}</em>` : ""}
          </figcaption>
        </figure>
      `
    )
    .join("");
}

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

function closeMainNav() {
  mainNav.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

function getScrollOffset(hash) {
  if (hash === "#top") {
    return 0;
  }

  return window.matchMedia("(max-width: 960px)").matches ? 18 : 28;
}

function scrollToPageSection(hash) {
  const target = document.querySelector(hash);

  if (!target) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - getScrollOffset(hash);

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: prefersReducedMotion ? "auto" : "smooth"
  });

  window.history.pushState(null, "", hash);
}

pageAnchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");

    if (!hash || hash === "#") {
      return;
    }

    event.preventDefault();
    closeMainNav();
    scrollToPageSection(hash);
  });
});

renderTimeline();
renderBookingCards();
renderPlaces();
