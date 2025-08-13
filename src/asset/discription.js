{
  details: [
    {
      id: 1,
      title: "Puppy Party!",
      // 프로젝트 목표(오버뷰)
      overview: {
        sub_title: "OVERVIEW",
        goals: [
          "배너, 인기 상품, 누적 판매량 등 사용자 구매 유도를 위한 콘텐츠 구조 설계 및 시각적 효과 적용",
          "기기별(모바일·태블릿·데스크탑) 반응형 구성 및 컬러·정렬 기반의 사용자 맞춤형 화면 제공",
          "JSON 데이터 기반 구조 설계와 컴포넌트 재사용성을 고려하여 구현",
          "상품 옵션 선택, 수량 조절, 장바구니 담기 및 관리 등 구매 흐름 전반의 핵심 기능을 안정적으로 구현",
        ],
        roles: [
          "JSON 데이터 구현",
          "장바구니 페이지 및 관련 컴포넌트 개발",
          "파티 용품 카테고리 상세페이지 제작",
        ],
        features: ["장바구니 기능 80% 구현", "아이템 옵션 선택 기능 100% 구현"],
      },

      // 디자인 시스템
      design_system: {
        sub_title: "DESIGN SYSTEM",
        design_system_img:
          "${process.env.PUBLIC_URL}/images/puppyparty_designsystem.png",
      },

      // 유저 플로우
      user_flow: {
        sub_title: "USER FLOW",
        user_flow_img:
          "${process.env.PUBLIC_URL}/images/puppyparty_userflow.png",
      },

      // 반응형 디자인
      system_design: {
        sub_title: "반응형 디자인",
        system_design_img:
          "${process.env.PUBLIC_URL}/images/puppyparty_cart.png",
      },

      // 회고
      review: {
        sub_title: "회고",
        challenges: [
          {
            issue:
              "본 프로젝트를 진행하며 가장 어려웠던 점은 소스 병합과정이었습니다.",
            solution:
              "초기에는 각자 컴포넌트를 작업 후 병합하는 방식으로 진행하여 Git 충돌과 구조 혼란이 잦았습니다. \n이를 해결하기 위해 최상위 페이지는 마스터가 일괄 관리하고,개별 컴포넌트는 분담 작업하되, 수정과 병합의 우선 순위를 정하여수정 → 업로드 → 내려받기 → 이어 작업 흐름으로 협업 방식을 정리하면서 구조 혼란과 병합 오류를 줄일 수 있었습니다.",
          },
        ],
        refactoring_points: [
          "장바구니 페이지의 모든 로직과 UI가 한 컴포넌트에 집중되어 있어 코드가 복잡하고 유지보수가 어려웠습니다. \n이를 상품/결제 정보 영역으로 분리해 상위 컴포넌트에서 통합하는 구조로 리팩토링한다면 가독성과 유지보수성이 향샹될 것이라 생각합니다.",
        ],
      },
    },
    {
      id: 2,
      title: "Tower Pick",
      overview: {
        sub_title: "OVERVIEW",
        goals: [
          "직관적이고 일관성 있는 UI/UX와 실시간 잔여석 확인이 가능한 사용자 편의 기능을 구현",
          "React와 DB를 연결하는 구조를 활용한 기능을 구현",
          "컴포넌트 재사용성을 고려하여 구현",
        ],
        roles: [
          "조장 역할 수행",
          "전체 UI 설계 및 레이아웃 구성",
          "메인 페이지 설계",
          "스타일링을 통해 디자인 일관성과 재사용성 확보",
          "코드 취합 및 페이지 간 연결",
        ],
        features: [
          "일반권 및 정기권 시스템의 모든 기능 50% 구현 (2인 동시)",
          "예약 선택 박스 관련 컴포넌트 50% 구현 (2인 동시)",
        ],
      },
      design_system: {
        sub_title: "DESIGN SYSTEM",
        design_system_img:
          "${process.env.PUBLIC_URL}/images/towerpick_designsystem.png",
      },
      user_flow: {
        sub_title: "USER FLOW",
        user_flow_img:
          "${process.env.PUBLIC_URL}/images/towerpick_userflow.png",
      },
      system_design: {
        sub_title: "반응형 디자인",
        system_design_img:
          "${process.env.PUBLIC_URL}/images/towerpick_responsive.png",
      },
      review: {
        sub_title: "회고",
        challenges: [
          {
            issue:
              "본 프로젝트를 진행하며 가장 어려웠던 점은 DB 연결 작업이었습니다.",
            solution:
              "처음 DB를 활용한 협업 프로젝트에서 하나의 ID로 여러 작업자가 동시에 접근하면서 예약·취소 테스트 중 데이터 충돌 문제가 발생하였습니다. 이를 해결하기 위해 DB 데이터를 초기화하고, 작업자별 ID를 분리해 각기 다른 테스트 시나리오를 구성했으며, 중간중간 데이터를 점검 및 정리하여 안정적인 개발 환경을 유지할 수 있었습니다.",
          },
        ],
        refactoring_points: [
          "API 담당자의 DB로 개발부터 병합, 테스트까지 모두 진행하면서 ID 별도 생성과 데이터 중간 관리 같은 불필요한 작업이 추가되었습니다. 이를 개발용 DB와 API 담당자 DB를 분리하는 구조로 리팩토링한다면, 중간 단계에서 발생할 수 있는 데이터 누락이나 덮어쓰기 문제를 방지하고 보다 안정적인 협업 환경을 구축할 수 있을 것이라 생각합니다.",
        ],
      },
    },
    {
      id: 3,
      title: "말의 끝, 너의 시작",
      overview: {
        sub_title: "OVERVIEW",
        goals: [
          "단어 끝말잇기라는 친숙한 게임을 통해 React 상태 관리 및 이벤트 처리 연습",
          "‘Korean Open Dictionary API’를 활용하여 실제 존재하는 단어 기반의 끝말잇기 기능 구현",
          "단어 유효성 필터링(하이픈 제거, 글자 수 제한, 품사 필터링)을 통해 게임 규칙을 정교하게 구성",
        ],
        roles: [],
        features: [
          "사용자가 시작 단어를 입력하고 게임 시작",
          "단어 끝 글자를 기준으로 시작되는 단어만 입력 가능하도록 제한",
          "공백 또는 미입력, 잘못된 단어 시 알림창 안내",
          "입력된 시작 단어를 기준으로 Open API 호출하여 실제 존재하는 단어 기반 게임 진행",
          "AI 단어 응답을 위해 비동기 API 호출 및 로딩 메시지 출력",
        ],
      },
      design_system: {
        sub_title: "DESIGN SYSTEM",
        design_system_img:
          "${process.env.PUBLIC_URL}/images/endwordgame_designsystem.png",
      },
      user_flow: {
        sub_title: "USER FLOW",
        user_flow_img:
          "${process.env.PUBLIC_URL}/images/endwordgame_userflow.png",
      },
      system_design: {
        sub_title: "반응형 디자인",
        system_design_img:
          "${process.env.PUBLIC_URL}/images/endwordgame_responsive.png",
      },
      review: {
        sub_title: "회고",
        challenges: [
          {
            issue:
              "본 프로젝트를 진행하며 가장 어려웠던 점은 API 연동이었습니다.",
            solution:
              "API에서 전달받은 단어 목록 중 하이픈(-)이 포함된 단어와 2글자 미만의 단어가 자주 포함되어 있었습니다. 이를 해결하기 위해 응답 데이터에서 ‘item.word’ 항목만 추출하고, 해당 단어 중 ‘-’ 문자가 포함된 단어와 2글자 미만의 단어를 제거하는 코드를 추가하여 실제 게임에 사용할 수 있는 적절한 단어만 출력하도록 개선하였습니다.",
          },
        ],
        refactoring_points: [
          "현재 API에서 전달받는 단어 리스트는 매번 동일하거나 상위 항목만 반복적으로 출력되어, 이미 입·출력된 단어가 다시 결과로 나오는 문제가 있습니다. 기존에 입·출력된 단어들을 별도로 저장하고, API 응답에서 이들과 중복되는 단어를 제외하는 필터링 로직을 추가한다면 동일 단어 반복을 방지하고 게임의 재미와 완성도를 높일 수 있을 것입니다.",
        ],
      },
    },
    {
      id: 4,
      title: "Greenvia",
      overview: {
        sub_title: "OVERVIEW",
        goals: [
          "Greenvia 브랜드의 전문성과 신뢰감을 전달할 수 있는 구조와 디자인 설계",
          "쉽게 정보를 탐색하고 서비스를 신청할 수 있도록 직관적인 UI 제공",
          "SCSS 변수와 믹스인을 활용한 재사용성 높은 스타일 설계",
        ],
        roles: [],
        features: [
          "상단 헤더 및 GNB 메뉴 구성",
          "슬라이드 형식의 메인 배너",
          "서비스 소개 섹션 (아이콘 + 설명 카드)",
          "서비스 신청 영역 (정보 입력 UI 포함)",
          "하단 고객센터 및 푸터 정보 정리",
          "미디어쿼리를 활용한 반응형 레이아웃",
        ],
      },
      design_system: {
        sub_title: "DESIGN SYSTEM",
        design_system_img:
          "${process.env.PUBLIC_URL}/images/greenvia_designsystem.png",
      },
      user_flow: {
        sub_title: "USER FLOW",
        user_flow_img: "${process.env.PUBLIC_URL}/images/greenvia_userflow.png",
      },
      system_design: {
        sub_title: "반응형 디자인",
        system_design_img:
          "${process.env.PUBLIC_URL}/images/greenvia_responsive.png",
      },
      review: {
        sub_title: "회고",
        challenges: [
          {
            issue:
              "본 프로젝트를 진행하며 가장 어려웠던 점은 배너 이미지 위치 조정 문제와 기술 소개 카드 섹션 레이아웃 구성의 한계였습니다.",
            solution:
              "배너 이미지는 여러 이미지를 조합해야 했는데 HTML과 SCSS에서 위치를 정밀하게 조정하기 어려웠습니다. 이를 해결하기 위해 포토샵으로 이미지를 하나의 배경 이미지로 합친 뒤 텍스트는 HTML로 삽입하고, SCSS의 position 속성으로 적절히 배치하였습니다. 기술 소개 카드 섹션은 Flex에서 Grid로 변경하여 보다 유연하고 일관성 있는 레이아웃을 구현하였습니다.",
          },
        ],
        refactoring_points: [
          "현재 배너 영역은 이미지와 텍스트를 분리해 삽입하여 뷰포트 크기 변경 시 텍스트가 깨지는 문제가 있습니다. 텍스트와 이미지를 하나의 배경 이미지로 합치고 버튼만 HTML로 구현한다면 다양한 화면에서 안정적인 출력이 가능할 것입니다.",
        ],
      },
    },
    {
      id: 5,
      title: "혼잡도 마스터",
      overview: {
        sub_title: "OVERVIEW",
        goals: [
          "지하철 혼잡도를 시간대별로 쉽게 확인할 수 있는 시각적 인터페이스 설계",
          "사용자의 습관과 이동패턴을 고려한 개인 맞춤 알림 설정 기능 설계",
          "데이터 기반 혼잡도 정보를 쉽게 공유할 수 있는 환경 마련",
        ],
        roles: [],
        features: [
          "혼잡도 조회: 노선·시간대 선택 후 혼잡도 그래프 제공",
          "혼잡도 알림 설정: 사용자 지정 조건에 따라 알림 예약",
          "공유 기능: 혼잡도 정보를 링크로 손쉽게 공유 및 이미지 저장",
          "인터랙션 설계: 버튼 클릭, 페이지 이동 등 실제 앱처럼 체험 가능한 인터페이스 구성",
        ],
      },
      design_system: {
        sub_title: "DESIGN SYSTEM",
        design_system_img:
          "${process.env.PUBLIC_URL}/images/congestionmaster_designsystem.png",
      },
      user_flow: {
        sub_title: "USER FLOW",
        user_flow_img:
          "${process.env.PUBLIC_URL}/images/congestionmaster_userflow.png",
      },
      system_design: {
        sub_title: "반응형 디자인",
        system_design_img:
          "${process.env.PUBLIC_URL}/images/congestionmaster_responsive.png",
      },
      review: {
        sub_title: "회고",
        challenges: [
          {
            issue:
              "본 프로젝트를 진행하며 가장 어려웠던 점은 선택 컴포넌트의 시각적 과밀 문제였습니다.",
            solution:
              "풀다운 형태 대신 단계별 분리와 접힘/펼침 인터랙션을 적용해 시각적 부담을 줄였으며, 선택된 항목은 상단에 고정되도록 기획해 사용자 편의성을 높였습니다.",
          },
        ],
        refactoring_points: [
          "React 개발 시 new Date()와 날짜 라이브러리를 활용해 자동 초기값 설정 및 유효시간 범위 제어를 추가하고, 노선·상태 데이터는 JSON 구조로 관리하여 상태 관리와 렌더링 효율성을 높일 수 있습니다.",
        ],
      },
    },
  ];
}
