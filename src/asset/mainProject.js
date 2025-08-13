{
  projects: [
    {
      id: 1,
      title: "Puppy Party!",
      sub_title: "쇼핑몰 프로젝트",
      img: "${process.env.PUBLIC_URL}/images/puppyparty.png",

      // 프로젝트 목적
      purpose:
        "‘Puppy Party!’는 ‘Puppy(퍼피)’와 ‘Party(파티)’의 합성어로, 반려견과의 특별한 하루를 선물하고자 하는 의미의 쇼핑몰입니다. \n반려견의 생일이나 이벤트 등을 위한 소품·간식·의류 등 ‘기념일’에 초점을 맞춘 파티 전용 상품을 판매합니다.",

      // 제작에 사용된 스킬
      skills: [
        "React/Router",
        "SCSS",
        "Git/GitHub",
        "Figma",
        "GSAP",
        "PhotoShop",
      ],

      // 프로젝트 개요
      overview: {
        ui_design: "Figma를 이용한 디자인 시스템 구축 후 코드 구현",
        layout: "Flex를 기반으로 카드 형태의 레이아웃 제작",
        libraries: ["react-slick", "swiper", "react-icons"],
        period: {
          start: "2025-07-07",
          end: "2025-07-11",
          days: 5,
        },
        team: {
          team_size: 4,
          contribution_rate_percent: 60,
          notes: [
            "Data Json 및 장바구니 페이지 기능 구현과 상세페이지 제작을 주도적으로 수행",
            "반응형 디자인 및 문서작업을 팀원과 함께 진행",
          ],
        },
        deployment: "GitHub",
      },
    },
    {
      id: 2,
      title: "Tower Pick",
      sub_title: "주차장 관리 프로젝트",
      img: "${process.env.PUBLIC_URL}/images/towerpick.png",
      purpose:
        "‘TowerPick(타워픽)’은 복잡한 도심 속 주차 문제를 해결하기 위해 개발된 ‘도심형 주차타워 전용’ 예약 서비스 앱 플랫폼입니다. 언제 어디서나 접속 가능한 모바일 앱 형태로 사용자는 주차가 필요한 순간 즉시 확인하고 예약할 수 있는 실시간성과 편리함을 누릴 수 있습니다.",
      skills: [
        "React/Router",
        "SCSS",
        "Supabase",
        "Git/GitHub",
        "Figma",
        "PhotoShop",
      ],
      overview: {
        ui_design: "Figma를 이용한 디자인 시스템 구축 후 코드 구현",
        layout: "Grid를 기반으로 카드 형태의 레이아웃 제작",
        libraries: ["react-icons"],
        period: {
          start: "2025-07-21",
          end: "2025-08-01",
          days: 10,
        },
        team: {
          team_size: 6,
          contribution_rate_percent: 80,
          notes: [
            "전체 UI 설계 및 레이아웃 구성과 중복되는 스타일 컴포넌트 제작을 주도적으로 수행",
            "일반권 및 정기권 시스템 기능 구현과 반응형 디자인을 팀원과 함께 진행",
            "팀원과 Cross Check 및 QA 진행하여 코드 수정 후 배포",
          ],
        },
        deployment: "GitHub",
      },
    },
    {
      id: 3,
      title: "말의 끝, 너의 시작",
      sub_title: "끝말잇기 게임",
      img: "${process.env.PUBLIC_URL}/images/wordgame.png",
      purpose:
        "‘끝말잇기 게임’은 단어의 끝 글자를 기준으로 사용자와 AI가 번갈아가며 새로운 단어를 제시하는 끝말잇기 게임 모바일 전용 웹입니다.",
      skills: ["React", "SCSS", "Git/GitHub", "Figma"],
      overview: {
        ui_design: "Figma를 이용한 디자인 시스템 구축 후 코드 구현",
        layout:
          "StartScreen / GameScreen 화면 분리의 기능별 책임 분산 및 상태 흐름이 명확한 레이아웃 제작",
        libraries: [],
        period: {
          start: "2025-05-22",
          end: "2025-05-23",
          days: 2,
        },
        team: {
          team_size: 1,
          contribution_rate_percent: 100,
          notes: [],
        },
        deployment: "GitHub",
      },
    },
    {
      id: 4,
      title: "Greenvia",
      sub_title: "스마트 농업 서비스 소개 웹",
      img: "${process.env.PUBLIC_URL}/images/greenvia.png",
      purpose:
        "‘Greenvia’는 스마트 농업 솔루션 브랜드로, 농가 대상의 서비스 소개 및 신청을 목적으로 제작된 반응형 웹사이트입니다. HTML과 SCSS를 기반으로 기획, 디자인, 퍼블리싱을 모두 직접 수행한 프로젝트입니다.",
      skills: ["HTML5", "CSS3", "SCSS", "Git/GitHub", "Figma", "PhotoShop"],
      overview: {
        ui_design: "Figma를 이용한 디자인 시스템 구축 후 코드 구현",
        layout: "Flex 및 Grid 기반의 반응형 레이아웃 제작",
        libraries: [],
        period: {
          start: "2025-05-01",
          end: "2025-05-02",
          days: 2,
        },
        team: {
          team_size: 1,
          contribution_rate_percent: 100,
          notes: [],
        },
        deployment: "GitHub",
      },
    },
    {
      id: 5,
      title: "혼잡도 마스터",
      sub_title: "지하철 혼잡도 UX 디자인",
      img: "${process.env.PUBLIC_URL}/images/figmaplan.png",
      purpose:
        "‘지하철 혼잡도 마스터’는 지하철 혼잡도를 시각적으로 확인하고, 원하는 시간대에 혼잡도를 미리 알림 받을 수 있도록 설계한 모바일 UX 프로토타입 디자인 프로젝트입니다.",
      skills: ["Figma", "PhotoShop"],
      overview: {
        ui_design: "디자인 시스템 기반의 컴포넌트 단위 설계",
        layout: "Auto Layout을 활용한 프레임 구성으로 반응형 레이아웃 설계",
        libraries: [],
        period: {
          start: "2025-04-07",
          end: "2025-04-09",
          days: 3,
        },
        team: {
          team_size: 1,
          contribution_rate_percent: 100,
          notes: [],
        },
        deployment: "",
      },
    },
  ];
}
