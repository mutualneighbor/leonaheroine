document.addEventListener('DOMContentLoaded', function () {
    
    // --- 갤러리 이미지 동적 로딩 ---
    function loadGalleryImages() {
        // 중요: 'images' 폴더에 있는 이미지 파일 이름을 이곳에 정확하게 입력하세요.
        const imageFiles = [
            '1.jpeg', 
            // 나중에 사진을 추가하려면 이 목록에 파일 이름을 더 입력하세요.
            // 예: '1.jpeg', '2.png', '3.jpg'
        ];

        const galleryGrid = document.querySelector('#content-media .media-grid');
        if (!galleryGrid) return; // 갤러리가 없으면 실행 중단

        // 기존 갤러리 내용 초기화
        galleryGrid.innerHTML = '';

        // 배열에 있는 파일 이름으로 이미지 태그를 만들어 추가
        imageFiles.forEach(fileName => {
            const mediaItem = document.createElement('div');
            mediaItem.className = 'media-item';

            const img = document.createElement('img');
            img.src = 'images/' + fileName; // 'images' 폴더 경로
            img.alt = fileName;

            mediaItem.appendChild(img);
            galleryGrid.appendChild(mediaItem);
        });
    }

    // 페이지가 열릴 때 갤러리 함수 실행
    loadGalleryImages();

    // --- 탭 전환 기능 ---
    const tabs = document.querySelectorAll('.nav-link');
    const contentPanels = document.querySelectorAll('.content-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            tabs.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            contentPanels.forEach(panel => panel.classList.remove('active'));

            const targetPanelId = this.getAttribute('data-target');
            const targetPanel = document.querySelector(targetPanelId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // --- 팔로우 버튼 토글 기능 ---
    const followBtn = document.querySelector('.follow-btn');

    followBtn.addEventListener('click', function() {
        this.classList.toggle('following');

        if (this.classList.contains('following')) {
            this.textContent = '팔로잉';
        } else {
            this.textContent = '팔로우';
        }
    });

    // --- 트윗 액션(리트윗, 마음) 토글 기능 ---
    const actionItems = document.querySelectorAll('.action-item.retweet, .action-item.like');

    actionItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});
