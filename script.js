const tripDays = [
  {
    label: "Day 1",
    date: "09.04 (금)",
    title: "도착 & 와이탄의 밤",
    timelineTitle: "도착일 + Meet the Bund",
    summary: "PVG 도착 후 Fairmont에 체크인하고 와이탄과 락번드를 걸은 뒤 첫날 밤 디너로 진입.",
    image: "assets/images/bund-night.jpg",
    imageAlt: "상하이 와이탄 야경",
    events: [
      { time: "12:35", title: "ICN 출발" },
      { time: "13:45", title: "PVG 도착" },
      { time: "14:30-15:30", title: "PVG -> Fairmont Peace Hotel" },
      { time: "15:30-16:10", title: "체크인, 짐 정리, 빠른 정비" },
      { time: "16:10-18:10", title: "와이탄 + 락번드 구경" },
      { time: "18:10-18:30", title: "식당 이동" },
      { time: "18:30-21:00", title: "Meet the Bund 디너" },
      { time: "21:00-22:30", title: "호텔 복귀 후 바 또는 가벼운 산책" }
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
    image: "assets/images/nanjing-road.jpg",
    imageAlt: "밤의 난징동로",
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
    tag: "Day 1",
    title: "와이탄 & 락번드",
    image: "assets/images/bund-night.jpg",
    alt: "상하이 와이탄 야경"
  },
  {
    tag: "Day 2",
    title: "신천지",
    image: "assets/images/xintiandi.jpg",
    alt: "상하이 신천지 거리"
  },
  {
    tag: "Night",
    title: "예원 야경",
    image: "assets/images/yuyuan-night.jpg",
    alt: "예원 야경"
  },
  {
    tag: "Day 3",
    title: "루자쭈이",
    image: "assets/images/lujiazui-night.jpg",
    alt: "루자쭈이 스카이라인"
  },
  {
    tag: "Dinner",
    title: "Meet the Bund",
    image: "assets/images/squirrel-fish.jpg",
    alt: "중식 생선 요리"
  },
  {
    tag: "Lunch",
    title: "龙凤荟 / 용봉회",
    image: "assets/images/shanghai-noodles.jpg",
    alt: "상하이식 면 요리"
  },
  {
    tag: "Option",
    title: "The Gundam Base",
    image: "assets/images/gundam-shanghai.jpg",
    alt: "상하이 건담 조형물"
  },
  {
    tag: "Bar",
    title: "VUE Bar",
    image: "assets/images/rooftop-bar.jpg",
    alt: "상하이 루프탑 바 전망"
  }
];

const timelineList = document.querySelector("#timelineList");
const itineraryCards = document.querySelector("#itineraryCards");
const placeGrid = document.querySelector("#placeGrid");
const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");

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

function renderItineraryCards() {
  itineraryCards.innerHTML = tripDays
    .map(
      (day) => `
        <article class="day-card">
          <img src="${day.cardImage || day.image}" alt="${day.imageAlt}">
          <div class="day-card-body">
            <p class="day-card-kicker">${day.label} · ${day.date}</p>
            <h3>${day.title}</h3>
            <ul class="card-event-list">
              ${renderEventList(day.events)}
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
        <figure class="place-card">
          <img src="${place.image}" alt="${place.alt}">
          <figcaption>
            <span>${place.tag}</span>
            <strong>${place.title}</strong>
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

mainNav.addEventListener("click", () => {
  mainNav.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
});

renderTimeline();
renderItineraryCards();
renderPlaces();
