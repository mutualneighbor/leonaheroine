document.addEventListener('DOMContentLoaded', function () {
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

    // --- 변경: 트윗 액션(리트윗, 마음) 토글 기능 ---
    const actionItems = document.querySelectorAll('.action-item.retweet, .action-item.like');

    actionItems.forEach(item => {
        item.addEventListener('click', function() {
            // 클릭된 아이템에 'active' 클래스를 추가하거나 제거(toggle)합니다.
            this.classList.toggle('active');
        });
    });
});
