// ========================================
// PART 1: 기본 데이터 및 변수 선언
// ========================================

// User Data
let currentUser = {
    name: '',
    bio: '',
    isLoggedIn: false,
    portfolios: []
};

// Projects Data
const projects = [
    {
        id: 1,
        title: '픽셀 던전 RPG 시나리오',
        genre: 'RPG',
        author: '게임 제작자 A',
        authorId: 'dev1',
        description: '레트로 감성의 로그라이크 던전 탐험 게임 시나리오가 필요합니다. 매번 다르게 생성되는 던전에서의 모험을 그려낼 작가를 찾습니다.',
        fullDescription: '레트로 감성의 로그라이크 던전 탐험 게임입니다. 매번 다르게 생성되는 던전을 탐험하며 100가지 이상의 아이템을 조합하고 전략적 턴제 전투를 펼칩니다.',
        requirements: '메인 스토리, NPC 대화, 아이템 설명',
        tags: ['판타지', '던전', '모험', 'RPG'],
        applications: []
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
        applications: []
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
        applications: []
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
        applications: []
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
        applications: []
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
        available: true
    },
    {
        name: '이스토리',
        role: '비주얼 노벨 작가',
        bio: '감성적인 스토리텔링과 캐릭터 묘사가 강점입니다. 연애, 미스터리 장르를 주로 작업합니다.',
        skills: ['비주얼 노벨', '로맨스', '미스터리'],
        portfolio: '인기 비주얼 노벨 게임 5편 작업',
        portfolioLinks: ['https://example.com/vn-portfolio'],
        experience: '7년',
        available: true
    },
    {
        name: '박시나리오',
        role: '호러 전문 작가',
        bio: '심리 호러와 공포 연출에 특화된 작가입니다. 플레이어의 긴장감을 극대화하는 스토리를 만듭니다.',
        skills: ['호러', '미스터리', '심리'],
        portfolio: '인디 호러 게임 다수 작업',
        portfolioLinks: [],
        experience: '5년',
        available: false
    },
    {
        name: '최세계관',
        role: '세계관 설정 전문',
        bio: '탄탄한 세계관과 설정 구축이 강점입니다. SF, 판타지 장르 모두 가능합니다.',
        skills: ['세계관', 'SF', '판타지'],
        portfolio: 'AAA급 게임 세계관 설정',
        portfolioLinks: ['https://example.com/worldbuilding'],
        experience: '12년',
        available: true
    },
    {
        name: '정대사',
        role: '대사 전문 작가',
        bio: '캐릭터의 개성을 살리는 생생한 대사 작성이 특기입니다. NPC 대화와 퀘스트 대사를 주로 작업합니다.',
        skills: ['대사', '캐릭터', 'NPC'],
        portfolio: '온라인 게임 NPC 대사 1000개 이상',
        portfolioLinks: [],
        experience: '6년',
        available: true
    },
    {
        name: '강번역',
        role: '로컬라이제이션 작가',
        bio: '영어-한국어 게임 번역 및 로컬라이제이션 전문입니다. 문화적 뉘앙스를 잘 살립니다.',
        skills: ['번역', '로컬라이제이션', '영어'],
        portfolio: '글로벌 게임 한국어화 20편 이상',
        portfolioLinks: ['https://example.com/translation'],
        experience: '8년',
        available: true
    }
];

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
        renderMakers();
    }
    
    if (pageId === 'dashboard') {
        updateDashboard();
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
        const matchKeyword = !keyword || 
            project.title.toLowerCase().includes(keyword) ||
            project.description.toLowerCase().includes(keyword) ||
            project.tags.some(tag => tag.toLowerCase().includes(keyword));
        
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

// Render Makers
function renderMakers() {
    const grid = document.querySelector('.makers-grid');
    grid.innerHTML = '';
    
    makers.forEach((maker, index) => {
        const card = document.createElement('div');
        card.className = 'maker-card';
        card.onclick = () => showMakerDetail(index);
        
        card.innerHTML = `
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

// Show Project Detail
function showProjectDetail(projectId) {
    const project = allProjects.find(p => p.id === projectId);
    if (!project) return;
    
    currentProjectIndex = projectId;
    
    document.getElementById('detailTitle').textContent = project.title;
    document.getElementById('detailMeta').textContent = `${project.genre} · ${project.author}`;
    document.getElementById('detailDescription').textContent = project.fullDescription;
    document.getElementById('detailRequirements').innerHTML = project.requirements.split(',').map(r => `• ${r.trim()}`).join('<br>');
    
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
    const maker = makers[index];
    const modal = document.getElementById('makerDetailModal');
    
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
    alert('작가에게 연락이 전송되었습니다! 곧 답변을 받으실 수 있습니다.');
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
    
    if (!title || !genre || !description) {
        alert('필수 항목을 모두 입력해주세요.');
        return;
    }
    
    const newProject = {
        id: allProjects.length + 1,
        title: title,
        genre: genre,
        author: currentUser.name,
        authorId: 'currentUser',
        description: description,
        fullDescription: description,
        requirements: requirements || '협의 후 결정',
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
    document.getElementById('dashboard-portfolio').style.display = 'none';
    
    document.getElementById('dashboard-' + tabName).style.display = 'block';
    
    if (tabName === 'my-projects') {
        renderMyProjects();
    } else if (tabName === 'applications') {
        renderApplications();
    } else if (tabName === 'portfolio') {
        renderPortfolios();
    }
}

function updateDashboard() {
    document.getElementById('profileName').textContent = currentUser.name || '게스트';
    document.getElementById('profileBio').textContent = currentUser.bio || '프로필을 설정해주세요';
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
    const myProjects = allProjects.filter(p => p.authorId === 'currentUser');
    const allApplications = myProjects.flatMap(p => 
        p.applications.map(app => ({...app, projectTitle: p.title, projectId: p.id}))
    );
    
    const list = document.getElementById('applicationsList');
    
    if (allApplications.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <div class="icon">📬</div>
                <h3>아직 받은 지원이 없습니다</h3>
            </div>
        `;
        return;
    }
    
    list.innerHTML = allApplications.map((app, index) => `
        <div class="application-card">
            <div class="application-header">
                <div>
                    <div class="application-title">${app.projectTitle}</div>
                    <div class="application-meta">${app.applicantName} · ${app.date}</div>
                </div>
            </div>
            <div class="application-message">${app.message}</div>
            ${app.portfolio ? `<p><strong>포트폴리오:</strong> <a href="${app.portfolio}" target="_blank">링크 보기</a></p>` : ''}
            <div class="application-actions">
                <button class="btn-sm btn-accept" onclick="acceptApplication(${app.projectId}, ${index})">수락</button>
                <button class="btn-sm btn-reject" onclick="rejectApplication(${app.projectId}, ${index})">거절</button>
            </div>
        </div>
    `).join('');
}

function acceptApplication(projectId, appIndex) {
    alert('지원을 수락했습니다! 작가와 연락하여 작업을 시작하세요.');
    renderApplications();
}

function rejectApplication(projectId, appIndex) {
    if (confirm('이 지원을 거절하시겠습니까?')) {
        const project = allProjects.find(p => p.id === projectId);
        if (project) {
            project.applications.splice(appIndex, 1);
            renderApplications();
            alert('지원이 거절되었습니다.');
        }
    }
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
        project.applications.push({
            applicantName: currentUser.name,
            message: message,
            portfolio: portfolio,
            date: new Date().toLocaleDateString()
        });
    }
    
    alert('지원서가 제출되었습니다! 의뢰자의 연락을 기다려주세요.');
    closeApplicationModal();
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
    
    if (!name) {
        alert('이름을 입력해주세요.');
        return;
    }
    
    currentUser = {
        name: name,
        bio: `안녕하세요, ${name}입니다.`,
        isLoggedIn: true,
        portfolios: []
    };
    
    document.getElementById('userNameDisplay').textContent = `${name}님`;
    document.getElementById('loginBtn').textContent = '로그아웃';
    document.getElementById('loginBtn').onclick = logout;
    
    updateDashboard();
    closeLoginModal();
    alert(`${name}님, 환영합니다!`);
}

function logout() {
    if (confirm('로그아웃 하시겠습니까?')) {
        currentUser = {
            name: '',
            bio: '',
            isLoggedIn: false,
            portfolios: []
        };
        
        document.getElementById('userNameDisplay').textContent = '';
        document.getElementById('loginBtn').textContent = '로그인';
        document.getElementById('loginBtn').onclick = showLoginModal;
        
        showPage('landing');
        alert('로그아웃되었습니다.');
    }
}

// Profile Management
function showEditProfileModal() {
    document.getElementById('editProfileName').value = currentUser.name;
    document.getElementById('editProfileBio').value = currentUser.bio;
    document.getElementById('editProfileModal').classList.add('active');
}

function closeEditProfileModal() {
    document.getElementById('editProfileModal').classList.remove('active');
}

function saveProfile() {
    currentUser.name = document.getElementById('editProfileName').value.trim();
    currentUser.bio = document.getElementById('editProfileBio').value.trim();
    
    document.getElementById('userNameDisplay').textContent = `${currentUser.name}님`;
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
