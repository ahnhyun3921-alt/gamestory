// Projects Data
const projects = [
    {
        title: '픽셀 던전 RPG',
        genre: 'RPG',
        team: '3/5',
        description: '레트로 감성의 로그라이크 던전 탐험 게임. 매번 다르게 생성되는 던전을 탐험하며 아이템을 조합하고 전략적 전투를 펼치세요.',
        fullDescription: '레트로 감성의 로그라이크 던전 탐험 게임입니다. 매번 다르게 생성되는 던전을 탐험하며 100가지 이상의 아이템을 조합하고 전략적 턴제 전투를 펼칩니다.'
    },
    {
        title: '우주 농장 시뮬레이션',
        genre: '시뮬레이션',
        team: '2/4',
        description: '우주 정거장에서 작물을 키우며 자원을 관리하는 힐링 게임.',
        fullDescription: '우주 정거장을 배경으로 한 농장 시뮬레이션 게임입니다. 다양한 외계 작물을 키우고, 자원을 관리하며, 귀여운 외계 생명체들과 교류합니다.'
    },
    {
        title: '리듬 액션 게임',
        genre: '액션',
        team: '4/6',
        description: '음악 비트에 맞춰 적을 물리치는 리듬 액션 게임.',
        fullDescription: '음악의 리듬에 맞춰 적을 공격하는 하이브리드 장르 게임입니다. 정확한 타이밍으로 공격하면 더 강한 데미지를 입힐 수 있습니다.'
    }
];

let currentProjectIndex = 0;

// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById(pageId).classList.add('active');
    
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

// Project Detail
function showProjectDetail(index) {
    currentProjectIndex = index;
    const project = projects[index];
    
    document.getElementById('detailTitle').textContent = project.title;
    document.getElementById('detailMeta').textContent = `🎮 ${project.genre} · 팀원 ${project.team} · 모집중`;
    document.getElementById('detailDescription').textContent = project.fullDescription;
    
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
    document.getElementById('tab-team').style.display = 'none';
    document.getElementById('tab-comments').style.display = 'none';
    
    document.getElementById('tab-' + tabName).style.display = 'block';
}

// Dashboard Tabs
function switchDashboardTab(tabName) {
    document.querySelectorAll('.dashboard-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    document.getElementById('dashboard-profile').style.display = 'none';
    document.getElementById('dashboard-applications').style.display = 'none';
    
    document.getElementById('dashboard-' + tabName).style.display = 'block';
}

// Comments
function addComment() {
    const input = document.getElementById('commentInput');
    const text = input.value.trim();
    
    if (!text) {
        alert('댓글 내용을 입력해주세요.');
        return;
    }
    
    const commentsList = document.getElementById('commentsList');
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.innerHTML = `
        <div class="comment-header">
            <span class="comment-author">나</span>
            <span class="comment-time">방금 전</span>
        </div>
        <div class="comment-text">${text}</div>
    `;
    
    commentsList.insertBefore(newComment, commentsList.firstChild);
    input.value = '';
    
    alert('댓글이 등록되었습니다!');
}

// Genre Selection
function changeGenre() {
    const genre = document.getElementById('genreSelect').value;
    const formSection = document.getElementById('formSection');
    const emptyState = document.getElementById('emptyState');
    const buttonGroup = document.getElementById('buttonGroup');
    
    document.querySelectorAll('.genre-template').forEach(template => {
        template.classList.remove('active');
    });
    
    if (genre) {
        formSection.style.display = 'block';
        emptyState.style.display = 'none';
        buttonGroup.style.display = 'flex';
        
        document.getElementById(genre + 'Template').classList.add('active');
    } else {
        formSection.style.display = 'none';
        buttonGroup.style.display = 'none';
    }
}

// Submit Project
function submitProject() {
    const genre = document.getElementById('genreSelect').value;
    
    if (!genre) {
        alert('장르를 선택해주세요.');
        return;
    }
    
    alert('프로젝트가 게시되었습니다! 🎉');
    showPage('landing');
    
    document.getElementById('genreSelect').value = '';
    changeGenre();
}

// Application Modal
function showApplicationModal() {
    document.getElementById('applicationModal').classList.add('active');
}

function closeApplicationModal() {
    document.getElementById('applicationModal').classList.remove('active');
    document.getElementById('applicationPosition').value = '';
    document.getElementById('applicationMessage').value = '';
}

function submitApplication() {
    const position = document.getElementById('applicationPosition').value;
    const message = document.getElementById('applicationMessage').value;
    
    if (!position) {
        alert('지원 포지션을 선택해주세요.');
        return;
    }
    
    if (!message.trim()) {
        alert('지원 메시지를 작성해주세요.');
        return;
    }
    
    alert('지원서가 제출되었습니다! 팀장의 승인을 기다려주세요.');
    closeApplicationModal();
}

// Close modal on background click
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('applicationModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeApplicationModal();
            }
        });
    }
});
