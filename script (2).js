// ========================================
// PART 1: 기본 데이터 및 변수 선언
// ========================================

// User Data
let currentUser = {
    name: '',
    bio: '',
    isLoggedIn: false,
    role: null,
    avatar: 'https://i.pravatar.cc/160?img=64',
    portfolios: [],
    receivedApplications: [],
    submittedApplications: []
};

// Projects Data
const projects = [
    {
        id: 1,
        title: '픽셀 던전 RPG 시나리오',
        genre: 'RPG',
        author: '게임 제작자 A',
        authorId: 'dev1',
        ownerRole: 'producer',
        description: '레트로 감성의 로그라이크 던전 탐험 게임 시나리오가 필요합니다. 매번 다르게 생성되는 던전에서의 모험을 그려낼 작가를 찾습니다.',
        fullDescription: '레트로 감성의 로그라이크 던전 탐험 게임입니다. 매번 다르게 생성되는 던전을 탐험하며 100가지 이상의 아이템을 조합하고 전략적 턴제 전투를 펼칩니다.',
        requirements: '메인 스토리, NPC 대화, 아이템 설명',
        tags: ['판타지', '던전', '모험', 'RPG'],
        applications: [],
        templateDetails: {
            worldview: '고대 신들이 봉인한 던전이 다시 깨어난 세계. 도시마다 모험가 길드가 존재하며, 플레이어는 신탁을 받은 모험가입니다.',
            characters: '주인공: 초보 모험가 / 조력자: 길드 마스터, 장비 상인 / 적대자: 던전의 지배자. 길드 동료들과의 관계가 엔딩에 영향을 줌.',
            structure: '프롤로그(던전 각성) → 챕터1(탐험) → 챕터2(비밀 해석) → 챕터3(보스 대면) → 멀티 엔딩',
            tone: '고전 RPG 느낌의 경쾌하지만 긴장감 있는 분위기. BGM은 16bit 레트로 사운드.'
        }
    },
    {
        id: 2,
        title: '우주 농장 시뮬레이션 스토리',
        genre: '시뮬레이션',
        author: '인디 개발자',
        authorId: 'dev2',
        description: '우주 정거장에서 작물을 키우는 힐링 게임의 스토리가 필요합니다.',
        fullDescription: '우주 정거장을 배경으로 한 농장 시뮬레이션 게임입니다. 다양한 외계 작물을 키우고, 자원을 관리하며, 귀여운 외계 생명체들과 교류합니다.',
        requirements: '캐릭터 대사, 이벤트 스토리',
        tags: ['우주', 'SF', '힐링', '시뮬레이션'],
        applications: [],
        ownerRole: 'producer',
        templateDetails: {
            worldview: '지구 궤도를 도는 식민지 정거장. 자원 부족과 기후 위기를 해결하기 위해 외계 종자 연구가 진행 중.',
            characters: '주인공: 젊은 식물학자 / 조력자: AI 도우미 드론 / 적대자: 자원 독점 대기업. NPC와의 관계가 생산량에 영향을 줌.',
            structure: '튜토리얼 → 첫 수확 → 이벤트 스토리(위기) → 협력/대립 선택 → 엔딩',
            tone: '따뜻하고 힐링되는 분위기. 아쿠스틱 & 로파이 레퍼런스.'
        }
    },
    {
        id: 3,
        title: '호러 미스터리 시나리오',
        genre: '어드벤처',
        author: '호러 게임 스튜디오',
        authorId: 'dev3',
        description: '폐쇄된 저택에서 벌어지는 미스터리를 풀어가는 1인칭 호러 게임',
        fullDescription: '1980년대 한국의 한옥을 배경으로 한 호러 미스터리 게임입니다. 플레이어는 실종된 친구를 찾기 위해 저택을 탐험하며 숨겨진 진실을 밝혀냅니다.',
        requirements: '메인 스토리, 퍼즐 힌트, 공포 연출 대사',
        tags: ['호러', '미스터리', '한국풍', '심리'],
        applications: [],
        ownerRole: 'producer',
        templateDetails: {
            worldview: '1980년대 산속에 위치한 폐저택. 수십 년간 봉인된 비밀 의식이 존재하며, 기억이 흐릿한 주민들이 등장.',
            characters: '주인공: 실종된 친구를 찾는 대학생 / 조력자: 괴담을 수집하는 라디오 DJ / 적대자: 의식을 이어가는 가문의 후예.',
            structure: '서장(실종) → 탐색1(단서 수집) → 탐색2(의식의 흔적) → 진실 선택 → 엔딩 다중 분기',
            tone: '심리적 압박감과 잔잔한 공포. 영화 "곡성" 스타일의 색감과 사운드.'
        }
    },
    {
        id: 4,
        title: '마법학교 생활 RPG 시나리오',
        genre: 'RPG',
        author: '판타지 게임사',
        authorId: 'dev4',
        description: '마법학교에서 친구를 사귀고 마법을 배우는 학원 RPG',
        fullDescription: '해리포터풍 마법학교를 배경으로 한 학원 생활 시뮬레이션 RPG입니다. 수업을 듣고, 친구들과 관계를 쌓으며, 학교의 비밀을 밝혀냅니다.',
        requirements: '메인 퀘스트, 서브 퀘스트, 캐릭터 대화',
        tags: ['판타지', '마법', '학원', '우정'],
        applications: [],
        ownerRole: 'producer',
        templateDetails: {
            worldview: '현대와 병행하는 마법 차원의 학원. 각 기숙사는 원소 속성을 상징하며 비밀 결사가 암약.',
            characters: '주인공: 전학 온 무속 계열 학생 / 조력자: 정보통 선배, 호기심 많은 룸메이트 / 적대자: 고위 마법사.',
            structure: '입학식 → 수업 & 시험 → 학교 이벤트 → 비밀 결사 추적 → 졸업 시험',
            tone: '밝은 청춘물과 미스터리가 섞인 분위기. 애니메이션 "리틀 위치 아카데미아" 레퍼런스.'
        }
    },
    {
        id: 5,
        title: '사이버펑크 비주얼 노벨',
        genre: '비주얼 노벨',
        author: 'VN 제작사',
        authorId: 'dev5',
        description: '2077년 미래 도시를 배경으로 한 선택형 스토리 게임',
        fullDescription: '네온빛 가득한 미래 도시에서 해커로 살아가는 주인공의 이야기입니다. 플레이어의 선택에 따라 5가지 엔딩으로 나뉩니다.',
        requirements: '메인 스토리, 분기 시나리오, 캐릭터 루트',
        tags: ['사이버펑크', 'SF', '선택', '멀티엔딩'],
        applications: [],
        ownerRole: 'producer',
        templateDetails: {
            worldview: '2077년, 초거대 기업이 지배하는 도쿄. 사이버웨어와 네트워크 범죄가 일상.',
            characters: '주인공: 기억을 잃은 해커 / 조력자: 록 밴드 보컬, 의문의 데이터 브로커 / 적대자: AI 경영진.',
            structure: '프롤로그(추격) → 행적 추적 → 음모 발견 → 선택형 전환점 → 다중 엔딩',
            tone: '네온과 비가 어우러진 사이버펑크. 영화 "블레이드 러너 2049" 레퍼런스.'
        }
    }
];

// Makers (Writers) Data
const makers = [
    {
        name: '김작가',
        role: '판타지 전문 작가',
        bio: '판타지와 RPG 장르 시나리오 전문 작가입니다. 10년 이상의 게임 시나리오 경력을 보유하고 있습니다.',
        skills: ['판타지', 'RPG', '세계관 구축'],
        portfolio: '대형 MMORPG 메인 퀘스트 작업 외 다수',
        portfolioLinks: ['https://example.com/portfolio1', 'https://example.com/portfolio2'],
        experience: '10년',
        available: true,
        avatar: 'https://i.pravatar.cc/200?img=12'
    },
    {
        name: '이스토리',
        role: '비주얼 노벨 작가',
        bio: '감성적인 스토리텔링과 캐릭터 묘사가 강점입니다. 연애, 미스터리 장르를 주로 작업합니다.',
        skills: ['비주얼 노벨', '로맨스', '미스터리'],
        portfolio: '인기 비주얼 노벨 게임 5편 작업',
        portfolioLinks: ['https://example.com/vn-portfolio'],
        experience: '7년',
        available: true,
        avatar: 'https://i.pravatar.cc/200?img=47'
    },
    {
        name: '박시나리오',
        role: '호러 전문 작가',
        bio: '심리 호러와 공포 연출에 특화된 작가입니다. 플레이어의 긴장감을 극대화하는 스토리를 만듭니다.',
        skills: ['호러', '미스터리', '심리'],
        portfolio: '인디 호러 게임 다수 작업',
        portfolioLinks: [],
        experience: '5년',
        available: false,
        avatar: 'https://i.pravatar.cc/200?img=31'
    },
    {
        name: '최세계관',
        role: '세계관 설정 전문',
        bio: '탄탄한 세계관과 설정 구축이 강점입니다. SF, 판타지 장르 모두 가능합니다.',
        skills: ['세계관', 'SF', '판타지'],
        portfolio: 'AAA급 게임 세계관 설정',
        portfolioLinks: ['https://example.com/worldbuilding'],
        experience: '12년',
        available: true,
        avatar: 'https://i.pravatar.cc/200?img=54'
    },
    {
        name: '정대사',
        role: '대사 전문 작가',
        bio: '캐릭터의 개성을 살리는 생생한 대사 작성이 특기입니다. NPC 대화와 퀘스트 대사를 주로 작업합니다.',
        skills: ['대사', '캐릭터', 'NPC'],
        portfolio: '온라인 게임 NPC 대사 1000개 이상',
        portfolioLinks: [],
        experience: '6년',
        available: true,
        avatar: 'https://i.pravatar.cc/200?img=23'
    },
    {
        name: '강번역',
        role: '로컬라이제이션 작가',
        bio: '영어-한국어 게임 번역 및 로컬라이제이션 전문입니다. 문화적 뉘앙스를 잘 살립니다.',
        skills: ['번역', '로컬라이제이션', '영어'],
        portfolio: '글로벌 게임 한국어화 20편 이상',
        portfolioLinks: ['https://example.com/translation'],
        experience: '8년',
        available: true,
        avatar: 'https://i.pravatar.cc/200?img=65'
    }
];

const producers = [
    {
        name: '오버플로우 스튜디오',
        role: '액션 로그라이크 개발팀',
        bio: '세 명의 개발자가 모여 빠른 전투와 방대한 콘텐츠를 지향하는 로그라이크 게임을 제작 중입니다.',
        skills: ['액션', '로그라이크', '언리얼'],
        portfolio: '스팀 데모 5만 다운로드 달성',
        portfolioLinks: ['https://example.com/overflow-demo'],
        experience: '팀 경력 4년',
        available: true,
        avatar: 'https://i.pravatar.cc/200?img=5'
    },
    {
        name: '인디캣',
        role: '힐링 시뮬레이션 제작자',
        bio: '슬로우 라이프 게임을 개발하며 따뜻한 감성의 아트와 음악을 선보입니다.',
        skills: ['시뮬레이션', '기획', 'PM'],
        portfolio: '모바일 힐링 게임 누적 다운로드 30만',
        portfolioLinks: ['https://example.com/indicat-game'],
        experience: '개발 6년',
        available: true,
        avatar: 'https://i.pravatar.cc/200?img=18'
    },
    {
        name: '픽셀크루',
        role: '레트로 감성 인디팀',
        bio: '도트 그래픽과 픽셀아트를 기반으로 한 다양한 장르의 게임을 제작합니다.',
        skills: ['픽셀아트', 'RPG', '사운드'],
        portfolio: '도트 RPG 2편, 어드벤처 1편 출시',
        portfolioLinks: ['https://example.com/pixelcrew'],
        experience: '팀 경력 8년',
        available: false,
        avatar: 'https://i.pravatar.cc/200?img=9'
    },
    {
        name: '블루플라워',
        role: '스토리 기반 VN 제작자',
        bio: '감성적인 연출과 복합적인 분기 구조 설계에 특화된 제작자입니다.',
        skills: ['비주얼 노벨', '연출', 'UX'],
        portfolio: 'PC/모바일 VN 3편 출시',
        portfolioLinks: ['https://example.com/blueflower'],
        experience: '개발 7년',
        available: true,
        avatar: 'https://i.pravatar.cc/200?img=36'
    },
    {
        name: '헥사랩',
        role: '전략 시뮬레이션 스튜디오',
        bio: '데이터 기반의 전략 게임을 제작하며 전세계 유저를 대상으로 서비스를 운영 중입니다.',
        skills: ['전략', '서버', '데이터'],
        portfolio: '글로벌 전략 게임 매출 TOP 50 진입',
        portfolioLinks: ['https://example.com/hexalab'],
        experience: '팀 경력 10년',
        available: true,
        avatar: 'https://i.pravatar.cc/200?img=42'
    }
];

function generateDummyApplicationsForProducer(userName) {
    return {
        received: [
            {
                id: 'received-producer-1',
                projectTitle: '픽셀 던전 RPG 시나리오',
                partnerName: '김작가',
                message: '안녕하세요, 김작가입니다. 로그라이크 구조와 NPC 대사 경험이 있어 프로젝트에 기여하고 싶습니다.',
                portfolio: 'https://example.com/writer-kim',
                date: '2025.10.05',
                status: '대기',
                source: 'dummy-received'
            },
            {
                id: 'received-producer-2',
                projectTitle: '우주 농장 시뮬레이션 스토리',
                partnerName: '이스토리',
                message: '감성적인 스토리 연출이 강점입니다. 캐릭터 루트 설계 제안드릴게요.',
                portfolio: 'https://example.com/story-e',
                date: '2025.09.22',
                status: '대기',
                source: 'dummy-received'
            },
            {
                id: 'received-producer-3',
                projectTitle: '마법학교 생활 RPG 시나리오',
                partnerName: '최세계관',
                message: '학원물 세계관 설정 경험이 풍부합니다. 기본 뼈대를 함께 다듬고 싶어요.',
                portfolio: 'https://example.com/world-choi',
                date: '2025.09.10',
                status: '수락',
                source: 'dummy-received'
            }
        ],
        submitted: [
            {
                id: 'submitted-producer-1',
                projectTitle: '시나리오 공동 작업 제안',
                partnerName: '강번역',
                message: '해외 서비스 버전을 위해 로컬라이제이션 작가님과 협업하고 싶습니다.',
                portfolio: '',
                date: '2025.10.03',
                status: '대기',
                source: 'dummy-submitted'
            },
            {
                id: 'submitted-producer-2',
                projectTitle: 'VN 분기 설계 자문 요청',
                partnerName: '블루플라워',
                message: '새로운 비주얼 노벨 프로젝트에 분기 설계 자문을 부탁드리고 싶습니다.',
                portfolio: '',
                date: '2025.09.15',
                status: '거절',
                source: 'dummy-submitted'
            }
        ]
    };
}

function generateDummyApplicationsForWriter(userName) {
    return {
        received: [
            {
                id: 'received-writer-1',
                projectTitle: '우주 농장 시뮬레이션 스토리',
                partnerName: '인디캣',
                message: `${userName}님, 힐링 게임 서브 퀘스트 작업 제안을 드립니다.`,
                portfolio: 'https://example.com/indicat-game',
                date: '2025.10.01',
                status: '대기',
                source: 'dummy-received'
            },
            {
                id: 'received-writer-2',
                projectTitle: '전략 시뮬레이션 협업 제안',
                partnerName: '헥사랩',
                message: '글로벌 전략 시뮬레이션 스토리 이벤트 작성 가능하신지 궁금합니다.',
                portfolio: 'https://example.com/hexalab',
                date: '2025.09.18',
                status: '수락',
                source: 'dummy-received'
            }
        ],
        submitted: [
            {
                id: 'submitted-writer-1',
                projectTitle: '사이버펑크 비주얼 노벨',
                partnerName: 'VN 제작사',
                message: '사이버펑크 세계관에서 분기 스토리 작성 경험이 있습니다. 지원드립니다.',
                portfolio: 'https://example.com/portfolio-writer',
                date: '2025.10.04',
                status: '대기',
                source: 'dummy-submitted'
            },
            {
                id: 'submitted-writer-2',
                projectTitle: '호러 미스터리 시나리오',
                partnerName: '호러 게임 스튜디오',
                message: '기존 호러 게임 시나리오 2편 참여 경험이 있습니다.',
                portfolio: '',
                date: '2025.09.12',
                status: '수락',
                source: 'dummy-submitted'
            }
        ]
    };
}

// Global Variables
let currentProjectIndex = 0;
let currentEditingProjectId = null;
let allProjects = [...projects];
let filteredProjects = [...projects];
let commentsData = {};
let commentIdCounter = 1;
let aiQuestions = [];
let userAnswers = {};
let originalScenario = '';
let aiGeneratedContent = null;
let currentMakerList = [...makers];
let makerSearchKeyword = '';
let currentApplicationsView = [];
let currentMyApplicationsView = [];

function statusBadgeHtml(status) {
    const normalized = status || '대기';
    const classMap = {
        '대기': 'status-pending',
        '수락': 'status-accepted',
        '거절': 'status-rejected',
        '취소': 'status-cancelled'
    };
    const className = classMap[normalized] || 'status-pending';
    return `<span class="status-badge ${className}">${normalized}</span>`;
}
// ========================================
// PART 2: 페이지 네비게이션 및 렌더링
// ========================================

// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById(pageId).classList.add('active');
    
    if (pageId === 'landing') {
        renderProjects();
    }
    
    if (pageId === 'makers') {
        updateMakerPageCopy();
        renderMakers();
    }
    
    if (pageId === 'dashboard') {
        updateDashboard();
        renderApplications();
        renderMyApplications();
    }
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const pageMap = {
        'landing': 0,
        'makers': 1,
        'create': 2,
        'dashboard': 3
    };
    
    const navButtons = document.querySelectorAll('.nav-btn');
    if (pageMap[pageId] !== undefined) {
        navButtons[pageMap[pageId]].classList.add('active');
    }
}

// Search Projects
function searchProjects() {
    const keyword = document.getElementById('searchKeyword').value.toLowerCase();
    const genre = document.getElementById('searchGenre').value;
    
    filteredProjects = allProjects.filter(project => {
        const templateText = project.templateDetails ? Object.values(project.templateDetails).join(' ').toLowerCase() : '';
        const matchKeyword = !keyword || 
            project.title.toLowerCase().includes(keyword) ||
            project.description.toLowerCase().includes(keyword) ||
            project.tags.some(tag => tag.toLowerCase().includes(keyword)) ||
            templateText.includes(keyword);
        
        const matchGenre = !genre || project.genre === genre;
        
        return matchKeyword && matchGenre;
    });
    
    renderProjects();
}

// Render Projects
function renderProjects() {
    const grid = document.querySelector('.projects-grid');
    grid.innerHTML = '';
    
    const projectsToShow = filteredProjects.length > 0 ? filteredProjects : allProjects;
    
    projectsToShow.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => showProjectDetail(project.id);
        
        const emoji = project.genre === 'RPG' ? '🎮' : 
                     project.genre === '시뮬레이션' ? '🌾' :
                     project.genre === '액션' ? '⚔️' :
                     project.genre === '어드벤처' ? '🔦' :
                     project.genre === '전략' ? '🏰' :
                     project.genre === '비주얼 노벨' ? '📖' : '🎯';
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <div class="meta">${emoji} ${project.genre} · ${project.author}</div>
            <div class="description">${project.description}</div>
            <div class="tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    if (projectsToShow.length === 0) {
        grid.innerHTML = '<div class="empty-state"><div class="icon">🔍</div><h3>검색 결과가 없습니다</h3></div>';
    }
}

function getMakerDataset() {
    if (currentUser.role === 'writer') {
        return producers;
    }
    if (currentUser.role === 'producer') {
        return makers;
    }
    return makers;
}

function updateMakerPageCopy() {
    const titleEl = document.getElementById('makersTitle');
    const subtitleEl = document.getElementById('makersSubtitle');
    if (!titleEl || !subtitleEl) return;
    
    if (currentUser.role === 'writer') {
        titleEl.textContent = '함께할 제작자를 찾아보세요';
        subtitleEl.textContent = '기획, 개발, 운영 역량을 갖춘 제작자 리스트입니다.';
    } else if (currentUser.role === 'producer') {
        titleEl.textContent = '시나리오 작가를 찾아보세요';
        subtitleEl.textContent = '장르/스타일별로 작가를 검색하고 연락해보세요.';
    } else {
        titleEl.textContent = '시나리오 파트너 찾기';
        subtitleEl.textContent = '로그인하면 역할에 맞춘 팀원을 추천받을 수 있어요.';
    }
}

function renderMakers() {
    const grid = document.querySelector('.makers-grid');
    if (!grid) return;
    
    const searchInput = document.getElementById('makerSearchInput');
    if (searchInput) {
        makerSearchKeyword = searchInput.value.trim();
    }
    
    const dataset = getMakerDataset();
    const keyword = makerSearchKeyword.toLowerCase();
    
    const filtered = dataset.filter(maker => {
        if (!keyword) return true;
        const haystack = [
            maker.name,
            maker.role,
            maker.bio,
            maker.portfolio,
            maker.portfolioLinks ? maker.portfolioLinks.join(' ') : '',
            maker.skills.join(' ')
        ].join(' ').toLowerCase();
        return haystack.includes(keyword);
    });
    
    currentMakerList = filtered;
    grid.innerHTML = '';
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state maker-empty">
                <div class="icon">🔍</div>
                <h3>검색 결과가 없습니다</h3>
                <p style="color: #666; margin-top: 8px;">검색어를 바꾸거나 필터를 초기화해보세요.</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach((maker, index) => {
        const card = document.createElement('div');
        card.className = 'maker-card';
        card.onclick = () => showMakerDetail(index);
        
        card.innerHTML = `
            <div class="maker-photo">
                <img src="${maker.avatar}" alt="${maker.name} 프로필">
            </div>
            <h3>${maker.name}</h3>
            <div class="maker-role">${maker.role}</div>
            <div class="maker-bio">${maker.bio}</div>
            <div class="maker-skills">
                ${maker.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function searchMakers() {
    makerSearchKeyword = document.getElementById('makerSearchInput')?.value.trim() || '';
    renderMakers();
}

// Show Project Detail
function buildRequirementLines(project) {
    const lines = [];
    if (project.requirements) {
        const requirementParts = project.requirements.split(/\n|•|,/)
            .map(part => part.trim())
            .filter(Boolean);
        lines.push(...requirementParts);
    }
    
    if (project.templateDetails) {
        const labelMap = {
            worldview: '세계관 & 배경',
            characters: '주요 캐릭터',
            structure: '진행 구조',
            tone: '톤 & 레퍼런스'
        };
        Object.entries(project.templateDetails).forEach(([key, value]) => {
            if (value && labelMap[key]) {
                lines.push(`${labelMap[key]}: ${value}`);
            }
        });
    }
    
    if (lines.length === 0) {
        lines.push('협의 후 결정');
    }
    
    return lines;
}

function showProjectDetail(projectId) {
    const project = allProjects.find(p => p.id === projectId);
    if (!project) return;
    
    currentProjectIndex = projectId;
    
    document.getElementById('detailTitle').textContent = project.title;
    const roleLabel = project.ownerRole === 'writer' ? '작가 의뢰' : '제작자 의뢰';
    document.getElementById('detailMeta').textContent = `${project.genre} · ${project.author} · ${roleLabel}`;
    
    const detailDescriptionEl = document.getElementById('detailDescription');
    if (detailDescriptionEl) {
        const description = project.fullDescription || project.description || '';
        detailDescriptionEl.innerHTML = description.replace(/\n/g, '<br>');
    }
    
    const detailRequirementsEl = document.getElementById('detailRequirements');
    if (detailRequirementsEl) {
        const lines = buildRequirementLines(project);
        detailRequirementsEl.innerHTML = lines.map(line => `• ${line}`).join('<br>');
    }
    
    // Show edit/delete buttons if user is the author
    const actionsDiv = document.getElementById('detailActions');
    if (currentUser.isLoggedIn && project.authorId === 'currentUser') {
        actionsDiv.innerHTML = `
            <button class="btn-edit" onclick="showEditProjectModal(${projectId})">수정</button>
            <button class="btn-danger" onclick="deleteProject(${projectId})">삭제</button>
        `;
    } else {
        actionsDiv.innerHTML = `
            <button class="btn-submit" onclick="showApplicationModal()">지원하기</button>
        `;
    }
    
    // Load comments
    loadComments(projectId);
    
    switchTab('overview');
    showPage('detail');
}

// Detail Tabs
function switchTab(tabName) {
    document.querySelectorAll('.detail-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    document.getElementById('tab-overview').style.display = 'none';
    document.getElementById('tab-requirements').style.display = 'none';
    document.getElementById('tab-comments').style.display = 'none';
    
    document.getElementById('tab-' + tabName).style.display = 'block';
}

// Show Maker Detail
function showMakerDetail(index) {
    const maker = currentMakerList[index];
    const modal = document.getElementById('makerDetailModal');
    if (!maker || !modal) return;
    
    const avatarEl = document.getElementById('makerDetailAvatar');
    if (avatarEl) {
        avatarEl.src = maker.avatar;
        avatarEl.alt = `${maker.name} 프로필 이미지`;
    }
    document.getElementById('makerDetailName').textContent = maker.name;
    document.getElementById('makerDetailRole').textContent = maker.role;
    document.getElementById('makerDetailBio').textContent = maker.bio;
    document.getElementById('makerDetailExperience').textContent = `경력: ${maker.experience}`;
    
    const skillsContainer = document.getElementById('makerDetailSkills');
    skillsContainer.innerHTML = maker.skills.map(skill => 
        `<span class="skill-tag">${skill}</span>`
    ).join('');
    
    const portfolioContainer = document.getElementById('makerDetailPortfolio');
    if (maker.portfolioLinks && maker.portfolioLinks.length > 0) {
        portfolioContainer.innerHTML = '<p style="margin-top: 8px;">' + maker.portfolio + '</p>' +
            maker.portfolioLinks.map(link => 
                `<a href="${link}" target="_blank" class="portfolio-link">포트폴리오 보기 →</a>`
            ).join('');
    } else {
        portfolioContainer.innerHTML = '<p style="margin-top: 8px;">' + maker.portfolio + '</p>';
    }
    
    const availabilityDiv = document.getElementById('makerDetailAvailability');
    if (maker.available) {
        availabilityDiv.innerHTML = '<span style="color: #4caf50;">✓ 현재 프로젝트 참여 가능</span>';
    } else {
        availabilityDiv.innerHTML = '<span style="color: #ff6b6b;">✗ 현재 프로젝트 진행 중</span>';
    }
    
    modal.classList.add('active');
}

function closeMakerDetail() {
    document.getElementById('makerDetailModal').classList.remove('active');
}

function contactMaker() {
    const counterpartRole = currentUser.role === 'writer' ? '제작자' : '작가';
    alert(`${counterpartRole}에게 연락이 전송되었습니다! 곧 답변을 받으실 수 있습니다.`);
    closeMakerDetail();
}
// ========================================
// PART 3: 댓글 및 대댓글 기능
// ========================================

// Load Comments
function loadComments(projectId) {
    const commentsList = document.getElementById('commentsList');
    const comments = commentsData[projectId] || [];
    
    document.getElementById('commentCount').textContent = `(${comments.length})`;
    
    if (comments.length === 0) {
        commentsList.innerHTML = '<p style="color: #888; text-align: center; padding: 40px;">아직 댓글이 없습니다. 첫 댓글을 작성해보세요!</p>';
        return;
    }
    
    commentsList.innerHTML = comments.map(comment => renderComment(comment, projectId)).join('');
}

function renderComment(comment, projectId) {
    const repliesHtml = comment.replies ? comment.replies.map(reply => `
        <div class="reply">
            <div class="comment-header">
                <div>
                    <span class="comment-author">${reply.author}</span>
                    <span class="comment-time"> · ${reply.time}</span>
                </div>
                ${reply.author === currentUser.name ? `<button class="comment-delete" onclick="deleteReply(${projectId}, ${comment.id}, ${reply.id})">삭제</button>` : ''}
            </div>
            <div class="comment-text">${reply.text}</div>
        </div>
    `).join('') : '';
    
    return `
        <div class="comment" data-comment-id="${comment.id}">
            <div class="comment-header">
                <div>
                    <span class="comment-author">${comment.author}</span>
                    <span class="comment-time"> · ${comment.time}</span>
                </div>
                ${comment.author === currentUser.name ? `<button class="comment-delete" onclick="deleteComment(${projectId}, ${comment.id})">삭제</button>` : ''}
            </div>
            <div class="comment-text">${comment.text}</div>
            <div class="comment-actions">
                <button class="comment-action-btn" onclick="showReplyForm(${comment.id})">답글</button>
            </div>
            <div class="replies" id="replies-${comment.id}">
                ${repliesHtml}
            </div>
            <div class="reply-form" id="reply-form-${comment.id}" style="display: none;">
                <input type="text" class="reply-input" id="reply-input-${comment.id}" placeholder="답글을 입력하세요...">
                <button class="btn-reply" onclick="addReply(${projectId}, ${comment.id})">답글 등록</button>
            </div>
        </div>
    `;
}

function addComment() {
    if (!currentUser.isLoggedIn) {
        alert('로그인이 필요합니다.');
        showLoginModal();
        return;
    }
    
    const input = document.getElementById('commentInput');
    const text = input.value.trim();
    
    if (!text) {
        alert('댓글 내용을 입력해주세요.');
        return;
    }
    
    const projectId = currentProjectIndex;
    if (!commentsData[projectId]) {
        commentsData[projectId] = [];
    }
    
    const newComment = {
        id: commentIdCounter++,
        author: currentUser.name,
        text: text,
        time: '방금 전',
        replies: []
    };
    
    commentsData[projectId].unshift(newComment);
    input.value = '';
    
    loadComments(projectId);
}

function deleteComment(projectId, commentId) {
    if (confirm('댓글을 삭제하시겠습니까?')) {
        commentsData[projectId] = commentsData[projectId].filter(c => c.id !== commentId);
        loadComments(projectId);
    }
}

function showReplyForm(commentId) {
    const form = document.getElementById(`reply-form-${commentId}`);
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function addReply(projectId, commentId) {
    if (!currentUser.isLoggedIn) {
        alert('로그인이 필요합니다.');
        return;
    }
    
    const input = document.getElementById(`reply-input-${commentId}`);
    const text = input.value.trim();
    
    if (!text) {
        alert('답글 내용을 입력해주세요.');
        return;
    }
    
    const comment = commentsData[projectId].find(c => c.id === commentId);
    if (comment) {
        if (!comment.replies) {
            comment.replies = [];
        }
        
        comment.replies.push({
            id: commentIdCounter++,
            author: currentUser.name,
            text: text,
            time: '방금 전'
        });
        
        input.value = '';
        loadComments(projectId);
    }
}

function deleteReply(projectId, commentId, replyId) {
    if (confirm('답글을 삭제하시겠습니까?')) {
        const comment = commentsData[projectId].find(c => c.id === commentId);
        if (comment && comment.replies) {
            comment.replies = comment.replies.filter(r => r.id !== replyId);
            loadComments(projectId);
        }
    }
}
// ========================================
// PART 4: 프로젝트 관리 및 대시보드
// ========================================

// Submit Project
function submitProject() {
    if (!currentUser.isLoggedIn) {
        alert('로그인이 필요합니다.');
        showLoginModal();
        return;
    }
    
    const title = document.getElementById('projectTitle').value.trim();
    const genre = document.getElementById('projectGenre').value;
    const description = document.getElementById('projectDescription').value.trim();
    const requirements = document.getElementById('projectRequirements').value.trim();
    const keywords = document.getElementById('projectKeywords').value.trim();
    const worldview = document.getElementById('projectWorldview').value.trim();
    const characters = document.getElementById('projectCharacters').value.trim();
    const structure = document.getElementById('projectStructure').value.trim();
    const tone = document.getElementById('projectTone').value.trim();
    
    if (!title || !genre || !description) {
        alert('필수 항목을 모두 입력해주세요.');
        return;
    }
    
    const templateDetails = { worldview, characters, structure, tone };
    const hasTemplateDetails = Object.values(templateDetails).some(value => value);
    const templateDescription = hasTemplateDetails ? Object.entries(templateDetails)
        .filter(([, value]) => value)
        .map(([key, value]) => {
            const labelMap = {
                worldview: '세계관 & 배경',
                characters: '주요 캐릭터',
                structure: '진행 구조',
                tone: '톤 & 레퍼런스'
            };
            return `${labelMap[key]}: ${value}`;
        }).join('\n') : '';
    
    let fullDescription = description;
    if (templateDescription) {
        fullDescription += `\n\n${templateDescription}`;
    }
    
    const newProject = {
        id: allProjects.length + 1,
        title: title,
        genre: genre,
        author: currentUser.name,
        authorId: 'currentUser',
        ownerRole: currentUser.role || 'producer',
        description: description,
        fullDescription: fullDescription,
        requirements: requirements || '협의 후 결정',
        templateDetails: hasTemplateDetails ? templateDetails : null,
        tags: keywords ? keywords.split(',').map(k => k.trim()) : [genre],
        applications: []
    };
    
    allProjects.unshift(newProject);
    filteredProjects = [...allProjects];
    
    alert('시나리오 의뢰가 등록되었습니다! 🎉');
    showPage('landing');
    
    // Reset form
    document.getElementById('projectTitle').value = '';
    document.getElementById('projectGenre').value = '';
    document.getElementById('projectDescription').value = '';
    document.getElementById('projectRequirements').value = '';
    document.getElementById('projectKeywords').value = '';
    document.getElementById('projectWorldview').value = '';
    document.getElementById('projectCharacters').value = '';
    document.getElementById('projectStructure').value = '';
    document.getElementById('projectTone').value = '';
}

// Edit Project
function showEditProjectModal(projectId) {
    const project = allProjects.find(p => p.id === projectId);
    if (!project) return;
    
    currentEditingProjectId = projectId;
    document.getElementById('editProjectTitle').value = project.title;
    document.getElementById('editProjectDescription').value = project.description;
    document.getElementById('editProjectModal').classList.add('active');
}

function closeEditProjectModal() {
    document.getElementById('editProjectModal').classList.remove('active');
    currentEditingProjectId = null;
}

function saveProjectEdit() {
    const project = allProjects.find(p => p.id === currentEditingProjectId);
    if (!project) return;
    
    project.title = document.getElementById('editProjectTitle').value.trim();
    project.description = document.getElementById('editProjectDescription').value.trim();
    project.fullDescription = project.description;
    
    closeEditProjectModal();
    renderProjects();
    renderMyProjects();
    alert('의뢰가 수정되었습니다!');
}

// Delete Project
function deleteProject(projectId) {
    if (confirm('정말 이 의뢰를 삭제하시겠습니까?')) {
        allProjects = allProjects.filter(p => p.id !== projectId);
        filteredProjects = [...allProjects];
        alert('의뢰가 삭제되었습니다.');
        showPage('landing');
    }
}

// Dashboard
function switchDashboardTab(tabName) {
    document.querySelectorAll('.dashboard-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    document.getElementById('dashboard-profile').style.display = 'none';
    document.getElementById('dashboard-my-projects').style.display = 'none';
    document.getElementById('dashboard-applications').style.display = 'none';
    document.getElementById('dashboard-my-applications').style.display = 'none';
    document.getElementById('dashboard-portfolio').style.display = 'none';
    
    document.getElementById('dashboard-' + tabName).style.display = 'block';
    
    if (tabName === 'my-projects') {
        renderMyProjects();
    } else if (tabName === 'applications') {
        renderApplications();
    } else if (tabName === 'my-applications') {
        renderMyApplications();
    } else if (tabName === 'portfolio') {
        renderPortfolios();
    }
}

function updateDashboard() {
    const displayName = currentUser.name || '게스트';
    const profileNameEl = document.getElementById('profileName');
    const profileBioEl = document.getElementById('profileBio');
    const avatarImg = document.getElementById('profileAvatarImage');
    const roleBadge = document.getElementById('userRoleDisplay');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const applicationsTabLabel = document.getElementById('applicationsTabLabel');
    const myApplicationsTabLabel = document.getElementById('myApplicationsTabLabel');
    const applicationsHeading = document.getElementById('applicationsHeading');
    const myApplicationsHeading = document.getElementById('myApplicationsHeading');
    
    if (profileNameEl) profileNameEl.textContent = displayName;
    if (profileBioEl) profileBioEl.textContent = currentUser.bio || '프로필을 설정해주세요';
    if (avatarImg) {
        avatarImg.src = currentUser.avatar || 'https://i.pravatar.cc/160?img=64';
    }
    
    if (userNameDisplay) {
        userNameDisplay.textContent = currentUser.isLoggedIn ? `${displayName}님` : '';
    }
    
    if (roleBadge) {
        if (currentUser.isLoggedIn && currentUser.role) {
            roleBadge.style.display = 'inline-flex';
            roleBadge.textContent = currentUser.role === 'writer' ? '작가' : '제작자';
        } else {
            roleBadge.style.display = 'none';
        }
    }
    
    if (applicationsTabLabel && myApplicationsTabLabel && applicationsHeading && myApplicationsHeading) {
        if (currentUser.role === 'producer') {
            applicationsTabLabel.textContent = '받은 지원';
            myApplicationsTabLabel.textContent = '보낸 제안';
            applicationsHeading.textContent = '받은 지원 현황';
            myApplicationsHeading.textContent = '보낸 제안 관리';
        } else if (currentUser.role === 'writer') {
            applicationsTabLabel.textContent = '받은 제안';
            myApplicationsTabLabel.textContent = '넣은 지원';
            applicationsHeading.textContent = '받은 제안 현황';
            myApplicationsHeading.textContent = '넣은 지원 현황';
        } else {
            applicationsTabLabel.textContent = '받은 지원';
            myApplicationsTabLabel.textContent = '넣은 지원';
            applicationsHeading.textContent = '받은 지원 현황';
            myApplicationsHeading.textContent = '넣은 지원 현황';
        }
    }
    
    updateMakerPageCopy();
}

function renderMyProjects() {
    const myProjects = allProjects.filter(p => p.authorId === 'currentUser');
    const list = document.getElementById('myProjectsList');
    
    if (myProjects.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <div class="icon">📝</div>
                <h3>아직 등록한 의뢰가 없습니다</h3>
                <button class="btn-primary" onclick="showPage('create')" style="margin-top: 20px;">의뢰 등록하기</button>
            </div>
        `;
        return;
    }
    
    list.innerHTML = myProjects.map(project => `
        <div class="my-project-card">
            <div class="my-project-header">
                <div>
                    <div class="my-project-title">${project.title}</div>
                    <div class="my-project-meta">${project.genre} · 지원자 ${project.applications.length}명</div>
                </div>
                <div class="my-project-actions">
                    <button class="btn-sm edit" onclick="showEditProjectModal(${project.id})">수정</button>
                    <button class="btn-sm delete" onclick="deleteProject(${project.id})">삭제</button>
                </div>
            </div>
            <p style="color: #666; margin-top: 8px;">${project.description}</p>
        </div>
    `).join('');
}

function renderApplications() {
    const list = document.getElementById('applicationsList');
    if (!list) return;
    
    const aggregated = [];
    const baseReceived = currentUser.receivedApplications || [];
    
    baseReceived.forEach((app, idx) => {
        aggregated.push({
            id: app.id || `received-${idx}`,
            projectTitle: app.projectTitle || '미정 프로젝트',
            partnerName: app.partnerName || app.applicantName || '알 수 없음',
            message: app.message || '',
            portfolio: app.portfolio || '',
            date: app.date || new Date().toLocaleDateString(),
            status: app.status || '대기',
            source: app.source || 'dummy-received'
        });
    });
    
    if (currentUser.role === 'producer') {
        const myProjects = allProjects.filter(p => p.authorId === 'currentUser');
        myProjects.forEach(project => {
            project.applications = project.applications || [];
            project.applications.forEach((app, index) => {
                aggregated.push({
                    id: app.id || `project-${project.id}-${index}`,
                    projectTitle: project.title,
                    partnerName: app.applicantName || app.partnerName || '지원자',
                    message: app.message,
                    portfolio: app.portfolio,
                    date: app.date,
                    status: app.status || '대기',
                    source: 'project',
                    projectId: project.id,
                    projectAppIndex: index
                });
            });
        });
    }
    
    currentApplicationsView = aggregated;
    
    if (aggregated.length === 0) {
        const isProducer = currentUser.role === 'producer';
        const emptyTitle = isProducer ? '아직 받은 지원이 없습니다' : '아직 받은 제안이 없습니다';
        const emptyIcon = isProducer ? '📬' : '🤝';
        list.innerHTML = `
            <div class="empty-state">
                <div class="icon">${emptyIcon}</div>
                <h3>${emptyTitle}</h3>
            </div>
        `;
        return;
    }
    
    list.innerHTML = aggregated.map((app, index) => `
        <div class="application-card">
            <div class="application-header">
                <div>
                    <div class="application-title">${app.projectTitle}</div>
                    <div class="application-meta">${app.partnerName} · ${app.date}</div>
                </div>
                ${statusBadgeHtml(app.status)}
            </div>
            <div class="application-message">${app.message}</div>
            ${app.portfolio ? `<p><strong>포트폴리오:</strong> <a href="${app.portfolio}" target="_blank">링크 보기</a></p>` : ''}
            ${app.status === '대기' ? `
                <div class="application-actions">
                    <button class="btn-sm btn-accept" onclick="handleApplicationDecision(${index}, '수락')">수락</button>
                    <button class="btn-sm btn-reject" onclick="handleApplicationDecision(${index}, '거절')">거절</button>
                </div>
            ` : ''}
        </div>
    `).join('');
}

function handleApplicationDecision(index, decision) {
    const app = currentApplicationsView[index];
    if (!app) return;
    
    if (decision === '수락') {
        if (app.source === 'project') {
            const project = allProjects.find(p => p.id === app.projectId);
            if (project && project.applications[app.projectAppIndex]) {
                project.applications[app.projectAppIndex].status = '수락';
            }
        } else {
            const target = currentUser.receivedApplications.find(item => (item.id || '') === app.id);
            if (target) target.status = '수락';
        }
        alert('지원을 수락했습니다! 작가와 연락하여 작업을 시작하세요.');
        app.status = '수락';
    } else if (decision === '거절') {
        if (!confirm('이 지원을 거절하시겠습니까?')) {
            return;
        }
        if (app.source === 'project') {
            const project = allProjects.find(p => p.id === app.projectId);
            if (project && project.applications[app.projectAppIndex]) {
                project.applications[app.projectAppIndex].status = '거절';
            }
        } else {
            const target = currentUser.receivedApplications.find(item => (item.id || '') === app.id);
            if (target) target.status = '거절';
        }
        alert('지원이 거절되었습니다.');
        app.status = '거절';
    }
    
    renderApplications();
}

function renderMyApplications() {
    const list = document.getElementById('myApplicationsList');
    if (!list) return;
    
    const submissions = currentUser.submittedApplications || [];
    currentMyApplicationsView = submissions;
    
    if (submissions.length === 0) {
        const isProducer = currentUser.role === 'producer';
        const emptyTitle = isProducer ? '아직 보낸 제안이 없습니다' : '아직 지원한 프로젝트가 없습니다';
        const emptyIcon = isProducer ? '📨' : '✉️';
        list.innerHTML = `
            <div class="empty-state">
                <div class="icon">${emptyIcon}</div>
                <h3>${emptyTitle}</h3>
            </div>
        `;
        return;
    }
    
    list.innerHTML = submissions.map((app, index) => `
        <div class="application-card">
            <div class="application-header">
                <div>
                    <div class="application-title">${app.projectTitle}</div>
                    <div class="application-meta">${app.partnerName} · ${app.date}</div>
                </div>
                ${statusBadgeHtml(app.status)}
            </div>
            <div class="application-message">${app.message}</div>
            ${app.portfolio ? `<p><strong>포트폴리오:</strong> <a href="${app.portfolio}" target="_blank">링크 보기</a></p>` : ''}
            ${app.status === '대기' ? `
                <div class="application-actions">
                    <button class="btn-sm btn-reject" onclick="withdrawMyApplication(${index})">지원 취소</button>
                </div>
            ` : ''}
        </div>
    `).join('');
}

function withdrawMyApplication(index) {
    const app = currentMyApplicationsView[index];
    if (!app) return;
    
    if (!confirm('해당 지원을 취소하시겠습니까?')) {
        return;
    }
    
    const storedIndex = currentUser.submittedApplications.findIndex(item => (item.id || '') === app.id);
    if (storedIndex > -1) {
        currentUser.submittedApplications[storedIndex].status = '취소';
    }
    
    if (app.source === 'project') {
        const project = allProjects.find(p => p.id === app.projectId);
        if (project && project.applications) {
            const target = project.applications.find(item => (item.id || '') === app.id);
            if (target) {
                target.status = '취소';
            }
        }
    }
    
    alert('지원이 취소되었습니다.');
    renderMyApplications();
}

function renderPortfolios() {
    const list = document.getElementById('portfolioList');
    
    if (currentUser.portfolios.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <div class="icon">💼</div>
                <h3>포트폴리오를 추가해보세요</h3>
            </div>
        `;
        return;
    }
    
    list.innerHTML = currentUser.portfolios.map((portfolio, index) => `
        <div class="portfolio-card">
            <h4>${portfolio.title}</h4>
            <p>${portfolio.description}</p>
            <a href="${portfolio.link}" target="_blank">링크 보기 →</a>
            <button class="btn-sm delete" onclick="deletePortfolio(${index})" style="float: right; margin-top: -30px;">삭제</button>
        </div>
    `).join('');
}

function deletePortfolio(index) {
    if (confirm('이 포트폴리오를 삭제하시겠습니까?')) {
        currentUser.portfolios.splice(index, 1);
        renderPortfolios();
    }
}

// Application Modal
function showApplicationModal() {
    if (!currentUser.isLoggedIn) {
        alert('로그인이 필요합니다.');
        showLoginModal();
        return;
    }
    document.getElementById('applicationModal').classList.add('active');
}

function closeApplicationModal() {
    document.getElementById('applicationModal').classList.remove('active');
    document.getElementById('applicationMessage').value = '';
    document.getElementById('applicationPortfolio').value = '';
}

function submitApplication() {
    const message = document.getElementById('applicationMessage').value.trim();
    const portfolio = document.getElementById('applicationPortfolio').value.trim();
    
    if (!message) {
        alert('자기소개를 작성해주세요.');
        return;
    }
    
    const project = allProjects.find(p => p.id === currentProjectIndex);
    if (project) {
        const applicationId = `app-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        const applicationDate = new Date().toLocaleDateString();
        const applicationData = {
            id: applicationId,
            applicantName: currentUser.name,
            partnerName: currentUser.name,
            message: message,
            portfolio: portfolio,
            date: applicationDate,
            status: '대기'
        };
        project.applications.push(applicationData);
        
        if (!Array.isArray(currentUser.submittedApplications)) {
            currentUser.submittedApplications = [];
        }
        
        currentUser.submittedApplications.unshift({
            id: applicationId,
            projectId: project.id,
            projectTitle: project.title,
            partnerName: project.author,
            message: message,
            portfolio: portfolio,
            date: applicationDate,
            status: '대기',
            source: 'project'
        });
    }
    
    alert('지원서가 제출되었습니다! 의뢰자의 연락을 기다려주세요.');
    closeApplicationModal();
    renderMyApplications();
}
// ========================================
// PART 5: 로그인, 프로필, AI 기능 및 초기화
// ========================================

// Login Functions
function showLoginModal() {
    document.getElementById('loginModal').classList.add('active');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('active');
}

function naverLogin() {
    alert('네이버 로그인 기능은 개발 중입니다.\n\n실제 연동을 위해서는:\n1. 네이버 개발자 센터에서 애플리케이션 등록\n2. Client ID와 Secret 발급\n3. 콜백 URL 설정이 필요합니다.\n\n지금은 게스트로 로그인해주세요!');
}

function guestLogin() {
    const name = document.getElementById('guestName').value.trim();
    const selectedRole = document.querySelector('input[name="loginRole"]:checked')?.value || 'producer';
    
    if (!name) {
        alert('이름을 입력해주세요.');
        return;
    }
    
    const avatarUrl = `https://i.pravatar.cc/160?u=${encodeURIComponent(name + selectedRole)}`;
    const dummyData = selectedRole === 'producer'
        ? generateDummyApplicationsForProducer(name)
        : generateDummyApplicationsForWriter(name);
    
    currentUser = {
        name: name,
        bio: `안녕하세요, ${name}입니다.`,
        isLoggedIn: true,
        role: selectedRole,
        avatar: avatarUrl,
        portfolios: [],
        receivedApplications: dummyData.received,
        submittedApplications: dummyData.submitted
    };
    
    document.getElementById('loginBtn').textContent = '로그아웃';
    document.getElementById('loginBtn').onclick = logout;
    
    updateDashboard();
    const makerInput = document.getElementById('makerSearchInput');
    if (makerInput) {
        makerInput.value = '';
    }
    makerSearchKeyword = '';
    renderMakers();
    renderApplications();
    renderMyApplications();
    closeLoginModal();
    alert(`${name}님, 환영합니다!`);
}

function logout() {
    if (confirm('로그아웃 하시겠습니까?')) {
        currentUser = {
            name: '',
            bio: '',
            isLoggedIn: false,
            role: null,
            avatar: 'https://i.pravatar.cc/160?img=64',
            portfolios: [],
            receivedApplications: [],
            submittedApplications: []
        };
        
        document.getElementById('loginBtn').textContent = '로그인';
        document.getElementById('loginBtn').onclick = showLoginModal;
        
        makerSearchKeyword = '';
        const makerInput = document.getElementById('makerSearchInput');
        if (makerInput) makerInput.value = '';
        
        updateDashboard();
        renderMakers();
        renderApplications();
        renderMyApplications();
        showPage('landing');
        alert('로그아웃되었습니다.');
    }
}

// Profile Management
function showEditProfileModal() {
    document.getElementById('editProfileName').value = currentUser.name;
    document.getElementById('editProfileBio').value = currentUser.bio;
    const avatarInput = document.getElementById('editProfileAvatar');
    if (avatarInput) {
        avatarInput.value = currentUser.avatar || '';
    }
    document.getElementById('editProfileModal').classList.add('active');
}

function closeEditProfileModal() {
    document.getElementById('editProfileModal').classList.remove('active');
}

function saveProfile() {
    const newName = document.getElementById('editProfileName').value.trim();
    const newBio = document.getElementById('editProfileBio').value.trim();
    const newAvatar = document.getElementById('editProfileAvatar').value.trim();
    
    if (newName) {
        currentUser.name = newName;
    }
    currentUser.bio = newBio;
    if (newAvatar) {
        currentUser.avatar = newAvatar;
    }
    
    updateDashboard();
    closeEditProfileModal();
    alert('프로필이 수정되었습니다!');
}

// Portfolio Management
function showAddPortfolioModal() {
    document.getElementById('addPortfolioModal').classList.add('active');
}

function closeAddPortfolioModal() {
    document.getElementById('addPortfolioModal').classList.remove('active');
    document.getElementById('portfolioTitle').value = '';
    document.getElementById('portfolioDescription').value = '';
    document.getElementById('portfolioLink').value = '';
}

function savePortfolio() {
    const title = document.getElementById('portfolioTitle').value.trim();
    const description = document.getElementById('portfolioDescription').value.trim();
    const link = document.getElementById('portfolioLink').value.trim();
    
    if (!title || !description || !link) {
        alert('모든 항목을 입력해주세요.');
        return;
    }
    
    currentUser.portfolios.push({
        title: title,
        description: description,
        link: link
    });
    
    renderPortfolios();
    closeAddPortfolioModal();
    alert('포트폴리오가 추가되었습니다!');
}

// AI Analysis Functions
async function analyzeScenario() {
    const scenario = document.getElementById('scenarioInput').value.trim();
    
    if (!scenario) {
        alert('게임 아이디어를 입력해주세요.');
        return;
    }
    
    originalScenario = scenario;
    
    const resultDiv = document.getElementById('aiAnalysisResult');
    const thinkingDiv = document.getElementById('aiThinking');
    const questionsDiv = document.getElementById('aiQuestions');
    const analyzeBtn = document.getElementById('analyzeBtn');
    
    resultDiv.style.display = 'block';
    thinkingDiv.style.display = 'block';
    questionsDiv.style.display = 'none';
    analyzeBtn.disabled = true;
    
    try {
        const response = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 2000,
                messages: [
                    {
                        role: "user",
                        content: `당신은 게임 시나리오 전문가입니다. 다음 게임 아이디어를 분석하고, 구체적인 시나리오를 만들기 위해 필요한 5개의 핵심 질문을 만들어주세요.

게임 아이디어:
${scenario}

다음 형식의 JSON으로만 응답해주세요:
{
  "questions": [
    "질문 1",
    "질문 2",
    "질문 3",
    "질문 4",
    "질문 5"
  ]
}

질문은 메인 스토리, 캐릭터, 세계관, 톤앤매너, 타겟층 등을 다루어야 합니다.`
                    }
                ]
            })
        });
        
        if (!response.ok) {
            throw new Error(`API 오류: ${response.status}`);
        }
        
        const data = await response.json();
        let responseText = data.content[0].text;
        responseText = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
        
        const parsed = JSON.parse(responseText);
        aiQuestions = parsed.questions;
        
        displayQuestions();
        thinkingDiv.style.display = 'none';
        questionsDiv.style.display = 'block';
        
    } catch (error) {
        console.error('AI 분석 오류:', error);
        alert('AI 기능은 로컬 환경이나 Netlify/Vercel에서만 작동합니다.\n\nGitHub Pages에서는 CORS 제한으로 사용할 수 없습니다.\n\n대신 "직접 의뢰 작성하기"를 이용해주세요!');
        thinkingDiv.style.display = 'none';
        analyzeBtn.disabled = false;
    }
}

function displayQuestions() {
    const questionsList = document.getElementById('questionsList');
    questionsList.innerHTML = '';
    
    aiQuestions.forEach((question, index) => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        questionItem.innerHTML = `
            <label class="question-label">질문 ${index + 1}: ${question}</label>
            <input type="text" class="question-input" id="answer${index}" placeholder="답변을 입력해주세요...">
        `;
        questionsList.appendChild(questionItem);
    });
}

async function generateGDD() {
    userAnswers = {};
    let allAnswered = true;
    
    aiQuestions.forEach((question, index) => {
        const answer = document.getElementById(`answer${index}`).value.trim();
        if (!answer) allAnswered = false;
        userAnswers[question] = answer;
    });
    
    if (!allAnswered) {
        alert('모든 질문에 답변해주세요.');
        return;
    }
    
    const questionsDiv = document.getElementById('aiQuestions');
    const finalGDDDiv = document.getElementById('finalGDD');
    const thinkingDiv = document.getElementById('aiThinking');
    
    questionsDiv.style.display = 'none';
    thinkingDiv.style.display = 'block';
    
    try {
        let qaText = '';
        aiQuestions.forEach((question, index) => {
            qaText += `Q${index + 1}: ${question}\nA${index + 1}: ${userAnswers[question]}\n\n`;
        });
        
        const response = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 3000,
                messages: [{
                    role: "user",
                    content: `게임 시나리오 기획서를 작성해주세요.\n\n원본: ${originalScenario}\n\n${qaText}`
                }]
            })
        });
        
        const data = await response.json();
        const gddText = data.content[0].text;
        
        aiGeneratedContent = {
            title: originalScenario.substring(0, 50),
            description: gddText.substring(0, 200),
            fullContent: gddText
        };
        
        document.getElementById('gddContent').innerHTML = convertMarkdownToHTML(gddText);
        thinkingDiv.style.display = 'none';
        finalGDDDiv.style.display = 'block';
        
    } catch (error) {
        alert('기획서 생성 중 오류가 발생했습니다.');
        thinkingDiv.style.display = 'none';
        questionsDiv.style.display = 'block';
    }
}

function convertMarkdownToHTML(markdown) {
    let html = markdown;
    html = html.replace(/^### (.*$)/gim, '<h5>$1</h5>');
    html = html.replace(/^## (.*$)/gim, '<h5>$1</h5>');
    html = html.replace(/^# (.*$)/gim, '<h5>$1</h5>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    html = html.split('\n\n').map(para => {
        if (!para.startsWith('<h5>') && !para.startsWith('<ul>') && para.trim()) {
            return '<p>' + para + '</p>';
        }
        return para;
    }).join('\n');
    return html;
}

function resetAI() {
    document.getElementById('scenarioInput').value = '';
    document.getElementById('aiAnalysisResult').style.display = 'none';
    document.getElementById('analyzeBtn').disabled = false;
    aiQuestions = [];
    userAnswers = {};
    originalScenario = '';
    aiGeneratedContent = null;
}

function useAIResult() {
    if (!currentUser.isLoggedIn) {
        alert('로그인이 필요합니다.');
        showLoginModal();
        return;
    }
    
    if (!aiGeneratedContent) {
        alert('생성된 기획서가 없습니다.');
        return;
    }
    
    const newProject = {
        id: allProjects.length + 1,
        title: aiGeneratedContent.title,
        genre: 'AI 생성',
        author: currentUser.name,
        authorId: 'currentUser',
        ownerRole: currentUser.role || 'producer',
        description: aiGeneratedContent.description,
        fullDescription: aiGeneratedContent.fullContent,
        requirements: 'AI 생성 시나리오 기반',
        tags: ['AI생성'],
        applications: []
    };
    
    allProjects.unshift(newProject);
    filteredProjects = [...allProjects];
    
    alert('AI 기획서로 의뢰가 등록되었습니다! 🎉');
    showPage('landing');
    resetAI();
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    
    const modals = ['applicationModal', 'loginModal', 'editProfileModal', 'addPortfolioModal', 'editProjectModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                }
            });
        }
    });
});
